import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-full mb-4">
                <span className="text-accent-purple font-semibold text-sm">
                  👋 Full Stack Developer
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="gradient-text animate-glow">Tanvi</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary max-w-lg"
              variants={itemVariants}
            >
              Turning ideas into aesthetic, functional web experiences with a
              passion for clean code and beautiful design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <ScrollLink to="projects" smooth duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-glow-purple transition-all"
                >
                  Explore My Work
                  <ArrowRight size={20} />
                </motion.button>
              </ScrollLink>

              <ScrollLink to="contact" smooth duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-accent-purple rounded-lg font-semibold text-accent-purple hover:bg-accent-purple/10 transition-all flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Let's Connect
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Profile image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/40 to-accent-pink/40 rounded-3xl border-2 border-accent-purple/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <img
                    src="./src/assets/pro.jpg"
                    className="text-sm text-dark-text/60"
                    alt=""
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-accent-purple/20 rounded-lg border border-accent-purple/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-pink/10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-dark-text/60">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-accent-purple/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-accent-purple rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
