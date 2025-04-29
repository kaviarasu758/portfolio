import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Figma, Github, ExternalLink } from 'lucide-react'; // Import Github icon

interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_demo_link?: string;
}

const uiProjects: Project[] = [
  {
    name: "Movie Ticket Booking UI",
    description:
      "Interactive web application for booking movie tickets with seat selection, payment integration, and booking management.",
    tags: [
      { name: "Figma", color: "green-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://www.figma.com/proto/91IrZ6sEGL1O1WzEMz0oF3/Movie-Booking?page-id=179%3A2012&node-id=179-3441&viewport=525%2C250%2C0.13&t=FmEFroGGw4hFYaqA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=179%3A2533",
  },
  {
    name: "Music App UI",
    description:
      "A Spotify-inspired music application interface with modern design, smooth animations, and user-friendly navigation.",
    tags: [
      { name: "Figma", color: "green-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://www.figma.com/proto/kc4QRfJW0re4R7LpLQuPNS/spotify?page-id=376%3A427&node-id=383-1255&p=f&viewport=506%2C281%2C0.07&t=qaDaksXgFwCdOcb6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=383%3A1255",
  },
];

const webProjects: Project[] = [
  {
    name: "Book Recommendation System",
    description:
      "Web application that recommends books based on user preferences using machine learning algorithms and MongoDB database.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Google API", color: "pink-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/kaviarasu758/BookRecomendations",
  },
  {
    name: "Library Management System (MERN)",
    description:
      "A full-stack library management system for managing books, borrowers, and transactions. The system is divided into two parts: ADMIN and CLIENT.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/kaviarasu758/LibraryManagementSystem_MERN-with-Book-Recommendation-Algorithm-master",
  },
  {
    name: "Recipe Finder",
    description:
      "A web application that allows users to search for recipes by ingredients. Built using JavaScript, SCSS, and HTML, with Python handling the backend logic.",
    tags: [
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/kaviarasu758/RecipeFinder",
  },
  {
    name: "Inventory Management System",
    description:
      "A database management system project for managing inventory using PHP, CSS, Hack, and JavaScript.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Hack", color: "pink-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/kaviarasu758/Inventory-management-system",
  },
];

const iotProjects: Project[] = [
  {
    name: "Smart Helmet",
    description:
      "A safety system that uses IoT sensors to detect accidents and automatically alert emergency services with the rider's location.",
    tags: [
      { name: "Arduino Uno", color: "blue-text-gradient" },
      { name: "Raspberry Pi", color: "green-text-gradient" },
      { name: "Piezoelectric Sensor", color: "pink-text-gradient" },
      { name: "IoT", color: "yellow-text-gradient" },
    ],
    image: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //source_code_link: "https://github.com/kaviarasu758?tab=repositories",
  },
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white dark:bg-dark-200 p-5 rounded-2xl sm:w-[360px] w-full h-full shadow-lg"
      >
        <div className="relative w-full h-[230px] overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            {/* Conditionally render GitHub or Figma icon */}
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
            >
              {project.tags.some(tag => tag.name === "Figma") ? (
                <Figma className="w-5 h-5 text-white" />
              ) : (
                <Github className="w-5 h-5 text-white" /> // Render GitHub icon for web projects
              )}
            </div>
            {project.live_demo_link && (
              <div
                onClick={() => window.open(project.live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-16 relative z-0">
      <div className="max-w-7xl mx-auto sm:px-16 px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-primary-600 dark:from-accent-400 dark:to-primary-400">
              My Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Explore my work across UI/UX design, web development, and IoT innovations.
          </p>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-600 dark:from-accent-400 dark:to-primary-400 rounded-full" />
        </motion.div>

        <div className="mt-16">
          <h3
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 mb-6"
          >
            UI Projects
          </h3>
          <div className="flex flex-wrap gap-10 justify-center">
            {uiProjects.map((project, index) => (
              <ProjectCard key={`ui-project-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Web Projects
          </h3>
          <div className="flex flex-wrap gap-10 justify-center">
            {webProjects.map((project, index) => (
              <ProjectCard key={`web-project-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            IoT Projects
          </h3>
          <div className="flex flex-wrap gap-10 justify-center">
            {iotProjects.map((project, index) => (
              <ProjectCard key={`iot-project-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;