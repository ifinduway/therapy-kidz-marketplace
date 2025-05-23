import { motion } from "framer-motion";
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
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
            {t("teachers.badge") as string}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("teachers.title") as string}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="teachers-swiper"
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide key={teacher.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-[450px] flex flex-col"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={`./teachers/teacher${index + 1}.jpg`}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center flex-shrink-0">
                    {teacher.name}
                  </h3>
                  <p className="text-[#9b87f5] text-center mb-2 flex-shrink-0">
                    {teacher.position}
                  </p>
                  <p className="text-gray-500 text-sm text-center mb-4 flex-shrink-0">
                    {teacher.experience}
                  </p>
                  <p className="text-gray-600 text-center flex-grow">
                    {teacher.description}
                  </p>
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
