import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote, Phone, Mail, MapPin, ArrowRight, Users, Handshake, Calendar } from "lucide-react";

const Contact = () => {
  const testimonials = [
    {
      name: "Aishwarya Nair",
      course: "MSc Computer Science",
      country: "Germany",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=faces",
      quote: "Astrum guided me like family. From university selection to visa approval, every step was seamless and stress-free!"
    },
    {
      name: "Rahul Sharma", 
      course: "MBA",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
      quote: "Got 80% scholarship through their portal. The mentorship was exceptional throughout my entire journey to Canada."
    },
    {
      name: "Priya Menon",
      course: "MS Data Science", 
      country: "Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
      quote: "From application to landing in Sydney, they were with me every step. Highly recommended for serious students!"
    }
  ];

  const teamMembers = [
    {
      name: "Naveen Jose",
      role: "Director & Mentor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
      specialization: "University Partnerships & Strategy"
    },
    {
      name: "Manu Mohan", 
      role: "Director & Global Strategy",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces",
      specialization: "Visa Processing & International Relations"
    },
    {
      name: "Sarah Thomas",
      role: "Senior Counselor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=faces",
      specialization: "Application & Essay Guidance"
    },
    {
      name: "Raj Patel",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      specialization: "Scholarships & Education Loans"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Mon-Sat, 9 AM - 6 PM IST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email", 
      details: ["info@astrumscholars.com", "counseling@astrumscholars.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["Astrum Great Indian Scholars Pvt Ltd", "Kochi, Kerala, India"],
      description: "Visit us for in-person consultation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90">
            Ready to start your global education journey? Let's connect and make your dreams a reality.
          </p>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from students who achieved their dreams with us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
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
                  <div className="flex mt-4">
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

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">Dedicated professionals committed to your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge className="mb-3 text-xs">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-foreground font-medium">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred Country</label>
                    <Input placeholder="e.g., Canada, Australia, UK" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your study abroad goals..." rows={4} />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* University Partnership */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">PARTNER WITH US</Badge>
              <h2 className="text-4xl font-bold mb-6">Universities Can Partner With Us</h2>
              <p className="text-xl mb-8 text-white/90">
                We partner with global institutions for recruitment, awareness & mentoring. Join our network of 100+ partner universities.
              </p>
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                Book B2B Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center shadow-glow">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground">100+</h3>
                  <p className="text-muted-foreground">Partner Universities</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-glow">
                <CardContent className="p-6">
                  <Handshake className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground">500+</h3>
                  <p className="text-muted-foreground">Successful Placements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-white/80">
            Don't wait for tomorrow. Your global future starts with a single conversation today.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Request Callback
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;