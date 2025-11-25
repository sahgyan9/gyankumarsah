import { Helmet } from 'react-helmet-async';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ResearchInterests from "@/components/ResearchInterests";
import References from "@/components/References";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Gyan Kumar Sah - Physics Researcher & Developer</title>
                <meta
                    name="description"
                    content="Gyan Kumar Sah - Undergraduate Physics student at SRM University AP, specializing in material science, optoelectronics, and electrochemistry research."
                />
                <meta property="og:title" content="Gyan Kumar Sah - Physics Researcher & Developer" />
                <meta property="og:description" content="Undergraduate Physics student at SRM University AP, specializing in material science, optoelectronics, and electrochemistry research." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://gyankumarsah.com" />
            </Helmet>
            <div className="w-full">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Experience />
                <ResearchInterests />
                <References />
            </div>
        </>
    );
}
