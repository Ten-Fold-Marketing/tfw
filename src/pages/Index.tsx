import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Stats from "@/components/landing/Stats";
import ClientWins from "@/components/landing/ClientWins";
import Services from "@/components/landing/Services";
import Comparison from "@/components/landing/Comparison";
import Team from "@/components/landing/Team";
import About from "@/components/landing/About";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Stats />
        <ClientWins />
        <Services />
        <Comparison />
        <Team />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
