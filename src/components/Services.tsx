
import { motion } from "framer-motion";
import { Baby, Book, School } from "lucide-react";

const services = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Speech Therapy",
    description: "Comprehensive speech and language development programs for children of all ages.",
    features: ["Language Development", "Articulation Therapy", "Fluency Enhancement"],
    color: "bg-theme-softGreen",
  },
  {
    icon: <School className="w-6 h-6" />,
    title: "Kindergarten Education",
    description: "Structured early learning programs in a supportive environment.",
    features: ["Academic Readiness", "Social Skills", "Creative Development"],
    color: "bg-theme-softBlue",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Early Intervention",
    description: "Early identification and intervention for communication challenges.",
    features: ["Development Assessment", "Parent Training", "Progress Monitoring"],
    color: "bg-theme-softGray",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-theme-softGray text-sm font-medium inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Care for Your Child
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized services designed to support your child's development and learning journey.
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
              <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
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
