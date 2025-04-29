import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen py-16 relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 80%)",
        }}
      />
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto sm:px-16 px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center relative"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
            About Me
          </span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
          <motion.div 
            className="col-span-1 lg:col-span-3"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get to Know Me</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm Kaviarasu R P, a passionate UI/UX and Frontend Developer currently pursuing a B.E. in Computer Science and Engineering at Kongu Engineering College.
              </p>
              <p>
                I specialize in designing clean, user-friendly interfaces using tools like Figma, Photoshop, and Illustrator, and building them with HTML, CSS, JavaScript, and React.
              </p>
              <p>
                I have developed innovative projects including a Smart Helmet designed for real-time accident detection and tracking, as well as a Book Recommendation System powered by MongoDB and APIs. My UI/UX applications such as a music streaming platform inspired by Spotify and a movie ticket booking system, all crafted with a focus on user-centric design.
              </p>
              <p>
               Through internships in both web development and IoT, I have gained hands-on experience that bridges academic knowledge with industry practices. I am a certified MongoDB Associate Developer and actively engage in technical paper presentations and hackathons, reflecting my commitment to continuous learning and contribution to the tech community.
             </p>

              <p>
                I enjoy blending design and code to solve real problems, and I'm always eager to learn and grow in collaborative environments.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-1 lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-3">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold">B.E. Computer Science and Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Kongu Engineering College</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2021 - Present</p>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold">Higher Secondary (HSC)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adharsh Vidyalaya Matric Higher Secondary School</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2019 - 2021</p>
                </li>
                <li>
                  <h4 className="font-semibold">Secondary School (SSLC)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adharsh Vidyalaya Matric Higher Secondary School</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2018 - 2019</p>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-accent-100 dark:bg-accent-900 p-3 rounded-full mr-3">
                  <Briefcase className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold">CODESOFT</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Development Intern</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">MAY 2024 - JUNE 2024</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;