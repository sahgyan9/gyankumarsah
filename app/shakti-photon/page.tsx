import type { Metadata } from "next";
import ShaktiPhotonContent from "@/components/ShaktiPhotonContent";

export const metadata: Metadata = {
    title: "Shakti Photon Solutions - Gyan Kumar Sah",
    description: "Projects and work experience at Shakti Photon Solutions Pvt. Ltd. - PEM Electrolyzer, Fuel Cells, and CO₂RR research.",
};

export default function ShaktiPhotonPage() {
    return <ShaktiPhotonContent />;
}
