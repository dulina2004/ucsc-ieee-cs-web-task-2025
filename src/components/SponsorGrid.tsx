import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import societyLogo01 from "@/assets/society_logo01.png";
import societyLogo02 from "@/assets/society_logo02.png";

const SponsorGrid = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section id="sponsors" className="py-24 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                        Hosted & Supported By
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        IntelliHack 5.0 is proudly hosted by the IEEE Computer
                        Society — UCSC Student Branch Chapter
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Host Logo */}
                    <div className="flex justify-center">
                        <Card className="p-8 border-2 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 max-w-md w-full">
                            <div className="flex justify-center items-center h-32">
                                <img
                                    src={isDark ? societyLogo02 : societyLogo01}
                                    alt="IEEE Computer Society - UCSC Student Branch Chapter"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </Card>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground">
                            Hosted by{" "}
                            <strong className="text-primary">
                                IEEE Computer Society — UCSC Student Branch
                                Chapter
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorGrid;
