"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Target, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "5", label: "Publications" },
    { value: "98%", label: "Model Accuracy" },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "M.S. in Data Science at Stanford University, Class of 2025",
    },
    {
      icon: Target,
      title: "Specialization",
      description: "Machine Learning, NLP, Computer Vision, and Deep Learning",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Dean's List, Google AI Research Grant, Kaggle Expert",
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Published work on transformer architectures in healthcare AI",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
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
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <AnimatedSection>
            <div className="section-label">About Me</div>
            <h2 className="section-heading mb-8">
              Turning Data Into
              <br />
              <span className="text-gradient">Powerful Insights</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate data scientist with a deep fascination for 
                uncovering hidden patterns in complex datasets. My journey began 
                with a simple question: <span className="text-foreground italic">"How can data 
                transform the way we make decisions?"</span>
              </p>
              <p>
                With expertise spanning from classical statistical methods to 
                cutting-edge deep learning architectures, I build end-to-end ML 
                pipelines that drive real business impact. I believe in making 
                AI accessible, interpretable, and ethical.
              </p>
              <p>
                When I'm not training models, you'll find me contributing to 
                open-source projects, writing technical blogs, or exploring the 
                latest research papers.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Highlights */}
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
