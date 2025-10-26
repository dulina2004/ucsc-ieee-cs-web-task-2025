import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: "About", id: "about" },
        { name: "Timeline", id: "timeline" },
        { name: "Register", id: "register" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-elegant"
                    : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection("hero")}
                    className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    aria-label="IntelliHack Home"
                >
                    IntelliHack 5.0
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                    <ThemeToggle />
                    <Button
                        onClick={() => scrollToSection("register")}
                        className="shadow-glow"
                    >
                        Register Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elegant md:hidden animate-slide-in-right">
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection("register")}
                                className="w-full shadow-glow"
                            >
                                Register Now
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
