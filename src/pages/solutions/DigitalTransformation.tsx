import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Code2,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Database,
  Cloud,
  Smartphone,
  BarChart3
} from 'lucide-react';

const DigitalTransformation = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, scalable solutions that drive business growth.',
      features: ['System Architecture Review', 'Migration Planning', 'Risk Assessment', 'Performance Optimization']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Analytics & BI',
      description: 'Unlock insights from your data with advanced analytics and business intelligence solutions.',
      features: ['Data Warehouse Design', 'Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that reduces costs and improves efficiency.',
      features: ['Workflow Automation', 'RPA Implementation', 'AI-Powered Processes', 'Integration Solutions']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Digital Experience Platforms',
      description: 'Create exceptional digital experiences across all customer touchpoints.',
      features: ['Customer Journey Mapping', 'Omnichannel Solutions', 'Mobile-First Design', 'User Experience Optimization']
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="h-6 w-6" />, title: 'Increase Revenue', description: 'Drive 25-40% revenue growth through digital optimization' },
    { icon: <Users className="h-6 w-6" />, title: 'Improve Efficiency', description: 'Reduce operational costs by up to 30% with automation' },
    { icon: <Shield className="h-6 w-6" />, title: 'Enhanced Security', description: 'Modern security frameworks protecting your digital assets' },
    { icon: <Globe className="h-6 w-6" />, title: 'Global Scalability', description: 'Solutions that scale with your business worldwide' }
  ];

  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy ERP system causing operational inefficiencies',
      solution: 'Cloud-based ERP modernization with AI-powered analytics',
      results: ['40% faster processing times', '25% reduction in operational costs', '99.9% system uptime'],
      roi: '320% ROI in 18 months'
    },
    {
      company: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Disconnected systems limiting patient care coordination',
      solution: 'Integrated digital health platform with real-time data sharing',
      results: ['50% improvement in patient outcomes', '30% reduction in administrative time', 'HIPAA-compliant infrastructure'],
      roi: '280% ROI in 24 months'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Digital Transformation</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Transform Your Business for the <span className="text-yellow-300">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Modernize legacy systems, automate processes, and unlock new revenue streams with our comprehensive digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                View Case Studies
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
              Our Digital Transformation <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end solutions that modernize your technology stack and transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-corporate group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Why Choose Our Digital Transformation Solutions?</h2>
            <p className="text-xl text-muted-foreground">
              Proven results that drive measurable business impact and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real transformations, measurable results, and lasting partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-corporate">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl font-display mb-1">{study.company}</CardTitle>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{study.roi}</div>
                      <div className="text-sm text-muted-foreground">Return on Investment</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-destructive mb-2">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Begin Your Digital Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can modernize your business and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Download White Paper
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalTransformation;