import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Featured from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Featured />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
