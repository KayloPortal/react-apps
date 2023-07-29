import "./App.css";
import {
  About,
  Benefits,
  Blogs,
  Cta,
  Hero,
  Leading,
  Nav,
  Footer,
  FooterCta,
} from "./components/Blocks/index";

function App() {
  return (
    <>
      <div className="hero-countainer">
        <div className="hero-blur-top blur"></div>
        <div className="hero-blur-bottom blur"></div>
        <Nav />
        <Hero />
      </div>
      <main>
        <About />
        <Benefits />
        <Leading />
        <Cta />
        <Blogs />
      </main>
      <footer>
      <FooterCta />
      <Footer />
      </footer>
    </>
  );
}

export default App;
