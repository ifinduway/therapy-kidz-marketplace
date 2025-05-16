
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Скрываем шапку при прокрутке вниз и показываем при прокрутке вверх
    if (latest > lastScrollY && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  // Функция для плавного скролла к секциям
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 py-4 bg-white shadow-sm z-10"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#9b87f5] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Speech Therapy</span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-gray-600 hover:text-[#9b87f5] transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-600 hover:text-[#9b87f5] transition-colors"
          >
            Contact Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-[#9b87f5] text-white px-4 py-2 rounded-full hover:bg-[#7E69AB] transition-colors"
          >
            Get Started
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
