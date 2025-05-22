import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const teachers = [
  {
    name: "Анна Петрова",
    position: "Логопед-дефектолог",
    experience: "8 лет опыта",
    description:
      "Специализируется на коррекции звукопроизношения и развитии речи у детей дошкольного возраста.",
    image: "./teachers/teacher1.jpg",
  },
  {
    name: "Мария Иванова",
    position: "Педагог-психолог",
    experience: "5 лет опыта",
    description:
      "Эксперт в области раннего развития и психологической поддержки детей с особенностями развития.",
    image: "./teachers/teacher2.jpg",
  },
  {
    name: "Елена Смирнова",
    position: "Учитель-дефектолог",
    experience: "10 лет опыта",
    description:
      "Специалист по работе с детьми с задержкой речевого развития и нарушениями аутистического спектра.",
    image: "./teachers/teacher3.jpg",
  },
  {
    name: "Ольга Кузнецова",
    position: "Логопед",
    experience: "6 лет опыта",
    description:
      "Профессионал в области коррекции письменной речи и подготовки к школе.",
    image: "./teachers/teacher4.jpg",
  },
];

const Teachers = () => {
  return (
    <section className="py-20 bg-theme-softGray">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-white text-sm font-medium inline-block mb-4">
            Наша команда
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Профессиональные специалисты
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши преподаватели - это команда опытных специалистов, готовых
            помочь вашему ребёнку в развитии
          </p>
        </div>

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
                    src={teacher.image}
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
    </section>
  );
};

export default Teachers;
