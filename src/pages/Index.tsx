import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Teachers from "@/components/Teachers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {" "}
        {/* Добавляем padding-top для компенсации фиксированной шапки */}
        <Hero />
        <Services />
        <section id="teachers">
          <Teachers />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
