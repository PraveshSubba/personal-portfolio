"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Interactive 3D Web Experience",
    category: "Web Development",
    description:
      "A 3D web application built with Three.js and React, featuring real-time rendering, interactive camera controls, and optimized WebGL performance for immersive browser-based experiences.",

    technologies: ["JavaScript", "React", "Three.js", "Tailwind CSS", "Vite"],

    image: "/images/project1.webp",

    githubLink: "https://github.com/PraveshSubba/threejs-showcase.git",
    liveLink: "https://portfolio-one-fawn-77.vercel.app/",
    metrics: "60 FPS Animations",  
  },

 {
    title: "Unified College Management System",
    category: "Full Stack Development",
    description:
      "Architected a comprehensive institutional platform integrating a high-performance Spring Boot backend with a responsive React.js frontend. Features secure Role-Based Access Control (RBAC) for Admins, Teachers, and Students, utilizing WebSockets for real-time updates and interactive dashboards for academic management.",
    technologies: [
      "Java Spring Boot",
      "React.js",
      "REST APIs",
      "WebSockets",
      "Maven",
      "Chart.js" 
    ],
    image: "/images/project2.webp",
    githubLink: "https://github.com/sairaj2059/College-Management-System.git",
    metrics: "Secure RBAC Architecture",
  },

  {
    title: "OnDemandDoc: Appointment System",
    category: "Full Stack & HealthTech",
    description:
      "Developed a robust medical scheduling engine enabling seamless doctor-patient connections. Features a triple-interface architecture (Patient, Doctor, Admin) to handle complex booking logic, real-time availability slot management, and secure payment processing to reduce appointment no-shows.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux Toolkit",
      "Cloudinary"
    ],
    image: "/images/project4.webp", 
    githubLink: "https://github.com/PraveshSubba/onDemandDoc.git", 
    metrics: "3-Portal Architecture", 
  },

  {
    title: "My Vault: Secure Password Manager",
    category: "Cybersecurity & Desktop App",
    description:
      "Developed a privacy-first password management solution featuring a 'Zero-Knowledge' local architecture. The application offers dual interfaces (CLI & GUI) and utilizes strong encryption to secure credentials locally, ensuring complete data sovereignty without external cloud dependencies. Packaged as standalone executables for seamless Windows deployment.",
    technologies: [
      "Python 3.10",
      "Cryptography (AES)",
      "Tkinter", 
      "JSON",
      "PyInstaller", 
    ],
    image: "/images/project4.webp",
    githubLink: "https://github.com/PraveshSubba/password-manager.git",
    metrics: "Zero-Knowledge Architecture",
  }

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label justify-center">Portfolio</div>
          <h2 className="section-heading mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world data science projects showcasing end-to-end ML pipelines,
            from data exploration to production deployment
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* View More */}
        <AnimatedSection className="text-center mt-12">
          <a
            href="https://github.com/PraveshSubba"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Projects on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
