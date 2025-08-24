import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Target,
  Heart,
  Award,
  Users,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and methodologies to deliver solutions that set new industry standards.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and measurable results.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="h-6 w-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="h-6 w-6" /> },
    { number: '25+', label: 'Countries Served', icon: <Globe className="h-6 w-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const timeline = [
    { year: '2020', title: 'Foundation', description: 'Syraa Corp was founded with a vision to transform businesses through technology' },
    { year: '2021', title: 'First Major Client', description: 'Secured our first enterprise client and delivered a successful digital transformation project' },
    { year: '2022', title: 'Team Expansion', description: 'Grew our team to 50+ experts across multiple technology domains' },
    { year: '2023', title: 'Global Presence', description: 'Expanded operations to serve clients across 25+ countries' },
    { year: '2024', title: 'Innovation Leader', description: 'Recognized as a leading innovator in AI and cloud solutions' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">About Syraa Corp</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the Future of <span className="text-yellow-300">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              We're a team of passionate innovators, dedicated to transforming businesses through cutting-edge technology solutions that drive real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses of all sizes to thrive in the digital age by providing innovative, scalable, and secure technology solutions that transform challenges into opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to make advanced technology accessible and impactful for every organization we partner with.
              </p>
            </div>
            <div className="card-corporate p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the world's most trusted technology partner, known for our innovation, integrity, and ability to deliver transformative solutions that shape the future of business.
              </p>
              <div className="mt-8 p-6 bg-gradient-corporate rounded-xl text-white">
                <p className="font-semibold">
                  "Technology is best when it brings people together and solves real problems."
                </p>
                <p className="text-sm opacity-90 mt-2">- Our Founding Principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Measurable results that demonstrate our commitment to client success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that have shaped Syraa Corp into the company we are today.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="card-corporate flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2">{item.year} - {item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;