"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Customer Churn Prediction Engine",
    category: "Machine Learning",
    description:
      "Built an ensemble model combining XGBoost, Random Forest, and Neural Networks to predict customer churn with 94% accuracy. Implemented SHAP for model interpretability.",
    technologies: ["Python", "XGBoost", "TensorFlow", "SHAP", "FastAPI", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    metrics: "94% Accuracy",
  },
  {
    title: "Real-time Sentiment Analyzer",
    category: "Natural Language Processing",
    description:
      "Developed a BERT-based sentiment analysis system processing 10K+ tweets/minute with real-time dashboard visualization and automated alerts.",
    technologies: ["PyTorch", "Transformers", "Apache Kafka", "Redis", "Streamlit"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    githubLink: "https://github.com",
    metrics: "10K/min throughput",
  },
  {
    title: "COVID-19 Forecasting Dashboard",
    category: "Time Series & Visualization",
    description:
      "Interactive dashboard with LSTM-based forecasting, geospatial analysis, and anomaly detection. Featured by Stanford Health Innovation Lab.",
    technologies: ["Python", "Plotly", "Dash", "LSTM", "Prophet", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    metrics: "Featured Project",
  },
  {
    title: "Medical Image Classifier",
    category: "Computer Vision",
    description:
      "CNN-based diagnostic tool for X-ray classification achieving radiologist-level performance. Deployed on AWS with automated retraining pipeline.",
    technologies: ["TensorFlow", "AWS SageMaker", "MLflow", "Kubernetes", "React"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    githubLink: "https://github.com",
    metrics: "97.2% F1 Score",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
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
            href="https://github.com"
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
