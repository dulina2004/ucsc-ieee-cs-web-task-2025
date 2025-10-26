import { useState } from "react";
import {
    Linkedin,
    Facebook,
    Instagram,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/ieee-computer-society-student-branch-chapter-of-ucsc/posts/?feedView=all",
        icon: Linkedin,
        color: "hover:text-[#0A66C2]",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/IEEECSUCSC/",
        icon: Facebook,
        color: "hover:text-[#1877F2]",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/ieeeucsc",
        icon: Instagram,
        color: "hover:text-[#E4405F]",
    },
];

export function SocialSidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
            <div
                className="relative bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-elegant overflow-hidden transition-all duration-300"
                style={{
                    height: isExpanded ? "240px" : "190px",
                    width: "56px",
                }}
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary/20 hover:border-primary/40 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 z-10"
                    aria-label={
                        isExpanded
                            ? "Collapse social links"
                            : "Expand social links"
                    }
                >
                    {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                    ) : (
                        <ChevronDown className="h-4 w-4" />
                    )}
                </button>

                {/* Social Links */}
                <div
                    className={`absolute top-16 left-1/2 -translate-x-1/2 flex flex-col gap-3 transition-all duration-300 ${
                        isExpanded
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-full bg-background/50 border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 group relative`}
                            aria-label={`Follow us on ${link.name}`}
                        >
                            <link.icon className="h-4 w-4" />
                            <span className="absolute left-14 bg-card px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-border shadow-lg">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Connect Text */}
                <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[10px] font-semibold tracking-widest text-muted-foreground transition-opacity duration-300 ${
                        isExpanded ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {"CONNECT".split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
