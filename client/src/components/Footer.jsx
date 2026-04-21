import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent-purple/20 bg-dark-bg/50 backdrop-blur-lg py-8">
      <div className="content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Crafted By Tanvi
            </h3>
            <p className="text-dark-text/60 text-sm">
              Building beautiful and functional web experiences
            </p>
          </div>

          <div className="text-center text-sm text-dark-text/60">
            <p>© {currentYear} Tanvi Patel. All rights reserved.</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-dark-text/60 text-sm">
              Made with 💜 using MERN Stack
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
