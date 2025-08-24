import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      description: 'Send us a detailed message',
      contact: 'hello@syraacorp.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Get instant support',
      contact: 'Available on website',
      availability: '24/7 support available'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      contact: 'Free 30-min consultation',
      availability: 'Flexible scheduling'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Suite 400',
      zipCode: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      type: 'Headquarters'
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, Floor 12',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 234-5678',
      type: 'East Coast Office'
    },
    {
      city: 'Austin',
      address: '789 Digital Parkway, Building C',
      zipCode: 'Austin, TX 78701',
      phone: '+1 (555) 345-6789',
      type: 'Development Center'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="text-yellow-300">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Ready to transform your business? We're here to help. Reach out to discuss your project and discover how we can drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multiple Ways to Connect</h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you. We're here to help however you prefer to communicate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-corporate text-center group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-1">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="Enter your email address" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Enter your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How can we help you? *</label>
                  <Textarea 
                    placeholder="Tell us about your project, challenges, or questions..."
                    rows={6}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm">
                    I'd like to receive updates about Syraa Corp's services and insights
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full btn-corporate">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4">
                * Required fields. We'll respond within 24 hours.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="card-corporate">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-1">{office.city}</CardTitle>
                            <Badge variant="secondary" className="mb-4">{office.type}</Badge>
                          </div>
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-muted-foreground">
                          <p>{office.address}</p>
                          <p>{office.zipCode}</p>
                          <p className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {office.phone}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Emergency support available 24/7 for enterprise clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-corporate bg-gradient-corporate text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Ready to Get Started?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">
                    Schedule a free 30-minute consultation to discuss your project requirements and how we can help achieve your goals.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Syraa Difference</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of companies that have transformed their business with our innovative solutions. 
            Let's discuss how we can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-corporate">
              Schedule Discovery Call
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;