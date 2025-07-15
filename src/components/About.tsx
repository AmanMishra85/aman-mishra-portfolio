import { useEffect, useRef, useState } from 'react';
import {Code, Zap } from 'lucide-react';
import profileImg from '../assets/Images/profile.jpg';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    'React Native', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Mysql', 'MongoDB', 'Firebase',
    'Express.js', 'Redux', 'REST APIs', 'GraphQL', 'Git', 'AWS'
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <div className="relative">
            <div className={`relative inline-block transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
              <div className="relative w-70 h-70 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                <img
                  src={profileImg}
                  alt="Aman Mishra"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-float">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white p-3 rounded-full shadow-lg animate-float animation-delay-1000">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              {/* Enhanced background decoration */}
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl animate-pulse-slow"></div>

              {/* Animated rings */}
              <div className="absolute -z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-blue-300/30 rounded-full animate-ping"></div>
              <div className="absolute -z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-teal-300/20 rounded-full animate-ping animation-delay-1000"></div>
            </div>
          </div>

          {/* Enhanced About Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20'}`}>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-lg font-semibold mb-2 animate-pulse-slow">
                Get to know me
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className={`transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                Hello! I'm <span className="text-blue-600 font-semibold">Aman Mishra</span>, a passionate Mobile App Developer with a strong foundation in
                computer science and a love for creating innovative mobile experiences that make a difference.
              </p>

              <p className={`transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                I specialize in <span className="text-blue-600 font-semibold">React Native development</span> and
                the <span className="text-teal-600 font-semibold">MERN stack</span>, enabling me to build
                full-stack mobile applications from concept to deployment. My expertise extends to
                Firebase integration, third-party API implementations, and creating seamless user experiences.
              </p>
              <p className={`transition-all duration-700 delay-1100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                When I'm not coding, you'll find me exploring the latest mobile development trends,
                contributing to open-source projects, and continuously learning new technologies to
                stay at the forefront of mobile app development.
              </p>
            </div>

            {/* Enhanced Skills Tags */}
            <div className={`mt-8 transition-all duration-700 delay-1300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-teal-200 transition-all duration-300 hover:scale-110 cursor-pointer hover-glow animate-fade-in-up`}
                    style={{ animationDelay: `${1500 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Cards */}
            {/* <div className={`mt-10 grid grid-cols-2 gap-4 transition-all duration-700 delay-1500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white p-4 rounded-xl shadow-lg hover-lift group">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-lg font-bold text-gray-900">1+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg hover-lift group">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-lg font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;