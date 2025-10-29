import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Quantum Computing Fundamentals",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      description: "Learned basic knowledge of Qiskit, simulated quantum circuits on IBM Quantum platform",
    },
    {
      id: 2,
      title: "Data Science with Python",
      issuer: "Finlatics",
      date: "August 2024",
      description: "Comprehensive course on data science fundamentals and Python applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Certifications & Courses</h1>
          </div>
          <p className="text-xl opacity-90">
            Professional development and continuous learning
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="p-6 shadow-elegant hover:shadow-strong transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                </div>
                <Badge className="bg-primary">{cert.date}</Badge>
              </div>
              <p className="text-muted-foreground">{cert.description}</p>
              
              <div className="mt-4 h-48 bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Certificate Image<br />
                  (Upload via Supabase)
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="p-8 mt-8 shadow-elegant bg-secondary">
          <h2 className="text-2xl font-bold mb-4 text-primary">Add New Certificate</h2>
          <p className="text-muted-foreground">
            Use Supabase Storage to upload certificate images. Create a "certificates" bucket and implement 
            upload functionality with proper RLS policies.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Certificates;
