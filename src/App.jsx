import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import EducationTimeline from "./components/pages/education/EducationTimeline";
import Projects from "./components/pages/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <EducationTimeline />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
