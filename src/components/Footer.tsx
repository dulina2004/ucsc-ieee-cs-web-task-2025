import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import societyLogo from "@/assets/society_logo02.png";

const Footer = () => {
    return (
        <footer id="contact" className="py-12 px-4 bg-gradient-hero text-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            IntelliHack 5.0
                        </h3>
                        <p className="text-white/80">
                            48 hours of innovation, collaboration, and building
                            the future of AI at UCSC.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="mailto:ieee@ucsc.cmb.ac.lk"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/ieee-computer-society-student-branch-chapter-of-ucsc/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/ieeeucsc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/IEEECSUCSC/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                        <p className="text-white/80 text-sm">
                            <a
                                href="mailto:ieee@ucsc.cmb.ac.lk"
                                className="hover:text-white transition-colors"
                            >
                                ieee@ucsc.cmb.ac.lk
                            </a>
                        </p>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center md:justify-end">
                        <img
                            src={societyLogo}
                            alt="IEEE Computer Society UCSC Logo"
                            className="h-32 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-white/80">
                        © 2025 IntelliHack 5.0. Hosted by IEEE Computer Society
                        — UCSC Student Branch Chapter.
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                        Designed and developed by{' '}
                        <a
                            href="https://www.linkedin.com/in/dulina-gunasinghe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline"
                        >
                            Dulina Gunasinghe
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
