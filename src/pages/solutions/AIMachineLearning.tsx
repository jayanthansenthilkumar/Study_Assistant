import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Brain,
  BarChart3,
  Eye,
  MessageSquare,
  Zap,
  Bot,
  TrendingUp,
  Users,
  CheckCircle,
  Database,
  Cpu,
  Network,
  Target,
  LineChart,
  Globe
} from 'lucide-react';

const AIMachineLearning = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Predictive Analytics',
      description: 'Harness the power of machine learning to forecast trends, optimize operations, and make data-driven decisions.',
      features: ['Customer Behavior Prediction', 'Demand Forecasting', 'Risk Assessment Models', 'Churn Prevention'],
      caseStudy: 'Increased sales by 35% through demand prediction'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Natural Language Processing',
      description: 'Transform unstructured text data into actionable insights with advanced NLP and sentiment analysis.',
      features: ['Chatbots & Virtual Assistants', 'Document Processing', 'Sentiment Analysis', 'Language Translation'],
      caseStudy: 'Reduced customer service costs by 50%'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Computer Vision',
      description: 'Enable machines to see and interpret visual data for quality control, security, and automation.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Inspection'],
      caseStudy: 'Improved manufacturing quality by 40%'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Intelligent Automation',
      description: 'Combine AI with robotic process automation to create smart, adaptive business processes.',
      features: ['Smart Document Processing', 'Intelligent Decision Making', 'Adaptive Workflows', 'Exception Handling'],
      caseStudy: 'Automated 80% of manual processes'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      applications: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'],
      impact: '30% improvement in diagnostic accuracy'
    },
    {
      name: 'Financial Services',
      icon: '💰',
      applications: ['Fraud Detection', 'Credit Risk Assessment', 'Algorithmic Trading', 'Customer Insights'],
      impact: '95% fraud detection accuracy'
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      applications: ['Recommendation Engines', 'Price Optimization', 'Inventory Management', 'Customer Segmentation'],
      impact: '25% increase in conversion rates'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'],
      impact: '20% reduction in downtime'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', category: 'Deep Learning', expertise: 'Expert' },
    { name: 'PyTorch', category: 'Neural Networks', expertise: 'Expert' },
    { name: 'Scikit-learn', category: 'Machine Learning', expertise: 'Expert' },
    { name: 'Apache Spark', category: 'Big Data ML', expertise: 'Advanced' },
    { name: 'OpenCV', category: 'Computer Vision', expertise: 'Expert' },
    { name: 'NLTK/spaCy', category: 'NLP', expertise: 'Expert' },
    { name: 'AWS SageMaker', category: 'MLOps', expertise: 'Advanced' },
    { name: 'Azure ML', category: 'Cloud ML', expertise: 'Advanced' }
  ];

  const process = [
    {
      phase: 'Discover',
      description: 'Identify AI opportunities and define success metrics',
      activities: ['Business Case Analysis', 'Data Assessment', 'Feasibility Study', 'ROI Projections'],
      duration: '2-4 weeks'
    },
    {
      phase: 'Design',
      description: 'Architect the AI solution and prepare data infrastructure',
      activities: ['Solution Architecture', 'Data Pipeline Design', 'Model Selection', 'Infrastructure Planning'],
      duration: '4-6 weeks'
    },
    {
      phase: 'Develop',
      description: 'Build, train, and validate machine learning models',
      activities: ['Data Preparation', 'Model Training', 'Validation & Testing', 'Performance Optimization'],
      duration: '8-12 weeks'
    },
    {
      phase: 'Deploy',
      description: 'Launch AI solutions with monitoring and continuous improvement',
      activities: ['Production Deployment', 'Performance Monitoring', 'Model Retraining', 'User Training'],
      duration: '2-4 weeks'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">AI & Machine Learning</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Unlock Intelligence with <span className="text-yellow-300">AI & Machine Learning</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform data into intelligent insights and automate complex decisions with cutting-edge AI and machine learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Explore AI Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                AI Readiness Assessment
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
              AI & ML <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From predictive analytics to computer vision, our AI solutions drive intelligent automation and data-driven insights.
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
                      Success Story
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-primary italic">
                    "{service.caseStudy}"
                  </div>
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

      {/* Industry Applications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-muted-foreground">
              AI solutions tailored to industry-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl font-display">{industry.name}</CardTitle>
                  <div className="text-sm font-medium text-primary">{industry.impact}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge tools and frameworks for building robust AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tech.category}</p>
                  <Badge variant={tech.expertise === 'Expert' ? 'default' : 'secondary'}>
                    {tech.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our AI Development Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to delivering successful AI implementations with measurable business impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl font-display">{phase.phase}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                  <Badge variant="outline">{phase.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how AI and machine learning can transform your business operations and drive competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Start AI Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Download AI Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIMachineLearning;