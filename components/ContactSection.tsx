"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, Send, Calendar, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_9lqe76x",   
        "template_grvlfxa",  
        form,
        "ihZxG4tBlTUEBPAXH"     
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-primary/10 rounded-full blur-[150px]"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label justify-center">Get In Touch</div>
          <h2 className="section-heading mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="section-subheading mx-auto">
            Whether you have a project in mind, a research collaboration, or just
            want to connect — I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatedSection delay={0.1}>
              <motion.div
                className="card-glass p-6 rounded-2xl card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:praveshsubba81@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      praveshsubba81@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className="card-glass p-6 rounded-2xl card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-secondary rounded-xl">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-foreground font-medium">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.a
                href="https://calendar.app.google/neb7iExRXbb73p959"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-6 rounded-2xl card-hover flex items-center justify-between group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-xl border border-border">
                    <Calendar className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                      Schedule
                    </p>
                    <p className="text-foreground font-medium">Book a Call</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <div className="card-glass p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                                 transition-all placeholder:text-muted-foreground/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                                 transition-all placeholder:text-muted-foreground/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                               transition-all placeholder:text-muted-foreground/50"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                               transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                  <p className="text-green-500 text-sm text-center">
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Failed to send message. Try again.
                  </p>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
