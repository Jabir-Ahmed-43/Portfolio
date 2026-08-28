import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  const details = [
    {
      label: "Institute",
      value: "Sylhet Engineering College",
      icon: <BookOpen className="text-accent" size={16} />,
    },
    {
      label: "Degree",
      value: "B.Sc. in CSE (2023–2027)",
      icon: <GraduationCap className="text-accent" size={16} />,
    },
    {
      label: "Location",
      value: "Sylhet, Bangladesh",
      icon: <MapPin className="text-accent" size={16} />,
    },
    {
      label: "CGPA",
      value: "3.56 / 4.00",
      icon: <Award className="text-accent" size={16} />,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-[#0b141d] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4]">
              <div className="absolute inset-0 border-2 border-accent rounded-custom-lg translate-x-4 translate-y-4 z-0 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2"></div>

              <div className="relative w-full h-full rounded-custom-lg overflow-hidden bg-navy z-10 shadow-xl group">
                <img
                  src="/images/IMG_4366_Solid_BG_sqaure.jpg"
                  alt="Jabir Ahmed"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-light text-accent text-5xl font-serif font-bold";
                      fallback.innerText = "JA";
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-navy border border-gray-100 dark:border-accent/20 rounded-custom-lg p-4 shadow-lg flex items-center gap-3 z-20 hover:scale-105 transition-transform duration-200">
                <div className="w-10 h-10 bg-accent-pale dark:bg-navy-light rounded-custom flex items-center justify-center text-lg">
                  🎓
                </div>
                <div className="leading-tight">
                  <strong className="block text-xs md:text-sm text-navy dark:text-cream font-bold">
                    3rd Year Student
                  </strong>
                  <span className="text-[10px] md:text-xs text-text-muted dark:text-gray-400">
                    CSE Department
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              About Me
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-cream font-bold leading-snug mb-6">
              Crafting the web, one component at a time
            </h2>

            <div className="space-y-4 text-base text-text-muted dark:text-gray-300 leading-relaxed">
              <p>
                I'm a 3rd-year Computer Science & Engineering undergraduate with
                a deep passion for building elegant, user-centred web
                applications. I thrive at the intersection of design and
                engineering — where clean code meets beautiful interfaces.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source
                projects, participating in hackathons, or mentoring peers. I
                believe great software is built with empathy, precision, and a
                relentless drive to improve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
              {details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 border-l-2 border-accent pl-3 py-1"
                >
                  <div className="p-1 bg-accent-pale dark:bg-navy-light rounded-custom">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-text-muted dark:text-gray-400">
                      {detail.label}
                    </span>
                    <span className="text-sm font-semibold text-navy dark:text-cream">
                      {detail.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex">
              <a
                href="/resume.pdf"
                download="Jabir_Ahmed_Resume.pdf"
                className="inline-flex items-center bg-navy hover:bg-navy-mid text-accent-light dark:bg-accent dark:text-navy dark:hover:bg-accent-light font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-custom transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
