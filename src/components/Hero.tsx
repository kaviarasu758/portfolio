import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, MousePointer, ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import kaviImage from '../assets/images/kavi.png'; 

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const calculateTransform = (depth: number = 1) => {
    if (isMobile) return { x: 0, y: 0 };
    
    const x = (mousePosition.x - 0.5) * depth * 20;
    const y = (mousePosition.y - 0.5) * depth * 20;
    return { x, y };
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col items-start gap-5 xl:flex-row xl:items-center xl:justify-between w-full">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col justify-center items-start mt-5">
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col">
                  <AnimatedText
                    text="KAVIARASU R P"
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                  />
                  
                  <motion.h2 
                    className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    UI/UX & Frontend Developer
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg mt-4 max-w-md text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    "Think like a user. Design with clarity. Develop with passion."
                  </motion.p>
                  
                  <motion.div 
                    className="flex gap-4 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <motion.a 
                      href="https://github.com/kaviarasu758" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900 p-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GitHub className="w-5 h-5 text-gray-800 dark:text-white" />
                    </motion.a>
                    
                    <motion.a 
                      href="https://www.linkedin.com/in/kaviarasu-rp-509639305/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900 p-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-5 h-5 text-gray-800 dark:text-white" />
                    </motion.a>
                    
                    <motion.a 
                      href="mailto:kaviarasurp758@gmail.com" 
                      className="bg-gray-200 dark:bg-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900 p-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5 text-gray-800 dark:text-white" />
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <motion.button
                      className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href="#projects" title="Explore my projects" className="flex items-center gap-2">
                        <MousePointer className="w-4 h-4" />
                        <span>Explore my work</span>
                      </a>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400">
            <img
              src={kaviImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div
            className="absolute inset-0 border-2 border-primary-600 dark:border-primary-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-[15%] w-16 h-16 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-40 dark:opacity-25"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            transform: `translate(${calculateTransform(2).x}px, ${calculateTransform(2).y}px) rotate(45deg)`,
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-[20%] w-20 h-20 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 opacity-40 dark:opacity-25"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -15, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            transform: `translate(${calculateTransform(1.5).x}px, ${calculateTransform(1.5).y}px) rotate(30deg)`,
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 left-[30%] w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-40 dark:opacity-25"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            transform: `translate(${calculateTransform(3).x}px, ${calculateTransform(3).y}px)`,
          }}
        />
      </div>

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about' title="Learn more about me">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 dark:border-gray-600 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gray-600 dark:bg-gray-400 mb-1'
            />
          </div>
        </a>
      </div>

      <motion.div
        className="absolute bottom-10 left-10 hidden md:flex flex-col items-center gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-1 h-24 bg-gradient-to-b from-transparent to-primary-600 dark:to-primary-400" />
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;