import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Study Abroad Expo",
      date: "November 18, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Cochin",
      type: "Physical",
      description: "Meet representatives from 50+ global universities",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
    },
    {
      title: "Virtual Workshop - Scholarships Decoded",
      date: "November 24, 2024", 
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      type: "Virtual",
      description: "Learn insider secrets to winning scholarships",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      title: "1-on-1 Zoom Days",
      date: "Every Friday",
      time: "9:00 AM - 5:00 PM", 
      location: "Online",
      type: "Virtual",
      description: "Personal counseling sessions with our experts",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=250&fit=crop"
    }
  ];

  const benefits = [
    "Meet University Representatives directly",
    "Free Profile Evaluations on the spot",
    "On-spot Application Support",
    "Scholarship guidance sessions",
    "Visa counseling workshops",
    "Networking with fellow students"
  ];

  const pastEvents = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=300&h=200&fit=crop", 
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl text-white/90">
            Join our events to kickstart your study abroad journey with expert guidance and university interactions.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Don't Miss Out</h2>
            <p className="text-xl text-muted-foreground">Mark your calendar for these exciting events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      event.type === 'Virtual' ? 'bg-accent' : 'bg-success'
                    }`}
                  >
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full mt-6">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Attend Our Events?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center shadow-card">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">2000+</h3>
                  <p className="text-muted-foreground">Students Attended</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-card">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Events Organized</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Past Events Gallery</h2>
            <p className="text-xl text-muted-foreground">Glimpses from our successful events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Limited Slots Available</h2>
          <p className="text-xl mb-8 text-white/80">
            Reserve your seat now and take the first step towards your global education journey.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Reserve Your Seat
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;