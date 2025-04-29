import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy
} from 'lucide-react';

const experiences = [
  {
    title: "B.E. Computer Science",
    company_name: "Kongu Engineering College",
    icon: GraduationCap,
    iconBg: "#e3f2fd",
    iconColor: "#2196f3",
    date: "2021 - Present",
    points: [
      "Currently pursuing Bachelor's degree in Computer Science Engineering",
      "Focusing on UI/UX design and frontend development",
      "Active participant in tech events and hackathons",
      "Exploring various web technologies and frameworks"
    ],
  },
  {
    title: "UI/UX Design ",
    company_name: "Self-learned",
    icon: Briefcase,
    iconBg: "#fff8e1",
    iconColor: "#ffb300",
    date: "2023 - Started",
    points: [
      "Designing user interfaces for web and mobile applications",
      "Creating wireframes, prototypes, and high-fidelity mockups",
      "Conducting user research and usability testing",
      "Collaborating with clients to understand requirements and deliver solutions"
    ],
  },
  {
    title: "CAR BOOKING WEBSITE",
    company_name: "CODESOFT",
    icon: Briefcase,
    iconBg: "#e6f7e9",
    iconColor: "#4caf50",
    date: "MAY 2024",
    points: [
      "Designed and developed a responsive car selling website using HTML, CSS, and JavaScript",
      "Implemented interactive features such as car filtering, image sliders, and inquiry forms",
      "Optimized layout and styling to ensure a seamless user experience across devices",
      "Collaborated with a small team to integrate client requirements and enhance site functionality"
    ],
  },
  {
    title: "MongoDB Associate Developer",
    company_name: "Certification",
    icon: Trophy,
    iconBg: "#e8eaf6",
    iconColor: "#3f51b5",
    date: "2025",
    points: [
      "Earned MongoDB Associate Developer certification",
      "Developed proficiency in database design and management",
      "Created efficient data models for web applications",
      "Implemented CRUD operations and aggregation pipelines"
    ],
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-16 relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <div ref={ref} className="max-w-7xl mx-auto sm:px-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
              My Journey
            </span>
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 rounded-full" />
        </motion.div>
    
        <VerticalTimeline lineColor="#d1d5db">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgb(255, 255, 255)",
                color: "#1f2937",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                padding: "2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "8px solid rgb(255, 255, 255)" }}
              date={experience.date}
              dateClassName="text-gray-600 dark:text-gray-400"
              iconStyle={{ 
                background: experience.iconBg, 
                color: experience.iconColor,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              icon={<experience.icon className="w-5 h-5" />}
              visible={isInView}
            >
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-400 font-semibold text-sm">
                {experience.company_name}
              </p>
              <ul className="mt-4 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-gray-600 dark:text-gray-400 text-sm font-normal"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;