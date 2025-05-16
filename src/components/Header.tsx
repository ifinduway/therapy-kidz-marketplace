
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
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
          <a href="#services" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
            Contact Us
          </a>
          <a 
            href="#contact" 
            className="bg-[#9b87f5] text-white px-4 py-2 rounded-full hover:bg-[#7E69AB] transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
