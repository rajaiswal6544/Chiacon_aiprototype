import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UseCases from './components/UseCases';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <hr className="divider" />
        <UseCases />
        <hr className="divider" />
        <AiDemo />
      </main>
      <Footer />
    </>
  );
}
