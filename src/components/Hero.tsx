import { motion } from "framer-motion";
import { Book, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-theme-softBlue/20 to-white">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-6">
            Развитие через общение
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Развитие детей через логопедию и раннее образование
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональные услуги логопедии и детского сада, разработанные для
            того, чтобы помочь вашему ребёнку развиваться и раскрыть свой
            потенциал.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white transition-all duration-300 rounded-full"
            >
              Записаться на консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 rounded-full hover:bg-gray-50"
            >
              Узнать больше
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-theme-softGreen rounded-full flex items-center justify-center mb-4 mx-auto">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Логопедия</h3>
              <p className="text-gray-600">
                Индивидуальные занятия для развития коммуникативных навыков
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-theme-softBlue rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Детский сад</h3>
              <p className="text-gray-600">
                Увлекательное раннее образование в заботливой среде
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
