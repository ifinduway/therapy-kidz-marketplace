import { motion } from "framer-motion";
import { Baby, Book, School } from "lucide-react";

const services = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Логопедия",
    description:
      "Комплексные программы развития речи и языка для детей всех возрастов.",
    features: [
      "Развитие речи",
      "Артикуляционная терапия",
      "Улучшение беглости",
    ],
    color: "bg-theme-softGreen",
  },
  {
    icon: <School className="w-6 h-6" />,
    title: "Детский сад",
    description:
      "Структурированные программы раннего обучения в поддерживающей среде.",
    features: [
      "Подготовка к школе",
      "Социальные навыки",
      "Творческое развитие",
    ],
    color: "bg-theme-softBlue",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Раннее вмешательство",
    description: "Раннее выявление и коррекция проблем с коммуникацией.",
    features: ["Оценка развития", "Обучение родителей", "Мониторинг прогресса"],
    color: "bg-theme-softGray",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-theme-softGray text-sm font-medium inline-block mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Комплексная забота о вашем ребёнке
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем специализированные услуги, разработанные для поддержки
            развития и обучения вашего ребёнка.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
