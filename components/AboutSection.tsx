"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "M.Sc.", label: "Data Science" },
    { value: "4+", label: "Full Stack Projects" },
    { value: "5+", label: "Tech Stack Tools" },
    { value: "24/7", label: "Learning Mindset" },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Foundation",
      description: "M.Sc. in Data Science, Sri Sathya Sai Institute Of Higher Learning (2025)",
    },
    {
      icon: BrainCircuit,
      title: "Analytical Expertise",
      description: "Advanced Statistical Methods, Predictive Modeling, and Deep Learning Architectures",
    },
    {
      icon: Code2,
      title: "Technical Engineering",
      description: "Full-Stack Development with Next.js, API Design (FastAPI), and Cloud Infrastructure",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Stats Bar */}
        <AnimatedSection>
          <div className="card-glass p-8 rounded-2xl mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Narrative */}
          <AnimatedSection>
            <div className="section-label">Professional Profile</div>
            
            <h2 className="section-heading mb-8">
              Architecting
              <br />
              <span className="text-gradient">Intelligent Systems</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify">
              <p>
                My professional focus lies at the convergence of advanced data analytics 
                and modern software engineering. Leveraging a rigorous academic foundation 
                in <span className="text-foreground font-medium">Machine Learning</span>, 
                I specialize in transitioning theoretical models into robust, scalable production environments.
              </p>
              <p>
                Transcending traditional analysis, I orchestrate the full lifecycle of 
                data products. This involves engineering high-performance interfaces with 
                <span className="text-foreground font-medium"> Next.js</span>, 
                developing efficient microservices via 
                <span className="text-foreground font-medium"> FastAPI</span>, 
                and ensuring seamless cloud deployment.
              </p>
              <p>
                My objective is to bridge the gap between complex algorithmic research 
                and tangible business utility, delivering solutions that are statistically 
                sound and technically superior.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Strategic Highlights */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  className="card-glass p-6 rounded-xl card-hover group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gradient-primary rounded-xl shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;