import { motion } from "framer-motion";
import { Baby, Book, School } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Book className="w-6 h-6" />,
      title: t("services.items.speechTherapy.title"),
      description: t("services.items.speechTherapy.description"),
      features: t("services.items.speechTherapy.features"),
      color: "bg-theme-softGreen",
    },
    {
      icon: <School className="w-6 h-6" />,
      title: t("services.items.kindergarten.title"),
      description: t("services.items.kindergarten.description"),
      features: t("services.items.kindergarten.features"),
      color: "bg-theme-softBlue",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: t("services.items.earlyIntervention.title"),
      description: t("services.items.earlyIntervention.description"),
      features: t("services.items.earlyIntervention.features"),
      color: "bg-theme-softGray",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                {service.features.map((feature: string) => (
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
