import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/header";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <section className="scroll-smooth">
        <Header />
        <Profile />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

AOS.init();

export default App;
