"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 noise-bg" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-5 py-2.5 card-glass rounded-full mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
          </span>
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="section-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient relative">
            Alex Chen
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle with typing effect style */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
            Data Scientist & ML Engineer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="section-subheading mx-auto mb-12 text-lg md:text-xl"
        >
          Transforming complex data into actionable insights. Specializing in 
          <span className="text-primary font-medium"> machine learning</span>,
          <span className="text-accent font-medium"> deep learning</span>, and
          <span className="text-primary font-medium"> statistical analysis</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-4 h-4" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-4 card-glass rounded-xl hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-24 left-16 hidden xl:block"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="card-glass p-4 font-mono text-sm">
          <span className="text-primary">import</span> tensorflow <span className="text-primary">as</span> tf
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-16 hidden xl:block"
        animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="card-glass p-4 font-mono text-sm">
          <span className="text-accent">accuracy</span>: <span className="text-success">98.7%</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
