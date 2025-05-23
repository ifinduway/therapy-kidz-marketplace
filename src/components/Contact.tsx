import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-white dark:bg-dark-primary"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
              {t("contact.badge") as string}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-dark-primary">
              {t("contact.title") as string}
            </h2>
          </div>

          <div className="mb-12 flex justify-center items-center">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 py-8 px-12 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              {t("contact.telegramButton") as string}
            </a>
          </div>

          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-dark-primary px-4 text-sm font-medium text-gray-500 dark:text-dark-secondary">
                {t("contact.or") as string}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-primary"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-dark-secondary mb-2"
                >
                  {t("contact.form.name.label") as string}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-primary focus:ring-2 focus:ring-theme-softGreen focus:border-transparent bg-white dark:bg-dark-primary text-gray-900 dark:text-dark-primary"
                  placeholder={t("contact.form.name.placeholder") as string}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-dark-secondary mb-2"
                >
                  {t("contact.form.email.label") as string}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-primary focus:ring-2 focus:ring-theme-softGreen focus:border-transparent bg-white dark:bg-dark-primary text-gray-900 dark:text-dark-primary"
                  placeholder={t("contact.form.email.placeholder") as string}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-dark-secondary mb-2"
                >
                  {t("contact.form.message.label") as string}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-primary focus:ring-2 focus:ring-theme-softGreen focus:border-transparent bg-white dark:bg-dark-primary text-gray-900 dark:text-dark-primary"
                  placeholder={t("contact.form.message.placeholder") as string}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 rounded-full py-4 font-medium"
              >
                {t("contact.form.submit") as string}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
