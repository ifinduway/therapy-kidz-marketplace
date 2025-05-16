
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-theme-softGray" id="contact">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-white text-sm font-medium inline-block mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Child's Journey Today
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to answer your questions and help you make the best decision for your child's development.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-8 text-center">
              <Button 
                className="w-full md:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all duration-300 rounded-full flex items-center justify-center gap-2 py-6 px-8 text-lg"
                onClick={() => window.open("https://t.me/yourusername", "_blank")}
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </Button>
            </div>
            
            <div className="relative my-10 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  ИЛИ
                </span>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your child's needs..."
                  className="w-full rounded-lg min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
