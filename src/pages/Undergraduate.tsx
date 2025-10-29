import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Microscope, Trophy, BookOpen } from "lucide-react";

const Undergraduate = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Undergraduate Work</h1>
          </div>
          <p className="text-xl opacity-90">
            Research, Academic Projects, and Extracurricular Activities
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-6">
          <Microscope className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Research Projects</h2>
        </div>

        {/* Main Research Project */}
        <Card className="p-8 mb-8 shadow-elegant">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Optically Controlled Ferromagnetic Material
              </h3>
              <p className="text-primary font-semibold">Exotic Interface Lab</p>
              <p className="text-muted-foreground">Mentor: Dr. Krishna Prasad Maity</p>
            </div>
            <Badge className="bg-primary">Aug 2024 – Present</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Project Overview:</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Investigation of optical control mechanisms in ferromagnetic thin films using advanced 
                  characterization techniques.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Key Contributions:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Optimized RF sputtering parameters for 30nm cobalt thin films</li>
                  <li>• Deposited cobalt thin film in Hall geometry on 5mm × 5mm glass substrate</li>
                  <li>• Designed and 3D printed custom substrate holder</li>
                  <li>• Calibrated 0.5T Helmholtz coil setup</li>
                  <li>• Performed anomalous Hall effect measurements using Lock-In Amplifier</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-48 bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Lab Equipment<br />
                  (Upload via Supabase)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Collaborative Project */}
        <Card className="p-8 shadow-elegant">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                CdSe Doped with Graphene Quantum Dots (GQD)
              </h3>
              <p className="text-primary font-semibold">Collaborative Research</p>
              <p className="text-muted-foreground">Team: Nilja George, Akshay Sampath</p>
              <p className="text-muted-foreground">Mentor: Dr. Krishna Prasad Maity</p>
            </div>
            <Badge className="bg-yellow-600">Paper to be Published</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Research Highlights:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Established reliable electrical contacts using silver paste on CdSe substrates</li>
                  <li>• Designed custom 3D-printed holder for robust electrical connections</li>
                  <li>• Conducted I-V characterization under varying light intensities</li>
                  <li>• Automated measurements using LabVIEW with Keithley Source Meter</li>
                  <li>• Performed time-response measurements using pulse mode</li>
                  <li>• <strong>Achieved 10× improvement in response time (200ms → 20ms) with GQD doping</strong></li>
                  <li>• Data processing and visualization using Python</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-48 bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Research Setup<br />
                  (Upload via Supabase)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Academic Projects */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Academic Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Post-Quantum Cryptography
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Mentor: Dr. Sazzad Ali Biswas
              </p>
              <p className="text-sm text-muted-foreground">
                Explored post-quantum cryptography concepts, focusing on Shor's Algorithm, 
                quantum superposition, and parallel processing capabilities.
              </p>
            </Card>

            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Temperature-Controlled Fan System
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Mentor: Dr. Krishna Prasad Maity
              </p>
              <p className="text-sm text-muted-foreground">
                Designing analog feedback-controlled cooling system using thermistor-based sensing, 
                op-amp comparator (LM358), and transistor driver circuit.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Hackathons & Competitions</h2>
        </div>

        <Card className="p-8 shadow-elegant">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Quantum Double Shield Protocol (QDSP)
              </h3>
              <p className="text-primary font-semibold">Amaravati Quantum Valley Hackathon</p>
            </div>
            <Badge className="bg-yellow-600 text-lg px-4 py-2">3rd Place</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground">
                Developed a prototype for secure, quantum-enhanced communication using IBM Quantum 
                and Qiskit simulators.
              </p>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Technical Implementation:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Quantum Key Distribution (BB84)</strong> for session key exchange</li>
                  <li>• <strong>Quantum Random Number Generation (QRNG)</strong> for entropy</li>
                  <li>• Adaptive authentication layer with quantum-derived session tokens</li>
                  <li>• AES encryption integration</li>
                  <li>• Eavesdropper detection via QBER analysis</li>
                  <li>• Hybrid quantum–classical security architecture</li>
                </ul>
              </div>

              <div className="mt-4">
                <a 
                  href="https://preview--qdsp.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  View Prototype →
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-48 bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Project Screenshot<br />
                  (Upload via Supabase)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Undergraduate;
