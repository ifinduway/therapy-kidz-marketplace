import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile) {
      const isScrollingDown = latest > lastScrollY;
      const isScrolledPastThreshold = latest > 150;

      if (isScrollingDown && isScrolledPastThreshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
    setLastScrollY(latest);
  });

  // Function for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`${
        isMobile ? "relative" : "fixed"
      } top-0 left-0 right-0 py-4 bg-white/80 backdrop-blur-md shadow-sm z-50`}
      initial={{ y: 0 }}
      animate={{
        y: isMobile ? 0 : hidden ? -100 : 0,
        backgroundColor: isMobile
          ? "rgb(255, 255, 255)"
          : "rgba(255, 255, 255, 0.8)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
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
            <span className="font-bold text-xl text-gray-800">Логопедия</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-600 hover:text-[#9b87f5] transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-[#9b87f5] transition-colors"
          >
            Контакты
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#9b87f5] text-white px-4 py-2 rounded-full hover:bg-[#7E69AB] transition-colors"
          >
            Начать
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
