"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
     { icon: FiGithub, href: "https://github.com/PraveshSubba", label: "GitHub" },
      { icon: FiLinkedin, href: "www.linkedin.com/in/praveshsubba", label: "LinkedIn" },
      { icon: FiMail, href: "mailto:praveshsubba81@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative pt-20 pb-8 px-6 border-t border-border/50">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              <span className="text-gradient">&lt;</span>
              Pravesh Subba
              <span className="text-gradient">/&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              C S Graduate & AI ML passionate about transforming data 
              into impactful solutions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 bg-secondary/50 rounded-lg border border-border/50 
                           text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for updates on my latest projects and articles.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-secondary/50 border border-border/50 rounded-lg 
                         text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <motion.button
                className="px-4 py-2.5 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pravesh Subba. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
