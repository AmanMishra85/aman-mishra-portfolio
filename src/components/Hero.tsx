import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Only track mouse on non-touch devices
      if (window.matchMedia('(hover: hover)').matches) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    // Only add mouse tracking on desktop
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-poppins pt-16 sm:pt-20 lg:pt-24">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-25 via-white to-teal-25">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5 animate-gradient-xy"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Additional floating shapes */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/15 to-green-400/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/12 to-blue-400/12 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-32 animate-float animation-delay-1000 group opacity-30">
        <Code className="text-blue-400 animate-pulse-slow group-hover:animate-spin transition-all duration-500" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float animation-delay-1600 group opacity-30">
        <Smartphone className="text-teal-400 w-10 h-10 animate-pulse-slow group-hover:animate-bounce transition-all duration-500" />
      </div>
      <div className="absolute top-1/2 right-20 animate-float animation-delay-800 group opacity-30">
        <Sparkles className="text-purple-400 w-6 h-6 animate-pulse-slow group-hover:animate-wiggle transition-all duration-500" />
      </div>
      <div className="absolute top-1/4 left-1/4 animate-float animation-delay-2000 group opacity-30">
        <div className="w-6 h-6 bg-gradient-to-r from-pink-400/70 to-red-400/70 rounded-full animate-pulse-slow group-hover:animate-ping"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-float animation-delay-2500 group opacity-30">
        <div className="w-4 h-4 bg-gradient-to-r from-green-400/70 to-emerald-400/70 rounded-full animate-pulse-slow group-hover:animate-bounce"></div>
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out animate-pulse-slow hidden md:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'scale(1)',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="opacity-100 translate-y-0">
          {/* Animated greeting */}
          <div className="relative">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-lg font-medium mb-4 animate-pulse-slow relative">
              👋 Hello, I'm
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 relative">
            <span className="block sm:inline hover:text-blue-600 transition-colors duration-300 cursor-default">Aman</span>
            <span className="block sm:inline sm:ml-4 gradient-text font-black hover:scale-105 transition-transform duration-300 cursor-default relative">
              Mishra
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-bounce"></div>
            </span>
          </h1>
          
          <div className="relative">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-4 font-semibold animate-text-glow hover:scale-105 transition-transform duration-300 cursor-default">
              Mobile App Developer
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-pulse-slow"></div>
            </p>
          </div>
          
          <div className="relative">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium hover:text-gray-700 transition-colors duration-300">
              Building <span className="text-blue-600 font-semibold">smooth</span> and{' '}
              <span className="text-teal-600 font-semibold">scalable</span> cross-platform mobile apps with{' '}
              <span className="gradient-text font-semibold">React Native</span> and{' '}
              <span className="gradient-text font-semibold">MERN stack</span>.
            </p>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-1200"></div>
            <div className="absolute -bottom-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-ping animation-delay-1800"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl btn-animate relative overflow-hidden hover:animate-pulse"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 w-5 h-5 group-hover:animate-spin" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl magnetic relative overflow-hidden"
            >
              <span className="flex items-center">
                <Mail className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="#" 
              className="group text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-125 transform hover-glow p-3 rounded-full hover:bg-blue-50 relative"
            >
              <Github size={28} className="group-hover:animate-wiggle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </a>
            <a 
              href="#" 
              className="group text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-125 transform hover-glow p-3 rounded-full hover:bg-blue-50 relative"
            >
              <Linkedin size={28} className="group-hover:animate-wiggle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </a>
            <a 
              href="#" 
              className="group text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-125 transform hover-glow p-3 rounded-full hover:bg-blue-50 relative"
            >
              <Mail size={28} className="group-hover:animate-wiggle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12">
            <div className="text-center group relative">
              <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">5+</div>
              <div className="text-sm text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">Years Experience</div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
            <div className="text-center group relative">
              <div className="text-2xl font-bold text-teal-600 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">50+</div>
              <div className="text-sm text-gray-600 font-medium group-hover:text-teal-600 transition-colors duration-300">Projects Done</div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
            <div className="text-center group relative">
              <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">100%</div>
              <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Client Satisfaction</div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow group cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2 font-medium group-hover:text-blue-600 transition-colors duration-300">Scroll Down</span>
            <ChevronDown className="text-gray-400 animate-pulse group-hover:text-blue-600 group-hover:animate-bounce transition-all duration-300" size={32} />
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400/50 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;