import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CalculatorSection from './components/CalculatorSection';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CalculatorSection />
      <Projects />
      <Testimonials />
      <CTA />
      <Blog />
      <FAQ />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  );
}
