import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  ArrowRight,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { submitContactForm } from "../utils/api";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        toast.success("Message sent successfully! 🎉", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error(
        error.message || "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        },
      );
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: "https://github.com/tanvii-18",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/tanvi-patel18/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={24} />,
      url: "https://x.com/Tanvi_Patel18",
      label: "Twitter",
    },
    {
      icon: <Mail size={24} />,
      url: "mailto:tanvii.tech@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Get in touch and let's create something amazing together!
            </p>
            <div className="flex gap-3 justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-transparent rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-transparent rounded-full"></div>
            </div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            variants={containerVariants}
          >
            {/* Contact Info */}
            <motion.div className="space-y-12" variants={itemVariants}>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Reach out through any of these channels or fill the contact
                  form.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:tanvii.tech@gmail.com"
                  whileHover={{ x: 8 }}
                  className="flex gap-5 items-start group cursor-pointer"
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-accent-purple/20 to-accent-pink/10 rounded-xl border border-accent-purple/20 group-hover:border-accent-purple/50 transition-all duration-300 flex-shrink-0 flex items-center justify-center h-16 w-16 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail
                      className="text-accent-purple group-hover:text-accent-pink transition-colors"
                      size={28}
                    />
                  </motion.div>
                  <div className="min-w-0 pt-2">
                    <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                      Email
                    </h4>
                    <p className="text-lg text-text-primary font-medium group-hover:text-accent-purple transition-colors break-all">
                      tanvii.tech@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex gap-5 items-start group cursor-pointer"
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-accent-pink/20 to-accent-purple/10 rounded-xl border border-accent-pink/20 group-hover:border-accent-pink/50 transition-all duration-300 flex-shrink-0 flex items-center justify-center h-16 w-16 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin
                      className="text-accent-pink group-hover:text-accent-purple transition-colors"
                      size={28}
                    />
                  </motion.div>
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                      Location
                    </h4>
                    <p className="text-lg text-text-primary font-medium">
                      India
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-accent-purple/10">
                <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -8 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3.5 bg-gradient-to-br from-card to-primary border border-accent-purple/30 rounded-xl text-accent-purple hover:border-accent-purple hover:text-accent-pink hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300"
                      title={social.label}
                    >
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        {social.icon}
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="w-full">
              <motion.form
                onSubmit={handleSubmit}
                className="relative group"
                whileInView={{ y: 0, opacity: 1 }}
              >
                {/* Glassmorphism background with glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple/40 via-accent-pink/20 to-accent-purple/40 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

                <div className="relative bg-card/80 backdrop-blur-md border border-accent-purple/30 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-accent-purple/10 space-y-7">
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-text-primary uppercase tracking-wider">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-5 py-3.5 bg-input/60 border border-accent-purple/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-purple focus:bg-input/80 focus:shadow-lg focus:shadow-accent-purple/20 transition-all duration-300 placeholder-shown:text-text-secondary/50"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-text-primary uppercase tracking-wider">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-5 py-3.5 bg-input/60 border border-accent-purple/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-purple focus:bg-input/80 focus:shadow-lg focus:shadow-accent-purple/20 transition-all duration-300 placeholder-shown:text-text-secondary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-text-primary uppercase tracking-wider">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-5 py-3.5 bg-input/60 border border-accent-purple/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-purple focus:bg-input/80 focus:shadow-lg focus:shadow-accent-purple/20 transition-all duration-300 resize-none placeholder-shown:text-text-secondary/50"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-accent-purple/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none overflow-hidden relative group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="inline-block"
                          >
                            <Send size={20} />
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight size={20} />
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Help text */}
                  <p className="text-center text-xs text-dark-text/50 pt-2">
                    I'll get back to you as soon as possible
                  </p>
                </div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ToastContainer
        theme="dark"
        style={{
          "--toastify-color-light": "#0a0e27",
          "--toastify-color-dark": "#667eea",
        }}
      />
    </section>
  );
};

export default Contact;
