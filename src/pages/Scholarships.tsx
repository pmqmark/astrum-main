import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, DollarSign, Calendar, Users, ArrowRight, Filter } from "lucide-react";
import scholarshipPortal from "@/assets/scholarship-portal.jpg";

const Scholarships = () => {
  const featuredScholarships = [
    {
      title: "Merit Excellence Scholarship",
      university: "University of Toronto",
      country: "Canada",
      amount: "₹15,00,000",
      deadline: "March 15, 2025",
      eligibility: "CGPA 8.5+",
      type: "Merit-based"
    },
    {
      title: "Global Leaders Program",
      university: "University of Melbourne", 
      country: "Australia",
      amount: "₹20,00,000",
      deadline: "February 28, 2025",
      eligibility: "Leadership Experience",
      type: "Leadership"
    },
    {
      title: "STEM Innovation Grant",
      university: "Technical University Munich",
      country: "Germany",
      amount: "₹12,00,000",
      deadline: "April 30, 2025",
      eligibility: "Engineering/CS Background",
      type: "STEM"
    },
    {
      title: "Diversity & Inclusion Award",
      university: "King's College London",
      country: "UK",
      amount: "₹18,00,000",
      deadline: "March 31, 2025",
      eligibility: "Underrepresented Groups",
      type: "Diversity"
    }
  ];

  const stats = [
    { label: "Total Disbursed", value: "₹3.2 Cr", icon: <DollarSign className="h-6 w-6" /> },
    { label: "Students Funded", value: "500+", icon: <Users className="h-6 w-6" /> },
    { label: "Success Rate", value: "85%", icon: <Calendar className="h-6 w-6" /> },
    { label: "Partner Universities", value: "100+", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">SCHOLARSHIP PORTAL</Badge>
          <h1 className="text-5xl font-bold mb-6">India's First Transparent Scholarship Finder</h1>
          <p className="text-xl text-white/90">
            Thousands of verified scholarships. No false promises.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search scholarships..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                    <SelectItem value="10-15">₹10-15 Lakhs</SelectItem>
                    <SelectItem value="15-20">₹15-20 Lakhs</SelectItem>
                    <SelectItem value="20+">₹20+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="hero" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Scholarships</h2>
            <p className="text-xl text-muted-foreground">Hand-picked opportunities for exceptional students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredScholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{scholarship.type}</Badge>
                    <Badge className="bg-success text-success-foreground">{scholarship.amount}</Badge>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <CardDescription className="text-base">
                    {scholarship.university} • {scholarship.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Deadline:</span>
                      <span className="text-sm font-medium">{scholarship.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Eligibility:</span>
                      <span className="text-sm font-medium">{scholarship.eligibility}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Launch Full Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Impact</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-foreground">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guide & Mentorship */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Confused about where to apply?</h2>
              <p className="text-xl mb-8 text-white/90">
                Our scholarship experts will personally guide you through the application process and help you find the best opportunities.
              </p>
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Free Mentorship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <img 
                src={scholarshipPortal} 
                alt="Scholarship Guidance" 
                className="rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;