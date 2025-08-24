import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Solutions',
    items: [
      { title: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Modernize your business with cutting-edge technology' },
      { title: 'Cloud Services', href: '/solutions/cloud', description: 'Scalable cloud infrastructure and migration' },
      { title: 'AI & Machine Learning', href: '/solutions/ai-ml', description: 'Intelligent automation and data insights' },
      { title: 'Cybersecurity', href: '/solutions/cybersecurity', description: 'Comprehensive security solutions' },
    ]
  },
  {
    title: 'Industries',
    items: [
      { title: 'Healthcare', href: '/industries/healthcare', description: 'Digital health and medical technology' },
      { title: 'Financial Services', href: '/industries/financial', description: 'Fintech and banking solutions' },
      { title: 'Manufacturing', href: '/industries/manufacturing', description: 'Industry 4.0 and smart manufacturing' },
      { title: 'Retail & E-commerce', href: '/industries/retail', description: 'Digital commerce platforms' },
    ]
  },
  {
    title: 'Services',
    items: [
      { title: 'Consulting', href: '/services/consulting', description: 'Strategic technology consulting' },
      { title: 'Development', href: '/services/development', description: 'Custom software development' },
      { title: 'Integration', href: '/services/integration', description: 'System integration and API services' },
      { title: 'Support & Maintenance', href: '/services/support', description: '24/7 technical support and maintenance' },
    ]
  },
  {
    title: 'Company',
    items: [
      { title: 'About Us', href: '/about', description: 'Our story, mission, and values' },
      { title: 'Leadership', href: '/leadership', description: 'Meet our executive team' },
      { title: 'Partners', href: '/partners', description: 'Strategic partnerships and alliances' },
      { title: 'Contact', href: '/contact', description: 'Get in touch with our team' },
    ]
  },
  {
    title: 'Careers',
    items: [
      { title: 'Open Positions', href: '/careers/jobs', description: 'Join our growing team' },
      { title: 'Life at Syraa', href: '/careers/culture', description: 'Our culture and benefits' },
      { title: 'Graduate Program', href: '/careers/graduates', description: 'Opportunities for new graduates' },
      { title: 'Internships', href: '/careers/internships', description: 'Internship opportunities' },
    ]
  },
  {
    title: 'Insights',
    items: [
      { title: 'Blog', href: '/insights/blog', description: 'Latest industry insights and trends' },
      { title: 'Case Studies', href: '/insights/case-studies', description: 'Success stories and implementations' },
      { title: 'Whitepapers', href: '/insights/whitepapers', description: 'In-depth research and analysis' },
      { title: 'Events', href: '/insights/events', description: 'Webinars, conferences, and workshops' },
    ]
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-corporate rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-corporate bg-clip-text text-transparent">
              Syraa Corp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="nav-link bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-2">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.href} asChild>
                            <Link
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                {subItem.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button className="btn-corporate">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="font-medium text-foreground px-4 py-2">
                    {item.title}
                  </div>
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button className="w-full btn-corporate">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;