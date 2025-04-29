import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative z-0">
      <div className="fixed top-5 right-5 z-50">
        <motion.button
          onClick={toggleDarkMode}
          className="bg-white dark:bg-dark-200 p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 17 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ y: 10, opacity: 0, rotate: -180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -10, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="h-6 w-6 text-yellow-500" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: 10, opacity: 0, rotate: 180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -10, opacity: 0, rotate: -180 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="h-6 w-6 text-gray-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <div className="bg-white dark:bg-dark-100 overflow-hidden">
        <div className="relative">
          <ParticlesBackground />
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Skills />
        <div className="relative z-0">
          <Projects />
          <StarsCanvas />
        </div>
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;