import { Cpu, Database, Monitor, Server } from "lucide-react";

export const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend Development",
      icon: (
        <Monitor size={22} className="text-accent-light dark:text-accent" />
      ),
      skills: [
        { name: "React.js", isAccent: true },
        { name: "Next.js", isAccent: true },
        { name: "Tailwind CSS", isAccent: true },
        { name: "HTML5", isAccent: false },
        { name: "CSS3", isAccent: false },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server size={22} className="text-accent-light dark:text-accent" />,
      skills: [
        { name: "Node.js", isAccent: true },
        { name: "Express.js", isAccent: true },
        { name: "REST APIs", isAccent: true },
      ],
    },
    {
      category: "Databases",
      icon: (
        <Database size={22} className="text-accent-light dark:text-accent" />
      ),
      skills: [
        { name: "MongoDB", isAccent: true },
        { name: "Firebase", isAccent: true },
        { name: "MySQL", isAccent: true },
        { name: "PostgreSQL", isAccent: false },
        { name: "Redis", isAccent: false },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <Cpu size={22} className="text-accent-light dark:text-accent" />,
      skills: [
        { name: "Git & GitHub", isAccent: true },
        { name: "Next.js", isAccent: true },
        { name: "VS Code", isAccent: true },
        { name: "Postman", isAccent: true },
        { name: "Docker", isAccent: false },
        { name: "Linux", isAccent: false },
        { name: "Figma", isAccent: false },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-cream dark:bg-navy-mid/30 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            Expertise
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-cream font-bold leading-tight mb-4">
            Technologies I work with
          </h2>
          <p className="text-base text-text-muted dark:text-gray-400 max-w-xl">
            A curated toolkit built through academic coursework, personal
            projects, and real-world implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy border border-gray-100 dark:border-accent/10 rounded-custom-lg p-6 hover:-translate-y-1 hover:border-accent/40 dark:hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-navy dark:bg-navy-mid rounded-custom flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-navy dark:text-cream leading-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border ${
                      skill.isAccent
                        ? "bg-accent-pale text-[#7a5c1e] border-[#d4b882] dark:bg-accent/15 dark:text-accent-light dark:border-accent/30"
                        : "bg-gray-100 text-gray-700 border-gray-200 dark:bg-navy-light/45 dark:text-gray-300 dark:border-accent/10 hover:border-accent/20"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
