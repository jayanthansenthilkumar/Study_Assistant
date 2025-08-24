import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-corporate.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Corporate technology workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 via-corporate-blue/70 to-corporate-purple/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-corporate-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-corporate-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Transforming Businesses Since 2020
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Innovate.</span>
              <br />
              <span className="text-white">Transform.</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Elevate.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We transform business challenges into technological opportunities that set you apart in today's competitive landscape.
            </p>

            <p className="text-lg text-white/80 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Your Vision, Our Code. With expertise in custom solutions and emerging technologies, we bring your ideas to life through powerful, scalable systems built for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-white text-corporate-blue hover:bg-white/90 shadow-elegant px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/about">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Can be used for additional visual elements */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating cards or additional visual elements can go here */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 p-8 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI-Powered Solutions</div>
                      <div className="text-white/70 text-sm">Machine learning integration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Cloud Architecture</div>
                      <div className="text-white/70 text-sm">Scalable infrastructure</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Security First</div>
                      <div className="text-white/70 text-sm">Enterprise-grade protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;