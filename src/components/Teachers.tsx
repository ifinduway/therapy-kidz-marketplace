import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "@/hooks/useTranslation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Teacher {
  name: string;
  position: string;
  experience: string;
  description: string;
}

const Teachers = () => {
  const { t } = useTranslation();
  const teachers = t("teachers.items") as unknown as Teacher[];

  return (
    <section
      id="teachers"
      className="scroll-mt-24 py-20 bg-gray-50 dark:bg-dark-secondary"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4"
          >
            {t("teachers.badge") as string}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-dark-primary"
          >
            {t("teachers.title") as string}
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
            className="teachers-swiper"
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide key={teacher.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-primary shadow-lg hover:shadow-xl transition-all duration-300 h-[450px] flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-dark-primary"
                  >
                    <img
                      src={`./teachers/teacher${index + 1}.jpg`}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-xl font-semibold mb-2 text-center flex-shrink-0 text-gray-900 dark:text-dark-primary"
                  >
                    {teacher.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="text-theme-softBlue text-center mb-2 flex-shrink-0"
                  >
                    {teacher.position}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-gray-500 dark:text-dark-secondary text-sm text-center mb-4 flex-shrink-0"
                  >
                    {teacher.experience}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-gray-600 dark:text-dark-secondary text-center flex-grow"
                  >
                    {teacher.description}
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
