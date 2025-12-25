"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      color: "primary",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "SQL"],
    },
    {
      title: "Web Development",
      color: "accent",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "No-Code & Backend",
      color: "primary",
      skills: ["Lovable", "Node.js", "REST APIs","Spring Boot","FastAPI" ],
    },
    {
      title: "Visualization",
      color: "accent",
      skills: ["Matplotlib", "Seaborn", "Tableau"],
    },
    {
      title: "Cloud & Deployment", 
      color: "primary",
      skills: ["Vercel", "Docker", "IBM Cloud"], 
    },
    {
      title: "Math & Fundamentals",
      color: "accent",
      skills: ["Statistics", "Linear Algebra", "Calculus", "Computer Networks"],
    },
  ];
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label justify-center">Technical Arsenal</div>
          <h2 className="section-heading mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit for building intelligent, scalable data solutions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <motion.div
                className="card-glass p-6 rounded-2xl h-full card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      category.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  <h3 className="font-display text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
