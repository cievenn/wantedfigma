import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { WelcomeMoment } from "./components/WelcomeMoment";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden scroll-smooth">
      <WelcomeMoment />
      <Header />
      <main>
        <Hero />
        <ProgressIndicator />
        <About />
        <ProgressIndicator />
        <Services />
        <ProgressIndicator />
        <Stats />
        <ProgressIndicator />
        <Portfolio />
        <ProgressIndicator />
        <Testimonials />
        <ProgressIndicator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
