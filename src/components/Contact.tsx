import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(
      'service_your_service_id', // Replace with your EmailJS service ID
      'template_your_template_id', // Replace with your EmailJS template ID
      {
        from_name: form.name,
        to_name: 'Kaviarasu R P',
        from_email: form.email,
        to_email: 'kaviarasurp758@gmail.com',
        message: form.message,
      },
      'your_public_key' // Replace with your EmailJS public key
    )
    .then(() => {
      setLoading(false);
      setSubmitted(true);
      setError(false);
      
      setForm({
        name: '',
        email: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setError(true);
      
      setTimeout(() => {
        setError(false);
      }, 5000);
    });
  };
  
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <motion.div 
        className="max-w-7xl mx-auto sm:px-16 px-6"
        variants={contactVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="mb-10 text-center relative" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-secondary-500 dark:from-accent-400 dark:to-secondary-400">
              Get in Touch
            </span>
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 dark:from-accent-400 dark:to-secondary-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Feel free to reach out to me for any questions, collaboration opportunities, or just to say hello. I'm always excited to connect with fellow developers and potential clients.
            </motion.p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 5 }}
              >
                <div className="bg-accent-100 dark:bg-accent-900 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <a
                  href="mailto:kaviarasurp758@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  kaviarasurp758@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 5 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <Github className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <a
                  href="https://github.com/kaviarasu758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  github.com/kaviarasu758
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 5 }}
              >
                <div className="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-full">
                  <Linkedin className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                </div>
                <a
                  href="https://www.linkedin.com/in/kaviarasu-rp-509639305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                >
                  linkedin.com/in/kaviarasu-rp-509639305
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark-200 p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-500 to-secondary-500 dark:from-accent-400 dark:to-secondary-400 hover:from-accent-600 hover:to-secondary-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex justify-center items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : submitted ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : error ? (
                  <AlertCircle className="w-5 h-5 mr-2" />
                ) : null}
                
                {loading ? "Sending..." : submitted ? "Message Sent!" : error ? "Failed to Send" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;