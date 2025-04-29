import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface Skill {
  name: string;
  icon: string;
  percent: number;
  color: string;
}

const skills: Skill[] = [
  {
    name: "UI/UX Design",
    icon: "🎨",
    percent: 80,
    color: "#f97316"
  },
  {
    name: "Frontend Development",
    icon: "⚛️",
    percent: 65,
    color: "#61dafb"
  },
  {
    name: "Photoshop",
    icon: "🖌️",
    percent: 70,
    color: "#f97316"
  },
  {
    name: "Blender",
    icon: "🧊",
    percent: 75,
    color: "#f97316"
  },
  {
    name: "HTML",
    icon: "🌐",
    percent: 90,
    color: "#61dafb"
  },
  {
    name: "CSS",
    icon: "🎨",
    percent: 85,
    color: "#61dafb"
  },
  {
    name: "JavaScript",
    icon: "📜",
    percent: 70,
    color: "#61dafb"
  },
  {
    name: "React",
    icon: "⚛️",
    percent: 65,
    color: "#61dafb"
  },
  {
    name: "MongoDB",
    icon: "🍃",
    percent: 70,
    color: "#61dafb"
  },
  {
    name: "Node.js",
    icon: "🟢",
    percent: 65,
    color: "#61dafb"
  }
];

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white dark:bg-dark-200 p-6 rounded-2xl shadow-lg h-full"
      >
        <div className="h-full flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
            <motion.span 
              className="text-sm font-bold"
              style={{ color: skill.color }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
            >
              {skill.percent}%
            </motion.span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
            <motion.div 
              className="h-2.5 rounded-full"
              style={{ backgroundColor: skill.color, width: `${skill.percent}%` }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
              transition={{ duration: 1, delay: (index * 0.1) + 0.2, ease: "easeInOut" }}
            />
          </div>
          
          <div className="relative flex-grow">
            <div className="absolute -bottom-2 -right-2 w-10 h-10 opacity-10" style={{ color: skill.color }}>
              <span className="text-3xl">{skill.icon}</span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-16 relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(20, 184, 166, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <div ref={ref} className="max-w-7xl mx-auto sm:px-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-accent-500 dark:from-secondary-400 dark:to-accent-400">
              My Skills
            </span>
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 dark:from-secondary-400 dark:to-accent-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;