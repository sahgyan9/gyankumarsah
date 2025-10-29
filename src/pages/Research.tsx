import { Helmet } from 'react-helmet-async';
import ResearchContent from "@/components/ResearchContent";

export default function Research() {
    return (
        <>
            <Helmet>
                <title>Undergraduate Research - Gyan Kumar Sah</title>
                <meta 
                    name="description" 
                    content="Undergraduate research work at SRM University AP - Material science, optoelectronics, and experimental physics projects." 
                />
                <meta property="og:title" content="Undergraduate Research - Gyan Kumar Sah" />
                <meta property="og:description" content="Undergraduate research work at SRM University AP - Material science, optoelectronics, and experimental physics projects." />
                <link rel="canonical" href="https://gyankumarsah.com/research" />
            </Helmet>
            <ResearchContent />
        </>
    );
}
