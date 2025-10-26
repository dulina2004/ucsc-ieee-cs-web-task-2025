import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "What is IntelliHack 5.0?",
        answer: "IntelliHack 5.0 is a 48-hour AI-focused hackathon hosted by the IEEE Computer Society at UCSC. It's an opportunity for innovators, developers, and AI enthusiasts to collaborate, build cutting-edge solutions, and compete for exciting prizes.",
    },
    {
        question: "Who can participate?",
        answer: "IntelliHack 5.0 is open to students, professionals, and AI enthusiasts of all skill levels. Whether you're a beginner or an experienced developer, you're welcome to join and learn!",
    },
    {
        question: "Do I need a team to participate?",
        answer: "You can participate either as an individual or as part of a team. Teams can have up to 4 members. If you don't have a team, we'll have team formation sessions at the beginning of the event.",
    },
    {
        question: "What should I bring?",
        answer: "Bring your laptop, chargers, and any hardware you plan to use. We'll provide WiFi, workspace, meals, and refreshments throughout the event.",
    },
    {
        question: "Is there a registration fee?",
        answer: "No, IntelliHack 5.0 is completely free to attend! We believe in making innovation accessible to everyone.",
    },
    {
        question: "What are the prizes?",
        answer: "We have exciting prizes for winning teams, including cash prizes, tech gadgets, and opportunities for mentorship. Detailed prize information will be announced closer to the event.",
    },
    {
        question: "Will there be mentors available?",
        answer: "Yes! We'll have experienced mentors from the industry and academia available throughout the hackathon to guide you, answer questions, and provide technical support.",
    },
    {
        question: "What kind of projects can I build?",
        answer: "Projects should focus on AI and its applications. This can include machine learning, natural language processing, computer vision, robotics, or any innovative AI solution. Be creative!",
    },
    {
        question: "Will food be provided?",
        answer: "Yes! We'll provide meals, snacks, and beverages throughout the 48-hour event to keep you energized and focused.",
    },
    {
        question: "How do I stay updated?",
        answer: "Follow us on our social media channels (LinkedIn, Facebook, Instagram) and check your email regularly for updates. You can also join our Discord/Slack community for real-time communication.",
    },
];

const FAQ = () => {
    return (
        <section
            id="faq"
            className="py-20 px-4 bg-gradient-to-b from-background to-background/50"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? We've got answers!
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
                        >
                            <AccordionTrigger className="text-left hover:no-underline py-4">
                                <span className="font-semibold text-lg">
                                    {faq.question}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="mailto:ieee@ucsc.cmb.ac.lk"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-hero rounded-md hover:opacity-90 transition-opacity"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
