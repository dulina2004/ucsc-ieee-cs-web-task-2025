import { Sparkles, Users, Trophy, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
    const features = [
        {
            icon: Users,
            title: "Collaborate",
            description: "Team up with brilliant minds from across the country",
        },
        {
            icon: Lightbulb,
            title: "Innovate",
            description:
                "Transform creative ideas into groundbreaking solutions",
        },
        {
            icon: Trophy,
            title: "Compete",
            description: "Compete for amazing prizes and recognition",
        },
        {
            icon: Sparkles,
            title: "Learn",
            description: "Gain insights from industry experts and mentors",
        },
    ];

    return (
        <section
            id="about"
            className="py-24 px-4 bg-gradient-subtle"
            aria-labelledby="about-heading"
        >
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2
                        id="about-heading"
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent"
                    >
                        About IntelliHack 5.0 - IEEE UCSC Premier Hackathon
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        IntelliHack 5.0 is the premier AI hackathon hosted by
                        the IEEE Computer Society — UCSC Student Branch Chapter
                        at University of Colombo School of Computing. Join us
                        for 48 intense hours of innovation, learning, and
                        building the future of artificial intelligence in Sri
                        Lanka's top tech competition.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2"
                        >
                            <div
                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <feature.icon
                                    className="text-white"
                                    size={32}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 border-2 shadow-elegant">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            What to Expect at IEEE UCSC's IntelliHack 5.0
                        </h3>
                        <div className="space-y-4 text-foreground/80">
                            <p>
                                <strong className="text-primary">
                                    48-Hour Coding Challenge:
                                </strong>{" "}
                                Build innovative AI-powered solutions from
                                scratch with your team at UCSC's premier
                                hackathon competition.
                            </p>
                            <p>
                                <strong className="text-primary">
                                    Expert Mentorship:
                                </strong>{" "}
                                Get guidance from industry professionals and
                                academic leaders throughout the IntelliHack 2025
                                event.
                            </p>
                            <p>
                                <strong className="text-primary">
                                    Workshops & Tech Sessions:
                                </strong>{" "}
                                Attend tech talks and hands-on workshops on
                                cutting-edge AI technologies at University of
                                Colombo.
                            </p>
                            <p>
                                <strong className="text-primary">
                                    Networking Opportunities:
                                </strong>{" "}
                                Connect with like-minded innovators, tech
                                recruiters, and potential co-founders at Sri
                                Lanka's top student hackathon.
                            </p>
                            <p>
                                <strong className="text-primary">
                                    Prizes & Recognition:
                                </strong>{" "}
                                Win exciting prizes and showcase your IEEE UCSC
                                hackathon project to expert judges.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
