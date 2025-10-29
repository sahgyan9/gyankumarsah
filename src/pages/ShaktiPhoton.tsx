import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Cpu, FlaskConical, Zap } from "lucide-react";

const ShaktiPhoton = () => {
  const projects = [
    {
      id: 1,
      title: "PEM Electrolyzer Balance of Plant (BOP)",
      client: "IIT Delhi",
      icon: <FlaskConical className="h-8 w-8" />,
      description: "Delivered complete Balance of Plant for small-scale PEM Electrolyzer",
      achievements: [
        "End Plates and Bipolar Plates designed in Fusion 360",
        "Catalyst ink preparation and MEA assembly",
        "Performance testing and parameter optimization",
      ],
      status: "Completed",
    },
    {
      id: 2,
      title: "Multi-Channel Fuel Cells",
      client: "IIT Delhi",
      icon: <Cpu className="h-8 w-8" />,
      description: "Delivered Fuel Cells with multiple flow channel configurations",
      achievements: [
        "Serpentine flow channel design",
        "Parallel flow configuration",
        "Interdigitated pattern implementation",
        "Leaf-inspired channel design",
      ],
      status: "Completed",
    },
    {
      id: 3,
      title: "BOP for PEM, AEM, and AEMFC",
      client: "NIT Warangal",
      icon: <Zap className="h-8 w-8" />,
      description: "Comprehensive Balance of Plant solutions for multiple electrolyzer types",
      achievements: [
        "PEM electrolyzer BOP system",
        "AEM electrolyzer configuration",
        "AEMFC complete setup",
      ],
      status: "Completed",
    },
    {
      id: 4,
      title: "Hydrogen Leakage Detection System",
      client: "Internal Development",
      icon: <Cpu className="h-8 w-8" />,
      description: "Arduino-based safety system for hydrogen detection",
      achievements: [
        "MQ-8 sensor integration",
        "LED and buzzer alarm system",
        "Custom 3D-printed housing",
        "Real-time monitoring capability",
      ],
      status: "Completed",
    },
    {
      id: 5,
      title: "CO₂ Reduction Reaction (CO₂RR)",
      client: "Research Project",
      icon: <FlaskConical className="h-8 w-8" />,
      description: "Current project focusing on CO₂ reduction to produce CO",
      achievements: [
        "Catalyst development ongoing",
        "Reactor design in progress",
        "Performance optimization studies",
      ],
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <Briefcase className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Shakti Photon Solutions</h1>
          </div>
          <p className="text-xl opacity-90 mb-4">
            Research Engineer Intern (Paid) | Feb 2025 – Present
          </p>
          <p className="text-lg opacity-80">
            Guntur, Andhra Pradesh, India
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="bg-white/20">Dr. Mallikarjuna Rao</Badge>
            <Badge className="bg-white/20">Noah Jacob (CTO)</Badge>
            <Badge className="bg-white/20">Jan Nisa Qazi (PhD Scholar)</Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects & Achievements</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="p-6 shadow-elegant hover:shadow-strong transition-all">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Project Info */}
                <div className="md:col-span-2">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <Badge className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-primary font-semibold mb-2">Client: {project.client}</p>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Images */}
                <div className="space-y-4">
                  <div className="h-48 bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Project Image {index + 1}<br />
                      (Upload via Supabase)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Contributions */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Technical Contributions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-4 text-foreground">Fabrication & Assembly</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End Plates and Bipolar Plates design (Fusion 360)</li>
                <li>• Catalyst ink preparation</li>
                <li>• Ultrasonic spray coating</li>
                <li>• MEA preparation and hot-pressing</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-bold mb-4 text-foreground">Testing & Optimization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cell performance testing</li>
                <li>• Operating parameter optimization</li>
                <li>• System integration and validation</li>
                <li>• Safety system development</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShaktiPhoton;
