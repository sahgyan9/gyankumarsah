import { Helmet } from 'react-helmet-async';
import CertificatesContent from "@/components/CertificatesContent";

export default function Certificates() {
    return (
        <>
            <Helmet>
                <title>Certificates - Gyan Kumar Sah</title>
                <meta 
                    name="description" 
                    content="Professional certificates and courses completed by Gyan Kumar Sah in Quantum Computing, Data Science, and other technical domains." 
                />
                <meta property="og:title" content="Certificates - Gyan Kumar Sah" />
                <meta property="og:description" content="Professional certificates and courses completed by Gyan Kumar Sah in Quantum Computing, Data Science, and other technical domains." />
                <link rel="canonical" href="https://gyankumarsah.com/certificates" />
            </Helmet>
            <CertificatesContent />
        </>
    );
}
