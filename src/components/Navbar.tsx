import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white/80 dark:bg-dark-100/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.a
          href='#'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.p className='text-primary-600 dark:text-primary-400 text-[18px] font-bold cursor-pointer flex'>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kaviarasu
            </motion.span>
            &nbsp;
            <motion.span 
              className='sm:block hidden text-gray-600 dark:text-gray-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              | UI/UX Developer
            </motion.span>
          </motion.p>
        </motion.a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title 
                  ? "text-primary-600 dark:text-primary-400" 
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-primary-600 dark:hover:text-primary-400 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.div
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {toggle ? (
              <X className='w-[28px] h-[28px] text-gray-800 dark:text-white cursor-pointer' />
            ) : (
              <Menu className='w-[28px] h-[28px] text-gray-800 dark:text-white cursor-pointer' />
            )}
          </motion.div>

          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white dark:bg-dark-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.8, y: toggle ? 0 : -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;