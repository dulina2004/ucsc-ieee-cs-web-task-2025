import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import RegistrationForm from "@/components/RegistrationForm";
import SponsorGrid from "@/components/SponsorGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";

const Index = () => {
    return (
        <div className="relative min-h-screen">
            <ParticleBackground color="rgba(30,64,175,0.6)" count={100} />
            <SocialSidebar />
            <Header />
            <Hero />
            <About />
            <Timeline />
            <RegistrationForm />
            <SponsorGrid />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Index;
