import { Code2, GraduationCap } from "lucide-react";

export const Experience = () => {
  const items = [
    // {
    // date: 'Jun 2024 — Aug 2024',
    // role: 'Frontend Developer Intern',
    // organization: 'TechVentures Ltd. — Dhaka, Bangladesh',
    // icon: <Briefcase size={16} className="text-accent" />,
    // highlights: [
    //   'Built and maintained React components for a SaaS product used by 5,000+ active users.',
    //   'Improved frontend performance by 35% using React lazy-loading and dynamic imports.',
    //   'Collaborated with designers to deliver pixel-perfect, highly responsive UI features.',
    // ],
    // },
    {
      date: "08 December 2024",
      role: "Onsite Programming Contest",
      organization: "Various Projects — GitHub",
      icon: <Code2 size={16} className="text-accent" />,
      highlights: [
        "Had the opportunity to participate in the first IUJPC Programming Contest. ",
        "Helped us learn, grow and strengthen our teamwork.",
      ],
    },
    {
      date: "2022 — Present",
      role: "B.Sc. in Computer Science & Engineering",
      organization: "State University of Technology",
      icon: <GraduationCap size={16} className="text-accent" />,
      highlights: [
        "Maintained a cumulative GPA of 3.56 / 4.00.",
        "Honored with placement on the Dean's List for academic excellence.",
        "Served as Web Technologies Student Club Lead, organizing workshops and tech talks.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-white dark:bg-[#0b141d] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              Journey
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-cream font-bold leading-tight mb-4">
              Experience &amp; Education
            </h2>
            <p className="text-sm md:text-base text-text-muted dark:text-gray-400">
              Building standard industry skills through academic rigor,
              internships, and open-source contributions.
            </p>
          </div>

          <div className="lg:col-span-8 relative pl-6 border-l border-accent/30 dark:border-accent/20 ml-2 space-y-12">
            {items.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-navy border-2 border-accent flex items-center justify-center shadow-sm z-10 transition-transform duration-250 group-hover:scale-110">
                  {item.icon}
                </div>

                <div className="p-6 rounded-custom-lg border border-transparent hover:border-accent/15 dark:hover:border-accent/10 hover:bg-cream/40 dark:hover:bg-navy-mid/10 transition-all duration-300">
                  <span className="inline-block text-[10px] md:text-xs font-bold tracking-wider text-accent uppercase mb-2">
                    {item.date}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-navy dark:text-cream mb-1">
                    {item.role}
                  </h3>

                  <h4 className="text-xs md:text-sm font-medium text-text-muted dark:text-gray-400 mb-4">
                    {item.organization}
                  </h4>

                  <ul className="list-disc list-outside pl-4 space-y-2 text-xs md:text-sm text-text-muted dark:text-gray-300 leading-relaxed">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
