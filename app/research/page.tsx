import type { Metadata } from "next";
import ResearchContent from "@/components/ResearchContent";

export const metadata: Metadata = {
    title: "Undergraduate Research - Gyan Kumar Sah",
    description: "Research projects, academic work, and extracurricular activities at SRM University, Andhra Pradesh.",
};

export default function ResearchPage() {
    return <ResearchContent />;
}
