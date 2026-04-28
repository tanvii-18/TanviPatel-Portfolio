import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaGit,
  FaDatabase,
  FaAws,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const scrollContainerRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={40} /> },
        { name: "JavaScript", icon: <FaJs size={40} /> },
        { name: "HTML5", icon: <FaHtml5 size={40} /> },
        { name: "CSS3", icon: <FaCss3 size={40} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
        { name: "Vite", icon: <SiVite size={40} /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode size={40} /> },
        { name: "Express", icon: <SiExpress size={40} /> },
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
        // { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
        // { name: "Python", icon: <FaPython size={40} /> },
        // { name: "Java", icon: <FaJava size={40} /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGit size={40} /> },
        // { name: "Docker", icon: <FaDocker size={40} /> },
        // { name: "AWS", icon: <FaAws size={40} /> },
        // { name: "Linux", icon: <FaLinux size={40} /> },
        { name: "Database", icon: <FaDatabase size={40} /> },
      ],
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto"></div>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent-purple">
                  {category.title}
                </h3>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                  <motion.div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="flex-shrink-0 w-32 h-36 bg-gradient-to-br from-card to-card/50 border border-accent-purple/20 rounded-lg p-4 flex flex-col items-center justify-center gap-3 glow-effect group hover:border-accent-purple/50 transition-all cursor-pointer"
                      >
                        <div className="text-accent-purple group-hover:text-accent-pink transition-colors">
                          {skill.icon}
                        </div>
                        <p className="text-sm font-semibold text-center text-text-primary">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Scroll Buttons */}
                  <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-accent-purple/20 hover:bg-accent-purple/40 rounded-full transition-all hover:scale-110 hidden lg:flex items-center justify-center"
                  >
                    <ChevronLeft size={24} className="text-accent-purple" />
                  </button>

                  <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-accent-purple/20 hover:bg-accent-purple/40 rounded-full transition-all hover:scale-110 hidden lg:flex items-center justify-center"
                  >
                    <ChevronRight size={24} className="text-accent-purple" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
