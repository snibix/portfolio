import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import ProjetDetails from "./pages/ProjetDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projet/:id" element={<ProjetDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
