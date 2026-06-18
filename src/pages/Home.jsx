import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Manifesto from "../components/Manifesto";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import Influencers from "../components/Influencers";
import Values from "../components/Values";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <About />
        <Services />
        <Process />
        <CaseStudies />
        <Influencers />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
