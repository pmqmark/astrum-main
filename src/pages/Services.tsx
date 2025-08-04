import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, GraduationCap, DollarSign, Plane, Home, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Counseling & Career Planning",
      description: "Tailored roadmap based on your profile, goals & preferences.",
      features: ["One-on-one counseling sessions", "Career assessment", "University shortlisting", "Course recommendations"]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "University & Course Selection", 
      description: "AI + Human curated options that fit your ambition and budget.",
      features: ["100+ partner universities", "Course compatibility analysis", "Budget planning", "Admission requirements"]
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Application Assistance",
      description: "SOP/Essay Help, LOR Strategy, Timelines — all handled.",
      features: ["SOP & essay writing", "LOR strategy", "Application timeline", "Document preparation"]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Scholarship & Education Loans",
      description: "In-house financial advisors to maximize funding opportunities.",
      features: ["Scholarship matching", "Loan assistance", "Financial planning", "Award optimization"]
    },
    {
      icon: <Plane className="h-12 w-12 text-primary" />,
      title: "Visa Support",
      description: "Complete documentation, mock interviews, and embassy updates.",
      features: ["Visa documentation", "Mock interviews", "Embassy liaison", "Travel planning"]
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Pre-departure & Post-landing",
      description: "Housing, forex, SIM, travel cards, airport pickup, bank accounts.",
      features: ["Accommodation support", "Airport pickup", "Bank account setup", "SIM & forex"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90">
            Comprehensive Study Abroad Services — from planning to landing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/80">
            Let our experts guide you through every step of your study abroad process.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;