import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ResearchInterests from "@/components/ResearchInterests";
import References from "@/components/References";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <ResearchInterests />
            <References />
        </div>
    );
}
