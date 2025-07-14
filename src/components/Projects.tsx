import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, Eye, Heart } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      title: "FoodDelivery App",
      description: "Cross-platform food delivery app with real-time tracking, payment integration, and restaurant management system.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 124, views: 2500, likes: 89 }
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Instagram-like social platform with photo sharing, stories, real-time chat, and social interactions.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 98, views: 1800, likes: 67 }
    },
    {
      id: 3,
      title: "E-Commerce App",
      description: "Full-featured shopping app with product catalog, cart management, secure payments, and order tracking.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Stripe API", "Express.js", "MongoDB"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 156, views: 3200, likes: 112 }
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Health and fitness app with workout tracking, progress analytics, and social challenges.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "HealthKit", "Charts.js", "Firebase"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 87, views: 1500, likes: 54 }
    },
    {
      id: 5,
      title: "Weather App",
      description: "Beautiful weather application with forecasts, location services, and interactive weather maps.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Weather API", "Maps", "Animations"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 73, views: 1200, likes: 41 }
    },
    {
      id: 6,
      title: "Task Manager",
      description: "Productivity app for task management with team collaboration, deadlines, and progress tracking.",
      image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "Socket.io", "Push Notifications"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 91, views: 1700, likes: 63 }
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-lg font-semibold mb-4 animate-pulse-slow">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the mobile applications I've built, showcasing my expertise in 
            React Native and full-stack development with modern technologies.
          </p>
          
          {/* Animated divider */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-pulse-slow"></div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow">
                    ⭐ Featured
                  </div>
                )}
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 group/btn"
                      >
                        <Github size={18} className="text-gray-700 group-hover/btn:animate-spin" />
                      </a>
                      <a
                        href={project.live}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 group/btn"
                      >
                        <ExternalLink size={18} className="text-gray-700 group-hover/btn:animate-bounce" />
                      </a>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="flex space-x-2 text-white text-xs">
                      <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                        <Star size={12} className="mr-1" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                        <Eye size={12} className="mr-1" />
                        {project.stats.views}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-t-2xl transition-all duration-500"></div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-red-500">
                    <Heart size={16} className={`${hoveredProject === project.id ? 'animate-pulse' : ''}`} />
                    <span className="ml-1 text-sm">{project.stats.likes}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Enhanced Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-100 hover:to-teal-100 hover:text-blue-700 transition-all duration-300 hover:scale-102 cursor-pointer animate-fade-in-up`}
                      style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: hoveredProject === project.id ? '100%' : '0%',
                      transitionDelay: hoveredProject === project.id ? '200ms' : '0ms'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <p className="text-gray-600 mb-6 text-lg">
            Interested in seeing more of my work?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl btn-animate">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;