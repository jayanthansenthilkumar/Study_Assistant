import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Shield,
  Zap,
  Database,
  Monitor,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Layers,
  Settings,
  BarChart3
} from 'lucide-react';

const CloudServices = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.',
      features: ['Assessment & Planning', 'Application Modernization', 'Data Migration', 'Performance Optimization'],
      benefits: 'Reduce infrastructure costs by 40%'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and management for optimal performance.',
      features: ['Auto-scaling Solutions', '24/7 Monitoring', 'Disaster Recovery', 'Cost Optimization'],
      benefits: '99.9% uptime guarantee'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'DevOps & CI/CD',
      description: 'Accelerate development with automated deployment pipelines and DevOps best practices.',
      features: ['Continuous Integration', 'Automated Testing', 'Infrastructure as Code', 'Release Management'],
      benefits: '50% faster deployment cycles'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cloud Security',
      description: 'Enterprise-grade security solutions to protect your cloud infrastructure and data.',
      features: ['Identity Management', 'Encryption at Rest & Transit', 'Compliance Monitoring', 'Threat Detection'],
      benefits: 'Zero security incidents'
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      specialties: ['Compute & Storage', 'AI/ML Services', 'Database Solutions', 'Serverless Computing'],
      certifications: 'AWS Advanced Partner'
    },
    {
      name: 'Microsoft Azure',
      logo: '🌐',
      specialties: ['Hybrid Cloud', 'Enterprise Applications', 'Analytics Platform', 'DevOps Tools'],
      certifications: 'Gold Partner Status'
    },
    {
      name: 'Google Cloud Platform',
      logo: '☁️',
      specialties: ['Data Analytics', 'Machine Learning', 'Container Orchestration', 'BigQuery Solutions'],
      certifications: 'Premier Partner'
    }
  ];

  const stats = [
    { number: '500+', label: 'Cloud Migrations', icon: <Cloud className="h-6 w-6" /> },
    { number: '99.9%', label: 'Uptime Achieved', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '40%', label: 'Cost Reduction', icon: <BarChart3 className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Coverage', icon: <Users className="h-6 w-6" /> }
  ];

  const migrationProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration roadmap development.',
      duration: '2-4 weeks'
    },
    {
      step: '02',
      title: 'Proof of Concept',
      description: 'Small-scale migration to validate approach and identify potential challenges.',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Phased migration with continuous monitoring and validation at each stage.',
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Performance tuning, cost optimization, and ongoing managed services.',
      duration: 'Ongoing'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Cloud Services</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Accelerate Innovation with <span className="text-yellow-300">Cloud Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with scalable, secure, and cost-effective cloud solutions designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Cloud Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Free Cloud Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comprehensive Cloud <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From migration to management, we provide end-to-end cloud services that drive business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-corporate group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      {service.benefits}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Multi-Cloud Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Certified partnerships with leading cloud platforms ensure best-in-class implementations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{platform.logo}</div>
                  <CardTitle className="text-2xl font-display">{platform.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{platform.certifications}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Proven Cloud Success</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that demonstrate our commitment to cloud excellence and client success.
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

      {/* Migration Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our Migration Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful cloud migrations with minimal risk and maximum value.
            </p>
          </div>

          <div className="space-y-8">
            {migrationProcess.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {phase.step}
                  </div>
                </div>
                <Card className="flex-1 card-corporate">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-display">{phase.title}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <CardDescription className="text-base">{phase.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your cloud transformation today with a free assessment and migration strategy consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Get Free Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudServices;