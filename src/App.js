import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Interships from "./Pages/Internships";
import Competitions from "./Pages/Competitions";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Interships />} />
            <Route path="/competitions" element={<Competitions />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
