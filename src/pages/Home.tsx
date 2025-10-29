import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                GYAN KUMAR SAH
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                Undergraduate Student (Researcher)
              </p>
              <div className="space-y-2 text-sm md:text-base opacity-90">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+977 9816836293</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sahgyan9@gmail.com" className="hover:underline">
                    sahgyan9@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Ramgopalpur-8, Mahottari, Nepal</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center shadow-strong">
                <p className="text-center text-sm opacity-75">
                  Profile Photo<br />
                  (Upload via Supabase)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-12 container mx-auto px-4">
        <Card className="p-8 shadow-elegant">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-foreground leading-relaxed">
            I am Gyan Kumar Sah, born and raised in a small village named Sahasaula, Ramgopalpur-8, Mahottari, Nepal. 
            From my early school days, I was fascinated by how deeply physics could explain nature — from invisible atomic 
            interactions to the vastness of the cosmos. Yet, beyond curiosity, I always felt a responsibility to use science 
            for something greater — to serve humanity and our planet through innovation. This desire to blend purpose with 
            curiosity shaped my academic path. In August 2023, I joined SRM University, Andhra Pradesh, as an international 
            student to pursue a Bachelor's degree in Physics with Honours.
          </p>
        </Card>
      </section>

      {/* Education */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant hover:shadow-strong transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground">SRM University, Andhra Pradesh, India</h3>
                <Badge className="bg-primary">2023-2027</Badge>
              </div>
              <p className="text-lg mb-2 text-primary">B.Sc (Hons) in Physics</p>
              <p className="text-muted-foreground mb-2">Minor: Mathematics</p>
              <p className="font-semibold">CGPA: 9.70 / 10.00</p>
              <p className="text-sm text-muted-foreground mt-2">
                ECA: International Relations Student Council Member (2023–2024)
              </p>
            </Card>

            <Card className="p-6 shadow-elegant hover:shadow-strong transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground">Global School of Science, Kathmandu, Nepal</h3>
                <Badge className="bg-primary">2021-2023</Badge>
              </div>
              <p className="text-lg mb-2 text-primary">Grade XI & XII (Science Stream)</p>
              <p className="font-semibold">GPA: 3.81 / 4.00</p>
              <p className="text-sm text-muted-foreground mt-2">
                Subjects: Physics, Mathematics, Chemistry, Computer Science, and English
              </p>
              <p className="text-sm text-muted-foreground">
                ECA: 2nd Prize – PowerPoint Presentation Competition
              </p>
            </Card>

            <Card className="p-6 shadow-elegant hover:shadow-strong transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground">Lord Bright Wisdom Int'l English School, Sarlahi, Nepal</h3>
                <Badge className="bg-primary">2016-2021</Badge>
              </div>
              <p className="text-lg mb-2 text-primary">Grade X</p>
              <p className="font-semibold">GPA: 3.95 / 4.00</p>
              <p className="text-sm text-muted-foreground mt-2">
                ECA: School Discipline In-Charge (2018–2019), School Full Captain (2019–2020), 
                1st Prize – Football, 2nd Prize – Basketball
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Key Skills and Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4 text-primary">Technical Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• RF/DC Sputtering, Furnace Handling</li>
              <li>• Lock-In Amplifier, DC2200 LED Driver</li>
              <li>• PEM/AEM/AEMFC Electrolyzer Fabrication</li>
              <li>• Fusion 360 (CAD), 3D Printing, CNC Cutting</li>
              <li>• Arduino, Python, Overleaf (LaTeX)</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4 text-primary">Research Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Data analysis and visualization (Python, Origin)</li>
              <li>• Experimental design and optimization</li>
              <li>• Troubleshooting and instrument calibration</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Leadership, teamwork, communication</li>
              <li>• Critical thinking and adaptability</li>
              <li>• Technical documentation</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Research Interests</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="px-4 py-2 text-base bg-primary">Clean Energy (Green Hydrogen, CO₂ Conversion)</Badge>
            <Badge className="px-4 py-2 text-base bg-primary">Nanomaterials and Thin Film Deposition</Badge>
            <Badge className="px-4 py-2 text-base bg-primary">Quantum Computing</Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
