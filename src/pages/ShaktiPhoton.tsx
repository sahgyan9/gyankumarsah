import { Helmet } from 'react-helmet-async';
import ShaktiPhotonContent from "@/components/ShaktiPhotonContent";

export default function ShaktiPhoton() {
  return (
    <>
      <Helmet>
        <title>Shakti Photon Solutions - Gyan Kumar Sah</title>
        <meta
          name="description"
          content="Work experience at Shakti Photon Solutions - Electrolyzer design and fabrication projects for green hydrogen production."
        />
        <meta property="og:title" content="Shakti Photon Solutions - Gyan Kumar Sah" />
        <meta property="og:description" content="Work experience at Shakti Photon Solutions - Electrolyzer design and fabrication projects for green hydrogen production." />
        <link rel="canonical" href="https://gyankumarsah.com/shakti-photon" />
      </Helmet>
      <ShaktiPhotonContent />
    </>
  );
}
