import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-corporate rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Syraa Corp</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative technology solutions. We build the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/digital-transformation" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/solutions/cloud" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/solutions/ai-ml" className="text-gray-300 hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/solutions/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="rounded-l-none bg-gradient-corporate hover:opacity-90">
                  <ArrowRight size={18} />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-corporate rounded-lg flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-300">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-corporate rounded-lg flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300">hello@syraacorp.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-corporate rounded-lg flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-gray-300">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Syraa Corp. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;