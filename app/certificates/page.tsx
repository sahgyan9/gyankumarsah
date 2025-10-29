import type { Metadata } from "next";
import CertificatesContent from "@/components/CertificatesContent";

export const metadata: Metadata = {
    title: "Certificates - Gyan Kumar Sah",
    description: "Professional certificates and courses completed by Gyan Kumar Sah in Quantum Computing, Data Science, and other technical domains.",
};

export default function CertificatesPage() {
    return <CertificatesContent />;
}
