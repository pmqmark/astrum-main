import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users, Star, CheckCircle, ArrowRight, Globe, Award, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import educationGlobal from "@/assets/education-global.jpg";
import scholarshipPortal from "@/assets/scholarship-portal.jpg";

const Index = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Study Abroad Counseling",
      description: "Personalized guidance for global education"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Scholarships & Loans", 
      description: "End-to-end help with funding your dream"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Visa & Pre-Departure",
      description: "Be fully prepared before takeoff"
    }
  ];

  const testimonials = [
    {
      name: "Aishwarya Nair",
      course: "MSc Computer Science",
      country: "Germany",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=faces",
      quote: "Astrum guided me like family. From university selection to visa approval, every step was seamless!"
    },
    {
      name: "Rahul Sharma", 
      course: "MBA",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
      quote: "Got 80% scholarship through their portal. The mentorship was exceptional throughout my journey."
    },
    {
      name: "Priya Menon",
      course: "MS Data Science", 
      country: "Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
      quote: "From application to landing, they were with me every step. Highly recommended!"
    }
  ];

  const universities = [
    "Harvard University", "Stanford University", "MIT", "University of Oxford", 
    "Cambridge University", "University of Toronto", "Australian National University"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Global Future Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            We guide ambitious Indian students to top global universities with mentorship, funding & visa success.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Free Counseling
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We Do</h2>
            <p className="text-xl text-muted-foreground">Comprehensive support for your global education journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={educationGlobal} 
                alt="Global Education" 
                className="rounded-lg shadow-elegant"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Your Dreams, Our Mission</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-lg font-medium">100+ Global University Partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-lg font-medium">97% Visa Success Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-lg font-medium">Personalized Mentorship by Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Portal Teaser */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">NEW LAUNCH</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Introducing India's Most Transparent Scholarship Platform
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Apply. Compare. Get Funded.
              </p>
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Scholarships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <img 
                src={scholarshipPortal} 
                alt="Scholarship Portal" 
                className="rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from students who achieved their dreams</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      <Badge variant="secondary" className="text-xs mt-1">{testimonial.country}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex mt-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Students */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Trusted by Students From</h2>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            {universities.map((university, index) => (
              <div key={index} className="text-lg font-medium px-4 py-2 bg-secondary rounded-lg">
                {university}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Not sure where to begin?</h2>
          <p className="text-xl mb-8 text-white/80">
            Our expert counselors are here to guide you through every step of your journey.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Speak to an Expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;