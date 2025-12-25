"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, Send, Calendar, ArrowUpRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

const ContactSection = () => {
  const sendMessage = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    return res.json();
  };

  const mutation = useMutation({
    mutationFn: sendMessage,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutation.mutate({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });

    e.currentTarget.reset();
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
            Whether you have a project in mind, a research collaboration, or
            just want to connect — I'd love to hear from you!
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
                      href="mailto:alex.chen@stanford.edu"
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
                href="https://calendly.com"
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                               transition-all placeholder:text-muted-foreground/50"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                               transition-all placeholder:text-muted-foreground/50"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                             transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </motion.button>
                {mutation.isSuccess && (
                  <p className="text-green-500 text-sm text-center">
                    Message sent successfully!
                  </p>
                )}

                {mutation.isError && (
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
