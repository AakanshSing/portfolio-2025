import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Powered Recon System",
    description: " A two-layered reconciliation system using rulebook-driven LLM and logistic regression",
    //image: "/projects/project1.png",
    tags: ["Python", "Gen AI", "ML"],
    //demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/AI-Reconciler",
  },
  {
    id: 2,
    title: "Employee Utilization MIS",
    description:
      " A full-stack platform with structured database, REST API, and interactive analytics",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Docker", "MaiaDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/MIS/tree/main",
  },
  {
    id: 3,
    title: "Infra Market Forecasting",
    description:
      "A quantitative study of market return predictability using statistical and machine learning models.",
    image: "/projects/project3.png",
    tags: ["Python", "LSTM", "MLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/Infrastructure-Finance",
  },
  {
    id: 4,
    title: "EV Bus Scheduling Optimization",
    description:
      "Optimizing EV bus scheduling on using simulation and MILP holding control",
    image: "/projects/project3.png",
    tags: ["Colab", "LSTM", "MILP"],
    demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/EV-Bus-Scheduling-Optimization/tree/main",
  },
  {
    id: 5,
    title: "Option Pricing with GBM",
    description:
      "Estimating option prices using GBM-driven simulations and Monte Carlo methods.",
    image: "/projects/project3.png",
    tags: ["Black–Scholes", "Monte Carlo Simulation"],
    demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/Financial-Mathematics---Options-Pricing/tree/main",
  },
  {
    id: 6,
    title: "Regression & Forecasting",
    description:
      "Prediction of concrete compressive strength using regression modeling, ANOVA, and multicollinearity analysis",
    image: "/projects/project3.png",
    tags: ["ARIMA", "ANOVA", "Time-Series"],
    demoUrl: "#",
    githubUrl: "https://github.com/AakanshSing/Regression-analysis",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              
                
             

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AakanshSing"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
