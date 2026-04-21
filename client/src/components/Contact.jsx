import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
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
    { icon: <Github size={24} />, url: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={24} />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail size={24} />,
      url: "mailto:tanvi@example.com",
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
    <section id="contact" className="py-20 relative">
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
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-dark-text/80">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mt-4"></div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent-purple">
                  Contact Info
                </h3>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:tanvi@example.com"
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  <div className="p-3 bg-accent-purple/20 rounded-lg group-hover:bg-accent-purple/40 transition-colors">
                    <Mail className="text-accent-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Email</h4>
                    <p className="text-dark-text/70 group-hover:text-accent-purple transition-colors">
                      tanvi@example.com
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  <div className="p-3 bg-accent-purple/20 rounded-lg group-hover:bg-accent-purple/40 transition-colors">
                    <MapPin className="text-accent-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text">Location</h4>
                    <p className="text-dark-text/70">India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-dark-text mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-dark-card border border-accent-purple/20 rounded-lg text-accent-purple hover:border-accent-purple/50 hover:text-accent-pink transition-all glow-effect"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-dark-card border border-accent-purple/20 rounded-lg p-8 space-y-6 glow-effect"
              >
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-purple/20 rounded-lg text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-purple/20 rounded-lg text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-purple/20 rounded-lg text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-accent-purple transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-glow-purple transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
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
