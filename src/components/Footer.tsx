import React from 'react';
import { Heart, Code, Coffee, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth',
      left: 0
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    // { name: "Resume", href: "#" }
  ];

  const services = [
    "Mobile App Development",
    "React Native Development", 
    "MERN Stack Development",
    "API Integration",
    "App Store Deployment",
    "UI/UX Consultation"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", color: "hover:text-blue-400",link:'https://www.linkedin.com/in/aman-mishra-a50552206/' },
    { name: "GitHub", href: "#", color: "hover:text-gray-300", link:'https://github.com/AmanMishra85'},
    // { name: "Twitter", href: "#", color: "hover:text-blue-400" },
    // { name: "Instagram", href: "#", color: "hover:text-pink-400" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 font-poppins relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-500 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Aman Mishra</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Mobile App Developer passionate about creating innovative solutions 
                and exceptional user experiences that make a difference in people's lives.
              </p>
              
              {/* Enhanced stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">1+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-teal-400 group-hover:scale-110 transition-transform duration-300">6+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <p className="font-semibold text-gray-300 mb-4">Connect with me:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className={`group bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium group-hover:animate-pulse">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group animate-fade-in-up`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <span className="group-hover:text-blue-400 transition-colors duration-300">→</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-xl font-bold mb-6 text-teal-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={service}
                  className={`text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <span className="text-teal-400 mr-2">•</span>{service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-2xl backdrop-blur-sm border border-gray-700 animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">Get notified about my latest projects and tech insights</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 animate-fade-in-up animation-delay-800">
              <span className="text-gray-400">© {currentYear} Aman Mishra. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-1000">
              <span className="text-gray-400">Made with</span>
              <Heart className="text-red-500 w-5 h-5 animate-pulse" />
              <span className="text-gray-400">and</span>
              <Code className="text-blue-400 w-5 h-5 animate-pulse animation-delay-500" />
              <span className="text-gray-400">and lots of</span>
              <Coffee className="text-yellow-600 w-5 h-5 animate-bounce" />
              <span className="text-gray-400">by</span>
              <span className="gradient-text font-semibold">Aman Mishra</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 group animate-bounce-slow"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;