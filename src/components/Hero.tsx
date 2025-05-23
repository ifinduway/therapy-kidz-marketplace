import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 relative py-20 bg-gradient-to-b from-theme-softBlue/20 to-white dark:from-[#232136] dark:to-[#2d2a45]"
    >
      {/* overlay для dark mode */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
              {t("hero.badge") as string}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("hero.title") as string}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-8">
              {t("hero.description") as string}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-full font-medium transition-colors"
              >
                {t("hero.primaryButton") as string}
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white dark:bg-dark-card text-gray-900 dark:text-white rounded-full font-medium border-2 border-gray-200 dark:border-dark-primary hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
              >
                {t("hero.secondaryButton") as string}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
