import Navbar from "../components/Navbar";
import Aurora from "../components/Aurora";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Ribbon from "../components/Ribbon";
import Manifesto from "../components/Manifesto";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import Showreel from "../components/Showreel";
import Influencers from "../components/Influencers";
import Values from "../components/Values";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <About />
        <Services />
        <Ribbon />
        <Process />
        <CaseStudies />
        <Showreel />
        <Influencers />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
