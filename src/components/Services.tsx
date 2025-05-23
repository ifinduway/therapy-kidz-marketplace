import { motion } from "framer-motion";
import { Book, School, Baby } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Services = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      title: t("services.items.speechTherapy.title") as string,
      description: t("services.items.speechTherapy.description") as string,
      icon: <Book className="w-6 h-6" />,
      color: "bg-theme-softGreen",
    },
    {
      title: t("services.items.kindergarten.title") as string,
      description: t("services.items.kindergarten.description") as string,
      icon: <School className="w-6 h-6" />,
      color: "bg-theme-softBlue",
    },
    {
      title: t("services.items.earlyIntervention.title") as string,
      description: t("services.items.earlyIntervention.description") as string,
      icon: <Baby className="w-6 h-6" />,
      color: "bg-theme-softGray",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-primary">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
            {t("services.badge") as string}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-dark-primary">
            {t("services.title") as string}
          </h2>
          <p className="text-gray-600 dark:text-dark-secondary">
            {t("services.description") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
