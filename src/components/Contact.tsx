import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="px-4 py-2 rounded-full bg-theme-softGreen text-sm font-medium inline-block mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-12 flex justify-center items-center">
              <Button
                className="w-full md:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 py-8 px-12 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() =>
                  window.open("https://t.me/yourusername", "_blank")
                }
              >
                <MessageSquare className="w-6 h-6" />
                {t("contact.telegramButton")}
              </Button>
            </div>

            <div className="relative my-10 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  {t("contact.or")}
                </span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.name.label")}
                  </label>
                  <Input
                    type="text"
                    placeholder={t("contact.form.name.placeholder")}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.email.label")}
                  </label>
                  <Input
                    type="email"
                    placeholder={t("contact.form.email.placeholder")}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.message.label")}
                </label>
                <Textarea
                  placeholder={t("contact.form.message.placeholder")}
                  className="w-full rounded-lg min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 rounded-full"
              >
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
