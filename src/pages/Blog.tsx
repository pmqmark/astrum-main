import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp, Globe, BookOpen, AlertCircle } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Universities in Canada for Indian Students 2025",
      category: "Popular Destinations",
      author: "Naveen Jose",
      date: "November 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=250&fit=crop",
      excerpt: "Discover the best Canadian universities offering excellent programs and scholarships for Indian students."
    },
    {
      title: "AI and Machine Learning: The Future of Career Opportunities",
      category: "Career-Centric Courses", 
      author: "Manu Mohan",
      date: "November 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      excerpt: "Explore how AI is reshaping industries and why it's the perfect time to pursue AI-related courses abroad."
    },
    {
      title: "New UK Student Visa Rules: What You Need to Know",
      category: "Visa Updates",
      author: "Immigration Team",
      date: "November 5, 2024", 
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=400&h=250&fit=crop",
      excerpt: "Latest updates on UK student visa requirements and application process for 2025 intake."
    },
    {
      title: "€15,000 DAAD Scholarship Alert: Applications Open",
      category: "Scholarship Alerts",
      author: "Scholarship Team", 
      date: "November 3, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      excerpt: "Don't miss this opportunity to study in Germany with full funding. Application deadline approaching fast!"
    }
  ];

  const trends2025 = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "AI & Climate Tech Courses",
      description: "Rising demand for programs in Artificial Intelligence, Climate Science, and Sustainable Technology"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Emerging Destinations",
      description: "Germany, France, and Ireland gaining popularity as study abroad destinations"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Industry-Focused Programs",
      description: "High demand for Data Science, ESG, Digital Policy, and Mental Health specializations"
    }
  ];

  const categories = [
    { name: "Popular Destinations", count: 24, color: "bg-primary" },
    { name: "Career-Centric Courses", count: 18, color: "bg-accent" },
    { name: "Visa Updates", count: 12, color: "bg-success" },
    { name: "Scholarship Alerts", count: 32, color: "bg-warning" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-white/90">
            Stay updated with the latest trends, opportunities, and insights in global education.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold">{category.count}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">Expert insights and practical guidance for your study abroad journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Trends Forecast */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">TRENDING NOW</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">What's Going to be Hot in 2025?</h2>
            <p className="text-xl text-muted-foreground">Stay ahead of the curve with these emerging trends</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trends2025.map((trend, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit text-primary">
                    {trend.icon}
                  </div>
                  <CardTitle className="text-xl">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contributor CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Want to Write for Us?</h2>
          <p className="text-xl mb-8 text-white/90">
            Share your study abroad experience and help fellow students navigate their journey.
          </p>
          <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
            Become a Contributor
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AlertCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">Never Miss an Update</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest scholarship alerts, visa updates, and study abroad insights.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;