import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const solutions = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology solutions that drive growth and efficiency.',
      features: ['Legacy System Modernization', 'Process Automation', 'Data Analytics']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure that grows with your business and ensures maximum uptime.',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps Solutions']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving digital threats.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to unlock insights and automate processes.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    }
  ];

  const industries = [
    { name: 'Healthcare', count: '50+ Projects', growth: '+120%' },
    { name: 'Financial Services', count: '75+ Projects', growth: '+95%' },
    { name: 'Manufacturing', count: '30+ Projects', growth: '+150%' },
    { name: 'Retail & E-commerce', count: '40+ Projects', growth: '+110%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechVision Inc.',
      content: 'Syraa Corp transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Systems',
      content: 'The AI solutions implemented by Syraa have revolutionized our business intelligence. Exceptional technical depth and delivery.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of IT, GlobalRetail',
      content: 'Their cybersecurity implementation gave us complete peace of mind. Professional, thorough, and incredibly knowledgeable team.',
      rating: 5
    }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Solutions Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Technology <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital transformation to advanced AI implementations, we deliver solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-corporate group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="btn-corporate">
              <Link to="/solutions">
                Explore All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Industries We Serve</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Expertise Across <span className="text-primary">Multiple Industries</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our deep industry knowledge allows us to deliver tailored solutions that address specific sector challenges and opportunities.
              </p>
              
              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                    <div>
                      <h3 className="font-semibold text-lg">{industry.name}</h3>
                      <p className="text-muted-foreground">{industry.count}</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{industry.growth}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="outline" asChild className="mt-8">
                <Link to="/industries">View All Industries</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-corporate p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">200+ certified professionals</p>
                </div>
                <div className="card-corporate p-6 mt-8">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">Projects in 25+ countries</p>
                </div>
                <div className="card-corporate p-6 -mt-4">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Secure Solutions</h3>
                  <p className="text-muted-foreground">99.9% security compliance</p>
                </div>
                <div className="card-corporate p-6 mt-4">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">30% faster time-to-market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about partnering with Syraa Corp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-corporate">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that have accelerated their growth with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/solutions">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
