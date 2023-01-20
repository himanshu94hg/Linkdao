import React, { useState } from "react";
import "./Index.scss";
import Logo from "../../assets/LinkdaoNameLogo.svg";
import sLogo from "../../assets/sLinkdaoNameLogo.svg";
import launchapp from "../../assets/launchapp.svg";
import toolsback from "../../assets/toolsback.png";

const Navbar = () => {
  const [color, setColor] = useState(false);
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
            <a aria-current="page" className="d-flex active" href="/">
              <img src={color ? sLogo : Logo} width="170" alt="" />
            </a>
          </div>
          <div className="col-6 bg-white d-flex justify-content-around align-items-center py-3 links">
            <a className="text-decoration-none navlink text fw-bold" href="/">
              LKD
            </a>
            <a
              className="text-decoration-none navlink fw-bold"
              href="https://linkdao-network.gitbook.io/linkdao"
              target="_blank"
              rel="noreferrer"
            >
              Documents
            </a>
            <a
              className="text-decoration-none navlink fw-bold"
              href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
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
