import React, { useEffect, useRef, useState } from 'react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
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

  const technologies = [
    {
      name: "React Native",
      icon: "⚛️",
      description: "Cross-platform mobile development",
      color: "from-blue-400 to-cyan-400",
      level: 95
    },
    {
      name: "JavaScript",
      icon: "🟨",
      description: "Programming language",
      color: "from-yellow-400 to-orange-400",
      level: 90
    },
    {
      name: "TypeScript",
      icon: "🔷",
      description: "Typed JavaScript",
      color: "from-blue-500 to-blue-600",
      level: 85
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend runtime environment",
      color: "from-green-400 to-emerald-400",
      level: 88
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "NoSQL database",
      color: "from-green-500 to-green-600",
      level: 82
    },
    {
      name: "Firebase",
      icon: "🔥",
      description: "Backend-as-a-Service platform",
      color: "from-orange-400 to-red-400",
      level: 90
    },
    {
      name: "Express.js",
      icon: "🚂",
      description: "Web application framework",
      color: "from-gray-600 to-gray-700",
      level: 85
    },
    {
      name: "Redux",
      icon: "🔄",
      description: "State management",
      color: "from-purple-400 to-purple-600",
      level: 80
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "Utility-first CSS framework",
      color: "from-teal-400 to-blue-500",
      level: 92
    },
    {
      name: "Git",
      icon: "📚",
      description: "Version control system",
      color: "from-orange-500 to-red-500",
      level: 88
    },
    {
      name: "AWS",
      icon: "☁️",
      description: "Cloud computing platform",
      color: "from-yellow-500 to-orange-500",
      level: 75
    },
    {
      name: "Docker",
      icon: "🐳",
      description: "Containerization platform",
      color: "from-blue-400 to-blue-600",
      level: 70
    }
  ];

  const skillCategories = [
    { skill: "Mobile Development", level: 95, color: "from-blue-600 to-cyan-600" },
    { skill: "Frontend Development", level: 90, color: "from-purple-600 to-pink-600" },
    { skill: "Backend Development", level: 85, color: "from-green-600 to-emerald-600" },
    { skill: "Database Management", level: 80, color: "from-orange-600 to-red-600" },
    { skill: "Cloud Services", level: 75, color: "from-yellow-600 to-orange-600" },
    { skill: "UI/UX Design", level: 78, color: "from-teal-600 to-blue-600" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-lg font-semibold mb-4 animate-pulse-slow">
            Technologies & Tools
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life and create amazing mobile experiences 
            with cutting-edge solutions.
          </p>
        </div>

        {/* Enhanced Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 card-hover cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="text-center relative">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 animate-float">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {tech.description}
                  </p>
                  
                  {/* Skill level indicator */}
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: hoveredTech === tech.name ? `${tech.level}%` : '0%',
                          transitionDelay: hoveredTech === tech.name ? '300ms' : '0ms'
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{tech.level}% Proficiency</div>
                  </div>
                </div>

                {/* Hover effect particles */}
                {hoveredTech === tech.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 1000}ms`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skills Progress Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skill <span className="gradient-text">Proficiency</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((item, index) => (
              <div 
                key={item.skill} 
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-800 font-semibold text-lg">{item.skill}</span>
                  <span className="text-gray-600 font-bold text-lg">{item.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: isVisible ? `${item.level}%` : '0%',
                      transitionDelay: `${1000 + index * 200}ms`
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Statistics */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          {[
            { number: "12+", label: "Technologies", icon: "⚡" },
            { number: "50+", label: "Projects Built", icon: "🚀" },
            { number: "5+", label: "Years Experience", icon: "📅" },
            { number: "100%", label: "Code Quality", icon: "✨" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift">
                <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;