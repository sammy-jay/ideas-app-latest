import "./App.css";
import Navbar from "./components/Navbar";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import CTA from "./container/CTA/CTA";
import Footer from "./container/Footer/Footer";
import Hero from "./container/Hero/Hero";
import IPChoices from "./container/IPChoices/IPChoices";
import Services from "./container/Services/Services";
import FAQ from "./container/FAQ/FAQ";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <IPChoices />
      <Services />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
