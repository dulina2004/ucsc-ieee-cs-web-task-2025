import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import hackerthonLogo from "@/assets/hackerthon_logo.png";

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
        >
            <div className="absolute inset-0 bg-gradient-hero opacity-10" />

            <div className="container mx-auto text-center relative z-10 animate-fade-in">
                <img
                    src={hackerthonLogo}
                    alt="IntelliHack 5.0 Logo - IEEE UCSC Hackathon 2025 at University of Colombo"
                    title="IntelliHack 5.0 - Premier AI Hackathon by IEEE Computer Society UCSC"
                    className="w-64 md:w-80 mx-auto mb-8 animate-float"
                    loading="eager"
                />

                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                    IntelliHack 5.0 - IEEE UCSC Hackathon 2025
                </h1>

                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Artificial, But Intelligent - AI Innovation at University of
                    Colombo
                </h2>

                <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
                    48 hours of hacking, mentorship, and innovation. Join IEEE
                    UCSC's premier hackathon for an unforgettable journey into
                    the future of AI at University of Colombo School of
                    Computing.
                </p>

                <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                    <div className="flex items-center gap-2 text-foreground/80">
                        <Calendar
                            className="text-primary"
                            size={24}
                            aria-hidden="true"
                        />
                        <time dateTime="2025-12-19" className="font-medium">
                            December 19–21, 2025
                        </time>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                        <MapPin
                            className="text-accent"
                            size={24}
                            aria-hidden="true"
                        />
                        <address className="font-medium not-italic">
                            UCSC, Colombo, Sri Lanka
                        </address>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        size="lg"
                        onClick={() => scrollToSection("register")}
                        className="shadow-glow text-lg px-8"
                        aria-label="Register for IntelliHack 5.0 - IEEE UCSC Hackathon 2025"
                    >
                        Register Now
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => scrollToSection("timeline")}
                        className="text-lg px-8 border-2"
                        aria-label="View IntelliHack 5.0 event schedule and timeline"
                    >
                        View Schedule
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
