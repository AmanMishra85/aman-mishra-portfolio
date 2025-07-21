import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, Eye, Heart } from 'lucide-react';
import logisticsImg from '../assets/Images/logistics.png'
import adminImg from '../assets/Images/admin.png'
import vehilceImg from '../assets/Images/vehicle.png'
import tripImg from '../assets/Images/trip.png'
import BiodataImg from '../assets/Images/image.png'

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
      title: "Arunodya Bidding App",
      description: "An auction/bidding application developed to enable users to participate in real‑time item bidding, monitor current bid status, and allow administrators or sellers to manage listings and bidding workflows efficiently.",
      image: logisticsImg,
      technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL", "MongoDB", "Firebase"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.biddingafpl",
      featured: true,
      stats: { stars: 124, views: 2500, likes: 89 }
    },
    {
      id: 2,
      title: "Admin App",
      description: "An internal enterprise admin panel developed to manage user data, resolve customer complaints, monitor team attendance, and send in-app messages, with role-based access for admin and sub-admin users.",
      image: adminImg,
      technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL", "MongoDB", "Firebase"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 98, views: 1800, likes: 67 }
    },
    {
      id: 3,
      title: "Track Vehicle Insurance",
      description: "A cross-platform vehicle insurance tracking app developed to let users view assigned vehicle details, track insurance expiry dates, receive due-date reminders, and request service reimbursements from within the app.",
      image: vehilceImg,
      technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL", "Firebase"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 156, views: 3200, likes: 112 }
    },
    {
      id: 4,
      title: "Trip Expense Tracker",
      description: "An app to create and manage trips, log multiple expenses per trip, view total costs, and edit or delete trips and individual expenses easily.",
      image: tripImg,
      technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.exptrc",
      featured: false,
      stats: { stars: 87, views: 1500, likes: 54 }
    },
    {
      id: 5,
      title: "Create My Biodata - Web",
      description: "A simple web app to create biodata without login, by filling a form with personal details and choosing from multiple templates for download or print.",
      image: BiodataImg,
      technologies: ["React JS", "Tailwind CSS", "html2pdf", "react-router-dom"],
      github: "#",
      live: "https://createmybiodata.vercel.app/",
      featured: false,
      stats: { stars: 73, views: 1200, likes: 41 }
    },
    {
      id: 6,
      title: "Task Manager - Web",
      description: "A basic frontend-only ToDo app using localStorage to add, edit, delete tasks, and track the count of completed and pending items.",
      image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React JS", "Local Storage", "Basic Design", "Tailwind CSS"],
      github: "#",
      live: "https://to-do-frontend-application.vercel.app/",
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
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Clickable Image Container */}
              <a
                href={project.id !== 2 && project.id !== 3 ? project.live : undefined}
                target={project.id !== 2 && project.id !== 3 ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => {
                  if (project.id === 2 || project.id === 3) {
                    e.preventDefault(); // stop navigation
                    alert("This project is under NDA and cannot be accessed publicly.");
                  }
                }}

              >
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
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex space-x-3">
                        {/* <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-white hover:scale-105 transition-all duration-300 group/btn">
                          <Eye size={18} className="text-gray-700 group-hover/btn:animate-bounce" />
                        </div> */}
                        {
                          (project.id !== 2 && project.id !== 3) && <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-white hover:scale-105 transition-all duration-300 group/btn">
                            <ExternalLink size={18} className="text-gray-700 group-hover/btn:animate-ping" />
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-t-2xl transition-all duration-500"></div>
                </div>
              </a>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-100 hover:to-teal-100 hover:text-blue-700 transition-all duration-300 hover:scale-102 cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 150 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: hoveredProject === project.id ? '100%' : '0%',
                      transitionDelay: hoveredProject === project.id ? '200ms' : '0ms',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        {/*<div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
          <p className="text-gray-600 mb-6 text-lg">
            Interested in seeing more of my work?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl btn-animate">
            View All Projects
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;