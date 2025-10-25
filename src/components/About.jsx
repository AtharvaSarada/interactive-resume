import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Code, Award } from "lucide-react";
import { useIntersectionObserver, useCountUp } from "../hooks";
import {
  PROFILE_SUMMARY,
  PROFILE_EXTENDED,
  STATISTICS,
} from "../utils/constants";
import ProfileCard from "./ProfileCard";
import CssDotGrid from "./backgrounds/CssDotGrid";

/**
 * About Section Component
 * Displays professional profile, animated statistics, and key highlights
 */
const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Icon mapping
  const iconMap = {
    calendar: Calendar,
    briefcase: Briefcase,
    code: Code,
    award: Award,
  };

  return (
    <section
      ref={elementRef}
      className="section-padding dark:bg-bg-dark light:bg-bg-light relative overflow-hidden"
    >
      {/* CSS Dot Grid Background */}
      <CssDotGrid dotSize={1} dotColor="rgba(102, 126, 234, 0.3)" gap={40} />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileCard />
          </motion.div>

          {/* Profile Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-lg dark:text-gray-300 light:text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {PROFILE_SUMMARY}
            </motion.p>

            <motion.p
              className="text-lg dark:text-gray-300 light:text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {PROFILE_EXTENDED}
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-1">Focus</h4>
                <p className="text-sm dark:text-gray-400 light:text-gray-600">
                  Full-Stack & AI Development
                </p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-1">Availability</h4>
                <p className="text-sm dark:text-gray-400 light:text-gray-600">
                  Open to Opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {STATISTICS.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Stat Card Component with Counter Animation
 */
const StatCard = ({ stat, index, isVisible }) => {
  const Icon =
    {
      calendar: Calendar,
      briefcase: Briefcase,
      code: Code,
      award: Award,
    }[stat.icon] || Code;

  // Extract numeric value for counter
  const numericValue = parseInt(stat.value.replace(/\D/g, "")) || 0;
  const suffix = stat.value.replace(/[0-9]/g, "");

  const { count, startCountUp } = useCountUp(numericValue, 2000, 0);

  useEffect(() => {
    if (isVisible) {
      startCountUp();
    }
  }, [isVisible, startCountUp]);

  return (
    <motion.div
      className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mb-3"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <div className="text-3xl md:text-4xl font-bold text-gradient-animate mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm dark:text-gray-400 light:text-gray-600 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default About;
