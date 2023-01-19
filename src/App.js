import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <NavMobile />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
