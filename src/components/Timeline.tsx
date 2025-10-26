import { Calendar, Users, Upload, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
    const events = [
        {
            icon: Calendar,
            date: "November 1, 2025",
            title: "Registration Opens",
            description:
                "Start your journey by registering for IntelliHack 5.0",
        },
        {
            icon: Users,
            date: "December 10, 2025",
            title: "Team Formation",
            description:
                "Form teams of up to 4 members and finalize your squad",
        },
        {
            icon: Upload,
            date: "December 20, 2025",
            title: "Submission Deadline",
            description: "Submit your innovative projects and presentations",
        },
        {
            icon: Award,
            date: "December 21, 2025",
            title: "Finals & Awards",
            description: "Present to judges and celebrate with the winners",
        },
    ];

    return (
        <section id="timeline" className="py-24 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                        Event Timeline
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Mark your calendars! Here's everything you need to know
                        about key dates and milestones.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline line for desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-hero opacity-30" />

                        <div className="space-y-12">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row gap-8 ${
                                        index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-hero border-4 border-background z-10" />

                                    {/* Content */}
                                    <div className="md:w-1/2">
                                        <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-2 h-full">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                                                    <event.icon
                                                        className="text-white"
                                                        size={28}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-primary font-semibold mb-1">
                                                        {event.date}
                                                    </p>
                                                    <h3 className="text-xl font-bold mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Spacer for desktop */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
