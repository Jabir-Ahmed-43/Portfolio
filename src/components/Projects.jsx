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
      image: "/ojhub-landing-page.png",
      icon: <Code2 size={24} className="text-accent" />,
      description:
        "Developed a web-based online judge platform for programming practice, automated code evaluation, and competitive programming contests.",
      stack: ["React", "Node.js", "Tailwind", "MongoDB", "Firebase", "Judge0"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hall Management System",
      category: "Real-time",
      tag: "Real-time",

      icon: <University size={24} className="text-accent" />,
      description:
        "A relational database-focused project designed to manage hall-related activities efficiently. Currently working on integrating the system with web technologies for improved accessibility and functionality.",
      stack: ["React.js", "Tailwind", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
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
      className="py-20 md:py-28 bg-navy text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              Work
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold leading-tight mb-3">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl">
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
                    : "bg-navy-mid hover:bg-navy-light text-gray-300 hover:text-white border border-accent/15"
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
              className="group flex flex-col bg-navy-mid/40 border border-accent/15 rounded-custom-lg overflow-hidden hover:border-accent/50 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-44 bg-gradient-to-br from-navy-mid to-navy-light flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={project.image} alt="" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors"></div>

                <div className="p-4 rounded-full bg-navy/60 border border-accent/20 transition-transform duration-300 group-hover:scale-110">
                  {project.icon}
                </div>

                <span className="absolute top-4 left-4 bg-accent text-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-accent/10">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
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
