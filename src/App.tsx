import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeaderSection from "./components/HeaderSection";
import ProjectDetail from "./components/ProjectDetails";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Training from "./components/Training";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeaderSection />
              <Skills />
              <Training />
              <Projects />
              <Experience />
              <Contact />
            </main>
          }
        />
        <Route path="/projet/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
