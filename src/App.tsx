import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import ProjectDetail from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Training from "./components/Training";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeaderSection />
              <Skills />
              <Training />
              <Projects />
            </main>
          }
        />
        <Route path="/projet/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
