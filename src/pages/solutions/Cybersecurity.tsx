import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  TrendingUp,
  FileText,
  Monitor,
  Database,
  Network,
  Settings,
  Zap,
  Clock,
  Target
} from 'lucide-react';

const Cybersecurity = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Threat Detection & Response',
      description: 'Advanced threat hunting and real-time incident response to protect your digital assets 24/7.',
      features: ['SIEM Implementation', 'SOC Services', 'Incident Response', 'Threat Intelligence'],
      stats: '99.9% threat detection accuracy'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions ensuring secure access control across your entire organization.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance'],
      stats: '100% unauthorized access prevention'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Security Audits & Assessments',
      description: 'Thorough security evaluations to identify vulnerabilities and ensure compliance standards.',
      features: ['Vulnerability Assessments', 'Penetration Testing', 'Compliance Audits', 'Risk Analysis'],
      stats: 'Average 40% security improvement'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Protection & Privacy',
      description: 'Enterprise-grade data encryption and privacy solutions for sensitive information protection.',
      features: ['Data Loss Prevention', 'Encryption Solutions', 'Privacy Compliance', 'Backup & Recovery'],
      stats: 'Zero data breaches achieved'
    }
  ];

  const threats = [
    {
      name: 'Ransomware',
      icon: '🔒',
      description: 'Malicious software that encrypts files and demands payment',
      protection: 'Advanced backup systems and endpoint detection',
      success: '100% ransomware prevention rate'
    },
    {
      name: 'Phishing Attacks',
      icon: '🎣',
      description: 'Fraudulent emails designed to steal credentials and data',
      protection: 'Email security filters and user awareness training',
      success: '95% phishing attempt blocking'
    },
    {
      name: 'Insider Threats',
      icon: '👤',
      description: 'Security risks from employees or internal stakeholders',
      protection: 'Behavioral analytics and access monitoring',
      success: '90% insider threat detection'
    },
    {
      name: 'DDoS Attacks',
      icon: '⚡',
      description: 'Attempts to overwhelm systems with traffic',
      protection: 'Traffic filtering and load balancing solutions',
      success: '99.9% uptime maintained'
    }
  ];

  const compliance = [
    {
      standard: 'SOC 2',
      industry: 'Technology Services',
      description: 'Security, availability, and confidentiality controls',
      achievement: 'Type II Certified'
    },
    {
      standard: 'ISO 27001',
      industry: 'Global Standard',
      description: 'Information security management systems',
      achievement: 'Fully Compliant'
    },
    {
      standard: 'GDPR',
      industry: 'European Union',
      description: 'General Data Protection Regulation',
      achievement: 'Privacy Certified'
    },
    {
      standard: 'HIPAA',
      industry: 'Healthcare',
      description: 'Health Insurance Portability and Accountability Act',
      achievement: 'Compliant Solutions'
    },
    {
      standard: 'PCI DSS',
      industry: 'Financial Services',
      description: 'Payment Card Industry Data Security Standard',
      achievement: 'Level 1 Certified'
    },
    {
      standard: 'NIST',
      industry: 'Government',
      description: 'National Institute of Standards and Technology',
      achievement: 'Framework Aligned'
    }
  ];

  const securityLayers = [
    {
      layer: 'Perimeter Security',
      technologies: ['Firewalls', 'Intrusion Detection', 'VPN Gateways', 'Web Application Firewalls'],
      protection: 'Network boundary protection'
    },
    {
      layer: 'Endpoint Security',
      technologies: ['Antivirus/EDR', 'Device Management', 'Application Control', 'Behavioral Analysis'],
      protection: 'Device and user protection'
    },
    {
      layer: 'Data Security',
      technologies: ['Encryption', 'DLP Solutions', 'Database Security', 'Cloud Security'],
      protection: 'Information asset protection'
    },
    {
      layer: 'Identity Security',
      technologies: ['IAM Systems', 'MFA', 'PAM', 'Identity Governance'],
      protection: 'Access control and authentication'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Security Monitoring', icon: <Monitor className="h-6 w-6" /> },
    { number: '15min', label: 'Average Response Time', icon: <Clock className="h-6 w-6" /> },
    { number: '99.9%', label: 'Threat Detection Rate', icon: <Target className="h-6 w-6" /> },
    { number: '0', label: 'Successful Breaches', icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Cybersecurity</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Defend Your Business with <span className="text-yellow-300">Advanced Cybersecurity</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Comprehensive security solutions that protect your digital assets, ensure compliance, and maintain business continuity against evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Emergency Response
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
              Comprehensive Security <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security approach designed to protect against the full spectrum of cyber threats.
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
                    <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                      {service.stats}
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

      {/* Threat Protection Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Protection Against Modern Threats</h2>
            <p className="text-xl text-muted-foreground">
              Advanced defense mechanisms designed to counter today's most sophisticated cyber attacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{threat.icon}</div>
                  <CardTitle className="text-xl font-display">{threat.name}</CardTitle>
                  <CardDescription className="text-sm">{threat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Protection:</strong>
                      <p className="text-muted-foreground">{threat.protection}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      {threat.success}
                    </Badge>
                  </div>
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
            <h2 className="text-4xl font-display font-bold mb-6">Security Performance Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Measurable results that demonstrate our commitment to protecting your business.
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

      {/* Security Layers Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Defense in Depth Strategy</h2>
            <p className="text-xl text-muted-foreground">
              Multiple layers of security controls to provide comprehensive protection across your entire infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            {securityLayers.map((layer, index) => (
              <Card key={index} className="card-corporate">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2">{layer.layer}</h3>
                      <p className="text-muted-foreground mb-4">{layer.protection}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Compliance & Standards</h2>
            <p className="text-xl text-muted-foreground">
              Meet regulatory requirements and industry standards with our comprehensive compliance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-display">{item.standard}</CardTitle>
                  <Badge variant="secondary">{item.industry}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    {item.achievement}
                  </Badge>
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
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for a security incident. Protect your business with comprehensive cybersecurity solutions designed for today's threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Get Security Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Emergency Hotline: 24/7
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cybersecurity;