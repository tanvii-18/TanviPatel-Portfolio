import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Target } from "lucide-react";

const About = () => {
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

  const features = [
    {
      icon: <Zap size={32} />,
      title: "Development Approach",
      description:
        "Building scalable, maintainable solutions with modern technologies.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Learning Mindset",
      description: "Constantly exploring new technologies and best practices",
    },
    {
      icon: <Target size={32} />,
      title: "Problem Solving",
      description:
        "Turning complex challenges into elegant, efficient solutions",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
              My Journey Into<span className="gradient-text"> Tech</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={itemVariants}
          >
            <p className="text-lg text-text-secondary">
              I'm a passionate Full Stack Developer with a strong foundation in
              the MERN stack.. My journey into tech has been driven by a deep
              love for creating beautiful, functional web experiences.
            </p>
            <p className="text-lg text-text-secondary">
              With expertise in both frontend and backend technologies, I bring
              a unique perspective combining UI/UX sensibilities with robust
              backend architecture. I'm deeply committed to continuous learning
              and staying at the forefront of web development trends.
            </p>
            <p className="text-lg text-text-secondary">
              Beyond coding, I value strong communication, adaptability, and
              consistency. These soft skills, combined with my technical
              prowess, enable me to collaborate effectively and deliver
              exceptional results.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-card border border-accent-purple/20 rounded-lg hover:border-accent-purple/50 transition-all glow-effect group"
              >
                <div className="text-accent-purple mb-4 group-hover:text-accent-pink transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
