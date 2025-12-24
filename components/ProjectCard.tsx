"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
  metrics?: string;
  index: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  image,
  githubLink,
  liveLink,
  metrics,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group card-glass rounded-2xl overflow-hidden card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-xs font-mono rounded-full">
            {category}
          </span>
        </div>

        {/* Metrics Badge */}
        {metrics && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-success text-xs font-mono rounded-full">
              <TrendingUp className="w-3 h-3" />
              {metrics}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-secondary/50 text-xs font-mono rounded-md border border-border/50"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs text-muted-foreground">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 5 }}
          >
            <Github size={16} />
            Source Code
          </motion.a>
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
