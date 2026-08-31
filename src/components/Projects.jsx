import { Code2, ExternalLink, University } from "lucide-react";
import { useState } from "react";
import { Github } from "./Icons";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full Stack", "Real-time", "Dashboard"];

  const projectsList = [
    {
      title: "OJHub",
      category: "Real-time",
      tag: "Real-time",
      image: "/images/ojhub-landing-page.png",
      icon: <Code2 size={24} className="text-accent" />,
      description:
        "Developed a web-based online judge platform for programming practice, automated code evaluation, and competitive programming contests.",
      stack: ["React", "Node.js", "Tailwind", "MongoDB", "Firebase", "Judge0"],
      demoUrl: "#",
      githubUrl: "https://github.com/Jabir-Ahmed-43/OJHub",
    },
    {
      title: "Hall Management System",
      category: "Dashboard",
      image: "/images/Hall Management.jpeg",
      tag: "Dashboard",

      icon: <University size={24} className="text-accent" />,
      description:
        "A relational database-focused project designed to manage hall-related activities efficiently. Currently working on integrating the system with web technologies for improved accessibility and functionality.",
      stack: ["React.js", "Tailwind", "MySQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/Jabir-Ahmed-43/Smart-Hall-Management",
    },
    // {
    //   title: "AnalyticsPulse",
    //   category: "Dashboard",
    //   tag: "Dashboard",
    //   icon: <BarChart3 size={24} className="text-accent" />,
    //   description:
    //     "A responsive analytics dashboard for visualizing website traffic patterns, visitor counts, and user behavioral data. Features interactive chart rendering and CSV data export.",
    //   stack: ["React", "Recharts", "Express", "Tailwind"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-navy text-navy dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#7a5c1e] dark:text-accent uppercase mb-3">
              <span className="w-6 h-[1px] bg-[#7a5c1e] dark:bg-accent"></span>
              Work
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white font-bold leading-tight mb-3">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-text-muted dark:text-gray-400 max-w-xl">
              A selection of projects that showcase my development capabilities
              — from full-stack web applications to complex user interface
              experiments.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-custom transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-accent text-navy"
                    : "bg-accent-pale dark:bg-navy-mid hover:bg-accent/20 dark:hover:bg-navy-light text-[#7a5c1e] dark:text-gray-300 hover:text-[#5a4313] dark:hover:text-white border border-accent/30 dark:border-accent/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-cream/40 dark:bg-navy-mid/40 border border-accent/20 dark:border-accent/15 rounded-custom-lg overflow-hidden hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-44 bg-gradient-to-br from-accent-pale to-cream dark:from-navy-mid dark:to-navy-light flex items-center justify-center relative overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 dark:opacity-60 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors"></div>

                <div className="relative z-10 p-4 rounded-full bg-white/80 dark:bg-navy/60 border border-accent/20 transition-transform duration-300 group-hover:scale-110">
                  {project.icon}
                </div>

                <span className="absolute top-4 left-4 z-10 bg-[#7a5c1e] text-white dark:bg-accent dark:text-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-[#7a5c1e] dark:group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-accent-pale dark:bg-accent/10 text-[#7a5c1e] dark:text-accent-light border border-accent/30 dark:border-accent/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-accent/20 dark:border-accent/10">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#7a5c1e] hover:text-[#5a4313] dark:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#7a5c1e] hover:text-[#5a4313] dark:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
