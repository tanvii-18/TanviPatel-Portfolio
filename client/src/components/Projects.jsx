import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // Sample project data
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "🛍️",
      description: "Full-stack e-commerce solution with payment integration",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      image: "✓",
      description: "Real-time collaborative task management with Websockets",
      tags: ["React", "Express", "PostgreSQL", "Socket.io"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "🌤️",
      description: "Interactive weather app with geolocation and forecasts",
      tags: ["React", "API Integration", "Tailwind CSS"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      image: "📝",
      description: "Feature-rich blogging platform with admin dashboard",
      tags: ["MERN", "Authentication", "Rich Editor"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 5,
      title: "Chat Application",
      image: "💬",
      description: "Real-time messaging app with file sharing",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      image: "📊",
      description: "Data visualization dashboard with interactive charts",
      tags: ["React", "Chart.js", "Node.js", "MongoDB"],
      liveDemo: "#",
      sourceCode: "#",
    },
  ];

  const visibleProjects = showMore ? allProjects : allProjects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="h-full"
                  layout
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="h-full bg-card border border-accent-purple/20 rounded-lg overflow-hidden glow-effect hover:border-accent-purple/50 transition-all flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="h-48 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border-b border-accent-purple/20 flex items-center justify-center text-6xl hover:scale-105 transition-transform">
                      {project.image}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg font-semibold text-primary text-center flex items-center justify-center gap-2 hover:shadow-glow-purple transition-all"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 border-2 border-accent-purple rounded-lg font-semibold text-accent-purple hover:bg-accent-purple/10 transition-all flex items-center justify-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          {!showMore && allProjects.length > 3 && (
            <motion.div className="text-center" variants={itemVariants}>
              <motion.button
                onClick={() => setShowMore(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-accent-purple rounded-lg font-semibold text-accent-purple hover:bg-accent-purple/10 transition-all"
              >
                View More Projects →
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
