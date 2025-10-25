import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks";
import { SKILLS, SKILL_CATEGORY_COLORS } from "../utils/constants";
import CssDotGrid from "./backgrounds/CssDotGrid";

/**
 * Skills Section Component
 * Displays categorized skills with animated proficiency bars
 * Most visually impressive section with interactive elements
 */
const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = Object.keys(SKILLS);

  return (
    <section
      ref={elementRef}
      className="section-padding dark:bg-bg-dark-secondary light:bg-bg-light-secondary relative overflow-hidden"
    >
      {/* CSS Dot Grid Background */}
      <CssDotGrid dotSize={1} dotColor="rgba(102, 126, 234, 0.25)" gap={50} />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-heading font-bold text-gradient-animate mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        SKILL_CATEGORY_COLORS[category] || "#667eea",
                    }}
                  />
                  <span className="text-gradient-animate">{category}</span>
                </h3>
              </motion.div>

              {/* Skills in Category */}
              <div className="grid md:grid-cols-2 gap-6">
                {SKILLS[category].map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    category={category}
                    index={skillIndex}
                    isVisible={isIntersecting}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-lg dark:text-gray-400 light:text-gray-600">
            Always learning and exploring new technologies 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Individual Skill Card Component
 */
const SkillCard = ({ skill, category, index, isVisible, delay }) => {
  return (
    <motion.div
      className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.span
            className="text-3xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill.icon}
          </motion.span>
          <h4 className="font-semibold text-lg dark:text-white light:text-gray-900">
            {skill.name}
          </h4>
        </div>
        <span className="text-sm font-bold text-accent">
          {skill.proficiency}%
        </span>
      </div>

      {/* Proficiency Bar */}
      <div className="relative h-2 bg-gray-700/30 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${SKILL_CATEGORY_COLORS[category] || "#667eea"}, ${SKILL_CATEGORY_COLORS[category] || "#667eea"}dd)`,
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.proficiency}%` } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        {/* Glow effect */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full blur-sm opacity-50"
          style={{
            background: `linear-gradient(90deg, ${SKILL_CATEGORY_COLORS[category] || "#667eea"}, ${SKILL_CATEGORY_COLORS[category] || "#667eea"}dd)`,
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.proficiency}%` } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      {/* Hover Tooltip */}
      <motion.div
        className="mt-3 text-xs dark:text-gray-400 light:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ height: 0 }}
        whileHover={{ height: "auto" }}
      >
        Proficiency Level:{" "}
        {skill.proficiency >= 85
          ? "Expert"
          : skill.proficiency >= 70
            ? "Advanced"
            : "Intermediate"}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
