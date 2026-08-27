import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll Reveal Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-cream dark:bg-[#0b141d] dark-theme-scrollbar">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        
        <div className="reveal-item">
          <About />
        </div>
        
        <div className="reveal-item">
          <Skills />
        </div>
        
        <div className="reveal-item">
          <Projects />
        </div>
        
        <div className="reveal-item">
          <Experience />
        </div>
        
        <div className="reveal-item flex flex-col">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
