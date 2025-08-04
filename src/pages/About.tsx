import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Calendar, ArrowRight } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Naveen Jose",
      role: "Director & Mentor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      bio: "With 10+ years in international education, Naveen has guided thousands of students to their dream universities. His expertise spans across admissions strategy and scholarship counseling."
    },
    {
      name: "Manu Mohan", 
      role: "Director & Global Strategy",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=faces",
      bio: "Manu brings extensive experience in global partnerships and visa processing. He has established relationships with top universities across 15+ countries."
    }
  ];

  const timeline = [
    { year: "2024", event: "Founded in Kerala by Naveen Jose and Manu Mohan" },
    { year: "2024", event: "Established partnerships with 50+ global universities" },
    { year: "2024", event: "Launched transparent scholarship portal" },
    { year: "2024", event: "Achieved 97% visa success rate in first year" }
  ];

  return (
    <div className="min-h-screen">
      {/* Company Overview */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">ABOUT US</Badge>
          <h1 className="text-5xl font-bold mb-6">Empowering Global Dreams</h1>
          <p className="text-xl text-white/90">
            Astrum Great Indian Scholars Pvt Ltd is on a mission to empower 100,000 students from India to become global citizens.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">
                  To democratize access to international education by providing personalized guidance, transparent processes, and comprehensive support to every aspiring student.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                  <Eye className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">
                  To make every Indian student globally employable by bridging the gap between local education and international opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Story So Far */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">The Story So Far</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2024 and based in Kerala, our company has grown rapidly through personalized mentoring, 
              institutional tie-ups, and trust-first counseling. We believe in transparency, excellence, and putting 
              students first in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 p-2 bg-primary/10 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-lg">{item.year}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Founders</h2>
            <p className="text-xl text-muted-foreground">
              Passionate leaders dedicated to transforming study abroad consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <Badge className="mb-4">{founder.role}</Badge>
                  <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 text-white/80">
            Be part of the next generation of global citizens. Let us help you achieve your dreams.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;