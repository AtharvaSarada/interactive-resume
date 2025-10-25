import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks";
import {
  EDUCATION,
  PROJECTS,
  CERTIFICATIONS,
  PERSONAL_INFO,
  SOCIAL_LINKS,
  AURORA_COLORS,
} from "../utils/constants";
import Aurora from "../animations/Aurora";
import CssDotGrid from "./backgrounds/CssDotGrid";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONFIG,
  EMAIL_TEMPLATE_PARAMS,
} from "../config/emailjs.config";

// ============================================
// EDUCATION COMPONENT
// ============================================

export const Education = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={elementRef}
      className="section-padding dark:bg-bg-dark light:bg-bg-light relative overflow-hidden"
    >
      {/* CSS Dot Grid Background */}
      <CssDotGrid dotSize={1} dotColor="rgba(102, 126, 234, 0.25)" gap={40} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-heading font-bold text-gradient-animate mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />

          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`relative mb-12 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Content */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <motion.div
                  className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-accent font-semibold mb-2">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm dark:text-gray-400 light:text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {edu.cgpa && (
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full mb-3">
                      CGPA: {edu.cgpa}
                    </div>
                  )}

                  <p className="text-sm dark:text-gray-300 light:text-gray-700 mb-3">
                    {edu.description}
                  </p>

                  {edu.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-white/10 rounded-md dark:text-gray-300 light:text-gray-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-bg-dark z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROJECTS COMPONENT
// ============================================

export const Projects = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      ref={elementRef}
      className="section-padding dark:bg-bg-dark-secondary light:bg-bg-light-secondary relative overflow-hidden"
    >
      {/* CSS Dot Grid Background */}
      <CssDotGrid dotSize={1} dotColor="rgba(102, 126, 234, 0.25)" gap={50} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-heading font-bold text-gradient-animate mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {project.category === "AI/ML"
                    ? "🤖"
                    : project.category === "E-commerce"
                      ? "🛒"
                      : "🌐"}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">
                  {project.name}
                </h3>
                <p className="text-sm text-accent mb-3">{project.tagline}</p>
                <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-white/10 rounded-md dark:text-gray-300 light:text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/10 rounded-md dark:text-gray-300 light:text-gray-700">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-lg text-center hover:shadow-lg transition-shadow"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 glass text-sm font-semibold rounded-lg text-center hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-8"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-3xl font-bold mb-2 text-gradient-animate">
                  {selectedProject.name}
                </h3>
                <p className="text-accent mb-4">{selectedProject.tagline}</p>
                <p className="dark:text-gray-300 light:text-gray-700 mb-6">
                  {selectedProject.longDescription}
                </p>

                <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900">
                  Features
                </h4>
                <ul className="list-disc list-inside mb-6 dark:text-gray-400 light:text-gray-600 space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ============================================
// CERTIFICATIONS COMPONENT
// ============================================

export const Certifications = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={elementRef}
      className="section-padding dark:bg-bg-dark light:bg-bg-light relative overflow-hidden"
    >
      {/* CSS Dot Grid Background */}
      <CssDotGrid dotSize={1} dotColor="rgba(102, 126, 234, 0.25)" gap={40} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-heading font-bold text-gradient-animate mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                  📜
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold dark:text-white light:text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-accent text-sm font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-xs dark:text-gray-400 light:text-gray-600 mt-1">
                    {cert.platform} • {cert.date}
                  </p>
                </div>
              </div>

              <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-white/10 rounded-md dark:text-gray-300 light:text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTACT COMPONENT
// ============================================

export const Contact = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: EMAIL_TEMPLATE_PARAMS.to_name,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={elementRef}
      className="section-padding relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Aurora Background */}
      <Aurora colors={AURORA_COLORS} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      {social.icon === "linkedin" && (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      {social.icon === "github" && (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {social.icon === "mail" && (
                        <Mail className="w-6 h-6 text-white" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner w-5 h-5 border-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
