import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/80 dark:bg-navy/80 backdrop-blur-md shadow-lg border-b border-accent/20'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-navy dark:text-cream hover:text-accent dark:hover:text-accent transition-colors duration-200"
        >
          Jabir Ahmed
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent border-b-2 border-accent pb-1'
                      : 'text-text-muted hover:text-navy dark:text-gray-300 dark:hover:text-cream'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light text-navy dark:text-cream transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className={`text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-custom transition-all duration-200 ${
              activeSection === 'contact'
                ? 'bg-accent text-navy'
                : 'bg-navy text-accent-light dark:bg-accent dark:text-navy hover:bg-navy-mid dark:hover:bg-accent-light'
            }`}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light text-navy dark:text-cream transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-navy dark:text-cream hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-navy/95 backdrop-blur-lg border-b border-accent/20 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible h-0'
        }`}
      >
        <ul className="flex flex-col py-6 px-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-semibold tracking-wider uppercase transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-text-muted hover:text-navy dark:text-gray-300 dark:hover:text-cream'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-2 py-3 bg-navy text-accent-light dark:bg-accent dark:text-navy font-semibold tracking-wider uppercase rounded-custom"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
