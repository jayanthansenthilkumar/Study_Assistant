import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Globe,
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Shield,
  BookOpen,
  Laptop
} from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: 'Sarah Chen',
      position: 'Chief Executive Officer',
      image: '👩‍💼',
      experience: '15+ years',
      background: 'Former VP of Technology at Microsoft, led digital transformation initiatives for Fortune 500 companies.',
      specialties: ['Strategic Leadership', 'Digital Transformation', 'Corporate Growth'],
      education: 'MBA Stanford, MS Computer Science MIT',
      quote: 'Technology should empower people and transform businesses, not complicate them.'
    },
    {
      name: 'David Rodriguez',
      position: 'Chief Technology Officer',
      image: '👨‍💻',
      experience: '18+ years',
      background: 'Former Principal Engineer at Google, architect of cloud infrastructure solutions serving millions of users.',
      specialties: ['Cloud Architecture', 'AI/ML Systems', 'Scalable Infrastructure'],
      education: 'PhD Computer Science Stanford, BS Engineering Caltech',
      quote: 'Innovation happens when brilliant minds meet complex challenges with simple solutions.'
    },
    {
      name: 'Emily Johnson',
      position: 'Chief Operating Officer',
      image: '👩‍💼',
      experience: '12+ years',
      background: 'Former Director of Operations at Amazon Web Services, expert in scaling high-growth technology organizations.',
      specialties: ['Operations Excellence', 'Process Optimization', 'Team Scaling'],
      education: 'MBA Wharton, BS Industrial Engineering UC Berkeley',
      quote: 'Operational excellence is the foundation that enables innovation to flourish.'
    },
    {
      name: 'Michael Kim',
      position: 'Chief Financial Officer',
      image: '👨‍💼',
      experience: '14+ years',
      background: 'Former CFO at several high-growth SaaS companies, expert in financial strategy and investor relations.',
      specialties: ['Financial Strategy', 'Corporate Development', 'Risk Management'],
      education: 'CPA, MBA Kellogg, BS Finance NYU Stern',
      quote: 'Financial discipline and strategic investment are key to sustainable growth and innovation.'
    },
    {
      name: 'Dr. Priya Patel',
      position: 'Chief Innovation Officer',
      image: '👩‍🔬',
      experience: '16+ years',
      background: 'Former Research Director at IBM Watson, published researcher in AI and machine learning with 50+ patents.',
      specialties: ['Artificial Intelligence', 'Research & Development', 'Innovation Strategy'],
      education: 'PhD AI Carnegie Mellon, MS Data Science MIT',
      quote: 'The future belongs to organizations that can turn research breakthroughs into practical solutions.'
    },
    {
      name: 'James Wilson',
      position: 'Chief Security Officer',
      image: '👨‍💻',
      experience: '20+ years',
      background: 'Former cybersecurity leader at Pentagon and NSA, expert in enterprise security and threat intelligence.',
      specialties: ['Cybersecurity Strategy', 'Risk Assessment', 'Compliance Management'],
      education: 'MS Cybersecurity George Washington, BS Computer Science Naval Academy',
      quote: 'Security is not just about technology; it\'s about building a culture of trust and vigilance.'
    }
  ];

  const boardMembers = [
    {
      name: 'Robert Anderson',
      position: 'Chairman of the Board',
      background: 'Former CEO of TechGlobal Corp, 25+ years of technology industry leadership',
      expertise: 'Corporate Governance, Strategic Planning'
    },
    {
      name: 'Dr. Lisa Zhang',
      position: 'Independent Director',
      background: 'Former CTO of CloudTech Industries, recognized AI researcher and technology evangelist',
      expertise: 'Technology Innovation, Product Strategy'
    },
    {
      name: 'Mark Thompson',
      position: 'Independent Director',
      background: 'Former Managing Partner at Venture Capital Firm, expert in scaling technology companies',
      expertise: 'Growth Strategy, Capital Markets'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We lead with curiosity and embrace cutting-edge technologies to solve complex challenges.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'People-Centric',
      description: 'Our success is built on empowering our team and delivering exceptional client experiences.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity Always',
      description: 'We maintain the highest ethical standards in everything we do, building trust through transparency.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Excellence Driven',
      description: 'We pursue operational excellence and continuous improvement in every aspect of our business.'
    }
  ];

  const achievements = [
    { year: '2024', achievement: 'Named "Technology Company of the Year" by TechReview Magazine' },
    { year: '2023', achievement: 'Reached $100M ARR milestone with 99% customer satisfaction' },
    { year: '2022', achievement: 'Expanded to 15 countries with 500+ successful client implementations' },
    { year: '2021', achievement: 'Achieved ISO 27001 certification and SOC 2 Type II compliance' },
    { year: '2020', achievement: 'Founded Syraa Corp with mission to democratize enterprise technology' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Leadership Team</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Meet the Visionaries Behind <span className="text-yellow-300">Syraa Corp</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Our leadership team combines decades of industry experience with a passion for innovation, driving the future of technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Executive <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans with proven track records of building and scaling world-class technology organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {executives.map((exec, index) => (
              <Card key={index} className="card-corporate">
                <CardHeader>
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl">{exec.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-display mb-1">{exec.name}</CardTitle>
                      <div className="text-primary font-semibold mb-2">{exec.position}</div>
                      <Badge variant="outline">{exec.experience} Experience</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{exec.background}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exec.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">{specialty}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Education:</h4>
                      <p className="text-sm text-muted-foreground">{exec.education}</p>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                      "{exec.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Board of Directors</h2>
            <p className="text-xl text-muted-foreground">
              Strategic guidance from industry leaders with diverse backgrounds and exceptional expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-corporate rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl font-display">{member.name}</CardTitle>
                  <div className="text-primary font-semibold">{member.position}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{member.background}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                      <p className="text-sm text-muted-foreground">{member.expertise}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our leadership decisions and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-display">{value.title}</CardTitle>
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

      {/* Company Achievements */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our Journey of Excellence</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that showcase our leadership team's commitment to innovation and growth.
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 card-corporate">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-primary" />
                      <p className="text-lg font-medium">{item.achievement}</p>
                    </div>
                  </CardContent>
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
            Ready to Work with Industry Leaders?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with our leadership team to discuss how we can drive your business transformation with proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">Schedule Executive Meeting</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;