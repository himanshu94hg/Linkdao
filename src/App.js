import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import BuyLKD from "./components/BuyLKD";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
// import MobileNav from "./components/MobileNav";

function App() {
  return (
    <>
      <HashRouter>
        {/* <Router> */}
        <Navbar />
        <NavMobile />
        <HamburgerMenu />
        {/* <MobileNav /> */}
        <Routes>
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/BuyLKD" element={<BuyLKD />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        {/* </Router> */}
      </HashRouter>
    </>
  );
}

export default App;
