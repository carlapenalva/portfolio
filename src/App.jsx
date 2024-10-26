import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import About from "./components/pages/about/About";
import EducationTimeline from "./components/pages/education/EducationTimeline";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <EducationTimeline />
      <Footer />
    </>
  );
}

export default App;
