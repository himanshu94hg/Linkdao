import "./Index.scss";
import Logo from "../../assets/LinkdaoNameLogo.svg";
import sLogo from "../../assets/sLinkdaoNameLogo.svg";
import launchapp from "../../assets/launchapp.svg";
import toolsback from "../../assets/toolsback.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [color, setColor] = useState();

  const changeColor = () => {
    if (window.scrollY >= 750) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className="container-fluid  d-none d-lg-flex page-navigation false">
        <div
          className="container-lg d-flex pt-4 justify-content-between"
          id="navbar"
        >
          <div className="col-2 d-flex justify-content-start">
            <Link className="d-flex active" to="/">
              {location.pathname === "/" ? (
                <img src={color ? sLogo : Logo} width="170" alt="" />
              ) : (
                <img src={sLogo} width="170" alt="" />
              )}
              {/* <img src={props.color ? sLogo : Logo} width="170" alt="" /> */}
            </Link>
          </div>
          <div className="col-6 bg-white d-flex justify-content-around align-items-center py-3 links">
            <Link className="text-decoration-none navlink text fw-bold" to="/">
              LKD
            </Link>
            <a
              className="text-decoration-none navlink fw-bold"
              href="https://linkdao-network.gitbook.io/linkdao"
              target="_blank"
              rel="noreferrer"
            >
              Documents
            </a>
            <Link className="text-decoration-none navlink fw-bold" to="/BuyLKD">
              Buy LKD
            </Link>
            <a
              className="text-decoration-none navlink fw-bold"
              href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
            {/* <a className="text-decoration-none navlink" href="/about#aboutmain">
              About us
            </a> */}
          </div>
          <div className="col-2 d-flex justify-content-end position-relative">
            <a
              className="d-flex text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://app.linkdao.network/"
            >
              <img src={launchapp} className="tools-btn" alt="" />
            </a>
            <img
              src={toolsback}
              className="position-absolute tools-outline"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
