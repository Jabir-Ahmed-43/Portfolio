import { ArrowRight, Heart, Settings, Terminal } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState("about");

  const codeSnippets = {
    about: `const developer = {
  name: "Jabir Ahmed",
  degree: "B.Sc. in CSE",
  status: "open_to_internships",
  focus: ["React", "Tailwind", "Node.js"],
  passion: "clean_code",
  grow: () => "always learning..."
};

developer.grow();`,
    skills: `const skills = {
  frontend: ["React.js", "Tailwind"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB"],
  devops: ["Git", "Linux"]
};`,
    interests: `const interests = {
  hobbies: [
    "Open Source", 
    "Hackathons", 
    "Mentoring peers"
  ],
  currentlyLearning: [
    "Next.js",
    "TypeScript"
  ]
};`,
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-[#1e3a5f] pt-32 pb-20 px-6"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full border border-accent/30 animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border border-accent/20"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full border border-accent/15 animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase mb-6 animate-fade-in">
            <span className="w-8 h-[1px] bg-accent"></span>
            Available for Internship &amp; Opportunities
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4">
            Jabir <br className="hidden md:inline" />
            <span className="italic text-accent-light">Ahmed</span>
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-300 tracking-wide mb-6">
            CSE Undergraduate &nbsp;·&nbsp; Web Developer
          </p>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
            I build thoughtful, performant web experiences — from clean
            interfaces to scalable backends. Currently pursuing my BSc in
            Computer Science & Engineering.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-navy font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-custom transition-all duration-200 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-accent/40 hover:border-accent bg-transparent hover:bg-accent/10 text-accent-light font-medium text-sm tracking-wider uppercase px-8 py-3.5 rounded-custom transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-navy/85 backdrop-blur-md border border-accent/20 rounded-custom-lg shadow-2xl overflow-hidden hover:border-accent/45 transition-colors duration-300">
            <div className="flex items-center justify-between px-4 py-3 bg-navy-mid/60 border-b border-accent/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <Terminal size={12} className="text-accent" />
                <span>developer.js</span>
              </div>
              <div className="w-12"></div>
            </div>

            <div className="flex bg-navy/60 border-b border-accent/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab("about")}
                className={`flex items-center gap-1 px-4 py-2.5 transition-colors ${
                  activeTab === "about"
                    ? "bg-navy border-t border-accent text-accent"
                    : "text-gray-400 hover:text-white hover:bg-navy-mid/30"
                }`}
              >
                <Terminal size={12} />
                <span>about.js</span>
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`flex items-center gap-1 px-4 py-2.5 transition-colors ${
                  activeTab === "skills"
                    ? "bg-navy border-t border-accent text-accent"
                    : "text-gray-400 hover:text-white hover:bg-navy-mid/30"
                }`}
              >
                <Settings size={12} />
                <span>skills.js</span>
              </button>
              <button
                onClick={() => setActiveTab("interests")}
                className={`flex items-center gap-1 px-4 py-2.5 transition-colors ${
                  activeTab === "interests"
                    ? "bg-navy border-t border-accent text-accent"
                    : "text-gray-400 hover:text-white hover:bg-navy-mid/30"
                }`}
              >
                <Heart size={12} />
                <span>interests.js</span>
              </button>
            </div>

            <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[220px]">
              <pre className="text-gray-300">
                {codeSnippets[activeTab].split("\n").map((line, idx) => {
                  const parts = line.split(
                    /(\bconst\b|\blet\b|=>|\[|\]|{|}|\/\/.*|'.*?'|".*?")/,
                  );
                  return (
                    <div key={idx} className="whitespace-pre">
                      <span className="inline-block w-4 mr-3 select-none text-right text-gray-500 text-xs">
                        {idx + 1}
                      </span>
                      {parts.map((part, pIdx) => {
                        if (part === "const" || part === "let") {
                          return (
                            <span key={pIdx} className="text-[#79b8ff]">
                              {part}
                            </span>
                          );
                        } else if (part.startsWith("//")) {
                          return (
                            <span key={pIdx} className="text-gray-500 italic">
                              {part}
                            </span>
                          );
                        } else if (
                          part.startsWith('"') ||
                          part.startsWith("'")
                        ) {
                          return (
                            <span key={pIdx} className="text-[#9ecbff]">
                              {part}
                            </span>
                          );
                        } else if (
                          part === "=>" ||
                          part === "{" ||
                          part === "}" ||
                          part === "[" ||
                          part === "]"
                        ) {
                          return (
                            <span key={pIdx} className="text-accent">
                              {part}
                            </span>
                          );
                        }
                        return <span key={pIdx}>{part}</span>;
                      })}
                    </div>
                  );
                })}
              </pre>
            </div>

            <div className="grid grid-cols-3 border-t border-accent/15 py-4 bg-navy-mid/20">
              <div className="text-center border-r border-accent/10">
                <span className="block font-serif text-xl md:text-2xl text-accent font-bold">
                  3+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Projects
                </span>
              </div>
              <div className="text-center border-r border-accent/10">
                <span className="block font-serif text-xl md:text-2xl text-accent font-bold">
                  3.56
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  CGPA
                </span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-xl md:text-2xl text-accent font-bold">
                  3rd
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
