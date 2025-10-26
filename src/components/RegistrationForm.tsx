import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, Users, User } from "lucide-react";
import { initEmailJS, sendRegistrationEmail } from "@/lib/emailService";

type RegistrationType = "individual" | "team";

interface TeamMember {
    name: string;
    email: string;
    institution: string;
    role: string;
}

const RegistrationForm = () => {
    const [registrationType, setRegistrationType] =
        useState<RegistrationType>("individual");
    const [teamSize, setTeamSize] = useState(2);
    const [teamName, setTeamName] = useState("");
    const [individualTeamName, setIndividualTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
        { name: "", email: "", institution: "", role: "" },
        { name: "", email: "", institution: "", role: "" },
    ]);
    const [individualData, setIndividualData] = useState<TeamMember>({
        name: "",
        email: "",
        institution: "",
        role: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    // Initialize EmailJS on component mount
    useEffect(() => {
        initEmailJS();
    }, []);

    const handleTeamSizeChange = (newSize: number) => {
        // Enforce maximum of 4 members
        if (newSize > 4) {
            toast.error("Maximum team size is 4 members");
            return;
        }
        if (newSize < 2) {
            toast.error("Minimum team size is 2 members");
            return;
        }

        setTeamSize(newSize);
        const currentMembers = [...teamMembers];

        if (newSize > currentMembers.length) {
            // Add new empty members
            for (let i = currentMembers.length; i < newSize; i++) {
                currentMembers.push({
                    name: "",
                    email: "",
                    institution: "",
                    role: "",
                });
            }
        } else {
            // Remove extra members
            currentMembers.splice(newSize);
        }

        setTeamMembers(currentMembers);
    };

    const handleTeamMemberChange = (
        index: number,
        field: keyof TeamMember,
        value: string
    ) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = { ...updatedMembers[index], [field]: value };
        setTeamMembers(updatedMembers);
    };

    const handleIndividualChange = (field: keyof TeamMember, value: string) => {
        setIndividualData({ ...individualData, [field]: value });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (registrationType === "individual") {
            // Validate individual registration
            if (!individualTeamName.trim()) {
                toast.error("Please enter a team name");
                return;
            }
            if (
                !individualData.name.trim() ||
                !individualData.email.trim() ||
                !individualData.institution.trim()
            ) {
                toast.error("Please fill in all required fields");
                return;
            }
            if (!validateEmail(individualData.email)) {
                toast.error("Please enter a valid email address");
                return;
            }

            // Store individual registration
            const registrations = JSON.parse(
                localStorage.getItem("intellihack_registrations") || "[]"
            );
            registrations.push({
                type: "individual",
                teamName: individualTeamName,
                ...individualData,
                timestamp: new Date().toISOString(),
            });
            localStorage.setItem(
                "intellihack_registrations",
                JSON.stringify(registrations)
            );

            // Send confirmation email
            sendConfirmationEmail(
                individualData.email,
                individualData.name,
                individualTeamName,
                "individual",
                1,
                individualData.name
            );
        } else {
            // Validate team registration
            if (!teamName.trim()) {
                toast.error("Please enter a team name");
                return;
            }

            // Validate team size
            if (teamSize > 4) {
                toast.error("Maximum team size is 4 members");
                return;
            }
            if (teamSize < 2) {
                toast.error("Minimum team size is 2 members");
                return;
            }

            for (let i = 0; i < teamMembers.length; i++) {
                const member = teamMembers[i];
                if (
                    !member.name.trim() ||
                    !member.email.trim() ||
                    !member.institution.trim()
                ) {
                    toast.error(
                        `Please fill in all required fields for Team Member ${
                            i + 1
                        }`
                    );
                    return;
                }
                if (!validateEmail(member.email)) {
                    toast.error(
                        `Please enter a valid email address for Team Member ${
                            i + 1
                        }`
                    );
                    return;
                }
            }

            // Store team registration
            const registrations = JSON.parse(
                localStorage.getItem("intellihack_registrations") || "[]"
            );
            registrations.push({
                type: "team",
                teamName,
                teamSize,
                members: teamMembers,
                timestamp: new Date().toISOString(),
            });
            localStorage.setItem(
                "intellihack_registrations",
                JSON.stringify(registrations)
            );

            // Send confirmation email to team leader (first member)
            const teamLeader = teamMembers[0];
            const memberNames = teamMembers.map((m) => m.name).join(", ");

            sendConfirmationEmail(
                teamLeader.email,
                teamLeader.name,
                teamName,
                "team",
                teamSize,
                memberNames
            );
        }

        setIsSubmitted(true);
        toast.success(
            "Registration successful! Check your email for confirmation."
        );
    };

    const sendConfirmationEmail = async (
        email: string,
        name: string,
        teamName: string,
        type: "individual" | "team",
        size: number,
        memberNames: string
    ) => {
        setIsSendingEmail(true);

        try {
            const emailSent = await sendRegistrationEmail({
                to_email: email,
                to_name: name,
                team_name: teamName,
                registration_type: type,
                team_size: size,
                team_members: memberNames,
                event_name: "IntelliHack 5.0",
                event_date: "December 19–21, 2025",
                event_location: "UCSC, Colombo",
            });

            if (emailSent) {
                console.log("Confirmation email sent successfully");
            } else {
                console.warn(
                    "Failed to send confirmation email, but registration was saved"
                );
            }
        } catch (error) {
            console.error("Error sending confirmation email:", error);
        } finally {
            setIsSendingEmail(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="register" className="py-24 px-4 bg-gradient-subtle">
                <div className="container mx-auto max-w-2xl">
                    <Card className="p-12 text-center border-2 shadow-elegant">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                            <CheckCircle2 className="text-white" size={48} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-primary">
                            Thanks for Registering!
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            We've received your registration for IntelliHack
                            5.0. Check your email for next steps and updates.
                        </p>
                        <Button
                            onClick={() => {
                                setIsSubmitted(false);
                                setRegistrationType("individual");
                                setTeamName("");
                                setIndividualTeamName("");
                                setTeamMembers([
                                    {
                                        name: "",
                                        email: "",
                                        institution: "",
                                        role: "",
                                    },
                                    {
                                        name: "",
                                        email: "",
                                        institution: "",
                                        role: "",
                                    },
                                ]);
                                setIndividualData({
                                    name: "",
                                    email: "",
                                    institution: "",
                                    role: "",
                                });
                            }}
                            variant="outline"
                        >
                            Register Another
                        </Button>
                    </Card>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="py-24 px-4 bg-gradient-subtle">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-hero bg-clip-text text-transparent">
                        Register Now
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Secure your spot at IntelliHack 5.0. Limited seats
                        available!
                    </p>
                </div>

                {/* Registration Type Selection */}
                <div className="flex gap-4 mb-8 justify-center">
                    <Button
                        type="button"
                        variant={
                            registrationType === "individual"
                                ? "default"
                                : "outline"
                        }
                        size="lg"
                        onClick={() => setRegistrationType("individual")}
                        className="flex items-center gap-2"
                    >
                        <User size={20} />
                        Individual
                    </Button>
                    <Button
                        type="button"
                        variant={
                            registrationType === "team" ? "default" : "outline"
                        }
                        size="lg"
                        onClick={() => setRegistrationType("team")}
                        className="flex items-center gap-2"
                    >
                        <Users size={20} />
                        Team
                    </Button>
                </div>

                <Card className="p-8 border-2 shadow-elegant">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {registrationType === "individual" ? (
                            // Individual Registration Form
                            <>
                                <div>
                                    <Label htmlFor="ind-team-name">
                                        Team Name *
                                    </Label>
                                    <Input
                                        id="ind-team-name"
                                        value={individualTeamName}
                                        onChange={(e) =>
                                            setIndividualTeamName(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Solo Warriors"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="ind-name">
                                        Full Name *
                                    </Label>
                                    <Input
                                        id="ind-name"
                                        value={individualData.name}
                                        onChange={(e) =>
                                            handleIndividualChange(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="John Doe"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="ind-email">
                                        Email Address *
                                    </Label>
                                    <Input
                                        id="ind-email"
                                        type="email"
                                        value={individualData.email}
                                        onChange={(e) =>
                                            handleIndividualChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        placeholder="john@example.com"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="ind-institution">
                                        Institution/University *
                                    </Label>
                                    <Input
                                        id="ind-institution"
                                        value={individualData.institution}
                                        onChange={(e) =>
                                            handleIndividualChange(
                                                "institution",
                                                e.target.value
                                            )
                                        }
                                        placeholder="University of Colombo"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="ind-role">
                                        Role (Student/Professional/Other)
                                    </Label>
                                    <Input
                                        id="ind-role"
                                        value={individualData.role}
                                        onChange={(e) =>
                                            handleIndividualChange(
                                                "role",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Student"
                                        className="mt-2"
                                    />
                                </div>
                            </>
                        ) : (
                            // Team Registration Form
                            <>
                                <div>
                                    <Label htmlFor="team-name">
                                        Team Name *
                                    </Label>
                                    <Input
                                        id="team-name"
                                        value={teamName}
                                        onChange={(e) =>
                                            setTeamName(e.target.value)
                                        }
                                        placeholder="Code Warriors"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="team-size">
                                        Number of Team Members (2-4) *
                                    </Label>
                                    <Input
                                        id="team-size"
                                        type="number"
                                        min="2"
                                        max="4"
                                        value={teamSize}
                                        onChange={(e) =>
                                            handleTeamSizeChange(
                                                Number(e.target.value)
                                            )
                                        }
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div className="border-t pt-6 mt-6">
                                    <h3 className="text-xl font-bold mb-6">
                                        Team Members
                                    </h3>

                                    {teamMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className="mb-8 p-6 bg-muted/30 rounded-lg border"
                                        >
                                            <h4 className="font-semibold mb-4 text-primary">
                                                Team Member {index + 1}
                                                {index === 0 && (
                                                    <span className="ml-2 text-sm font-normal bg-primary/20 text-primary px-3 py-1 rounded-full">
                                                        Team Leader
                                                    </span>
                                                )}
                                            </h4>

                                            <div className="space-y-4">
                                                <div>
                                                    <Label
                                                        htmlFor={`member-${index}-name`}
                                                    >
                                                        Full Name *
                                                    </Label>
                                                    <Input
                                                        id={`member-${index}-name`}
                                                        value={member.name}
                                                        onChange={(e) =>
                                                            handleTeamMemberChange(
                                                                index,
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="John Doe"
                                                        required
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor={`member-${index}-email`}
                                                    >
                                                        Email Address *
                                                    </Label>
                                                    <Input
                                                        id={`member-${index}-email`}
                                                        type="email"
                                                        value={member.email}
                                                        onChange={(e) =>
                                                            handleTeamMemberChange(
                                                                index,
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="john@example.com"
                                                        required
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor={`member-${index}-institution`}
                                                    >
                                                        Institution/University *
                                                    </Label>
                                                    <Input
                                                        id={`member-${index}-institution`}
                                                        value={
                                                            member.institution
                                                        }
                                                        onChange={(e) =>
                                                            handleTeamMemberChange(
                                                                index,
                                                                "institution",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="University of Colombo"
                                                        required
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor={`member-${index}-role`}
                                                    >
                                                        Role
                                                        (Student/Professional/Other)
                                                    </Label>
                                                    <Input
                                                        id={`member-${index}-role`}
                                                        value={member.role}
                                                        onChange={(e) =>
                                                            handleTeamMemberChange(
                                                                index,
                                                                "role",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Student"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full shadow-glow"
                            disabled={isSendingEmail}
                        >
                            {isSendingEmail
                                ? "Sending..."
                                : "Complete Registration"}
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    );
};

export default RegistrationForm;
