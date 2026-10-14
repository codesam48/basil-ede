import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const SECTIONS = ["about", "skills", "contact"];

export default function App() {
  const [active, setActive] = useState("about");

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header active={active} />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        {/* Add <Projects /> and <Achievements /> here once there is content. */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
