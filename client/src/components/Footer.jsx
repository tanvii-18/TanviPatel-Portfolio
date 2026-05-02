import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent-purple/20 bg-card/50 backdrop-blur-lg py-12 transition-colors">
      <div className="content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-4xl md:text-5xl text-text-primary/70 hover:text-text-primary/90 transition-colors duration-300 cursor-default select-none"
            style={{ fontFamily: "Tangerine, cursive", letterSpacing: "2px" }}
          >
            tanvipatel
          </p>
          <motion.div
            className="h-0.5 w-20 mx-auto mt-3 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left flex-1">
            <h3 className="text-lg font-semibold text-text-secondary mb-1">
              Crafted with care
            </h3>
            <p className="text-text-tertiary text-sm">
              Building beautiful and functional web experiences
            </p>
          </div>

          <div className="text-center flex-1 text-sm text-text-tertiary">
            <p>© {currentYear} Tanvi Patel. All rights reserved.</p>
          </div>

          <div className="text-center md:text-right flex-1">
            <p className="text-text-secondary text-sm">
              Made with 💜 using MERN Stack
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent mb-6" />

        {/* Personal branding statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs md:text-sm text-text-tertiary/60 max-w-md mx-auto">
            Transforming ideas into elegant solutions, one line of code at a
            time
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
