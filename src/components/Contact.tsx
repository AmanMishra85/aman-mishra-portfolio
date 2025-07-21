import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with enhanced animation
    await new Promise(resolve => setTimeout(resolve, 2500));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    // Success animation
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down';
    successMessage.textContent = '✅ Message sent successfully!';
    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aman.mishra9396@gmail.com",
      description: "Send me an email anytime!",
      color: "from-blue-500 to-blue-600",
      delay: "200ms"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 85438 96439",
      description: "Call me for urgent matters",
      color: "from-teal-500 to-teal-600",
      delay: "400ms"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      description: "Available for remote work",
      color: "from-purple-500 to-purple-600",
      delay: "600ms"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", color: "hover:bg-blue-100 hover:text-blue-600", delay: "800ms", link: 'https://www.linkedin.com/in/aman-mishra-a50552206/' },
    { name: "GitHub", color: "hover:bg-gray-100 hover:text-gray-800", delay: "1000ms", link: 'https://github.com/AmanMishra85' },
    // { name: "Twitter", color: "hover:bg-blue-100 hover:text-blue-400", delay: "1200ms", link: '' },
    // { name: "Instagram", color: "hover:bg-pink-100 hover:text-pink-600", delay: "1400ms", link: '' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-lg font-semibold mb-4 animate-pulse-slow">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss mobile app development?
            I'd love to hear from you and bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to start your <span className="gradient-text">next project?</span>
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Ready to bring your mobile app idea to life? Whether you need a complete app
              from scratch or want to enhance an existing project, I'm here to help you
              create something amazing that users will love.
            </p>

            {/* Enhanced Contact Cards */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`group bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up`}
                  style={{ animationDelay: info.delay }}
                >
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${info.color} p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </p>
                      <p className="text-gray-800 font-semibold">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="mb-10">
              <p className="font-bold text-gray-900 mb-6 text-lg">Follow me on social media:</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className={`group bg-gray-100 ${social.color} px-6 py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg font-semibold animate-fade-in-up`}
                    style={{ animationDelay: social.delay }}
                  >
                    <span className="group-hover:animate-wiggle inline-block">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`bg-green-50 border border-green-200 p-6 rounded-2xl animate-fade-in-up`} style={{ animationDelay: "1600ms" }}>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-800 font-bold text-lg">Available for new projects</span>
              </div>
              <div className="flex items-center text-green-700">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20'}`}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h3>
                <p className="text-gray-600">I'll get back to you as soon as possible!</p>
              </div>

              <div className="space-y-6">
                {/* Enhanced Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white ${focusedField === 'name' ? 'scale-105 shadow-lg' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Enhanced Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white ${focusedField === 'email' ? 'scale-105 shadow-lg' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Enhanced Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none bg-white ${focusedField === 'message' ? 'scale-105 shadow-lg' : ''}`}
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group btn-animate hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      <span className="animate-pulse">Sending your message</span>
                      <span className="loading-dots ml-1"></span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={24} className="mr-3 group-hover:animate-bounce" />
                      <span>Send Message</span>
                      <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ✨
                      </div>
                    </div>
                  )}
                </button>
              </div>

              {/* Form Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  <MessageCircle size={16} className="inline mr-1" />
                  Your information is safe and will never be shared
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;