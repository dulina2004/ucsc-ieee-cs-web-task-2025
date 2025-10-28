import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO = ({
    title = "IntelliHack 5.0 | IEEE UCSC Hackathon 2025 | University of Colombo AI Competition",
    description = "Join IntelliHack 5.0 - IEEE UCSC's premier AI hackathon at University of Colombo School of Computing. 48 hours of innovation, mentorship, and coding competition. Register now for IntelliHack 2025, Sri Lanka's top student hackathon event. December 19-21, 2025.",
    keywords = "IEEE UCSC, IEEEUCSC, UCSC IEEE Student Branch, University of Colombo IEEE, IEEE UCSC events, IEEE UCSC hackathon, UCSC tech events, IEEE UCSC web team, IEEE UCSC projects, IntelliHack 5.0, IntelliHack5.0, IntelliHack UCSC, IntelliHack IEEE UCSC, IntelliHack 2025, IntelliHack competition, UCSC IntelliHack, IEEE IntelliHack, IntelliHack registration, IntelliHack winners, UCSC hackathon, IEEE hackathon, University hackathon Sri Lanka, Student hackathon UCSC, Colombo hackathon event, Sri Lanka tech hackathon, UCSC innovation challenge, IEEE coding competition UCSC, Tech challenge UCSC, Demo hackathon page, Sample hackathon website, Hackathon website design, Hackathon landing page example, IEEE UCSC website demo, IntelliHack web design demo, IEEE UCSC frontend showcase, Explore IEEE UCSC hackathons, Join IEEE UCSC events, Learn more about IntelliHack, UCSC hackathon web design sample, IEEE UCSC project showcase",
    image = "https://storage.googleapis.com/gpt-engineer-file-uploads/J44q86bhhgTNVJhBINBIC8C3BP03/social-images/social-1761439623002-hackerthon_logo.png",
    url = "https://ucsc-ieee-cs-web-task-2025.vercel.app/",
    type = "website",
}: SEOProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
