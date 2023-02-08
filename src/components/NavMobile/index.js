import React, { useState } from "react";
import "./index.scss";
import Hamburger from "hamburger-react";
import Logo from "../../assets/LinkdaoNameLogo.svg";
// import MobileMenu from "./MobileMenu";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import launchapp from "../../assets/launchapp.svg";

const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  /* const toggleMenu = () => {
    setOpenMenu(false);
  };

  document.addEventListener("mousedown", toggleMenu); */

  return (
    <>
      <div className="container-fluid mobile-navbar white-navbar py-3 d-flex justify-content-between align-items-center d-lg-none ">
        <Link
          aria-current="page"
          className="active"
          to="/"
          onClick={() => setOpenMenu(false)}
        >
          <img src={Logo} width="130" alt="" />
        </Link>
        <Hamburger
          className="hamburgermenu"
          onToggle={(toggled) => {
            if (toggled) {
              setOpenMenu(true);
            } else {
              setOpenMenu(false);
            }
          }}
        />
      </div>
      {openMenu ? (
        <div
          id="bgmenu"
          className="bg-white d-flex flex-column d-lg-none d-xl-none justify-content-start align-items-center py-3 links menu openMenu"
          style={{ pointerEents: "auto" }}
        >
          <ul className="w-100 px-0 ulNav">
            <li className="mobile-navlink m-0 p-4">
              <a
                className="text-decoration-none d-flex justify-content-between align-items-center"
                href="https://linkdao-network.gitbook.io/linkdao/introduction/lets-get-started"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenMenu(false)}
              >
                LKD
                <IoIosArrowForward />
              </a>
            </li>

            <li className="mobile-navlink m-0 p-4">
              <a
                className="text-decoration-none d-flex justify-content-between align-items-center"
                href="https://linkdao-network.gitbook.io/linkdao/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenMenu(false)}
              >
                Documents
                <IoIosArrowForward />
              </a>
            </li>

            <li className="mobile-navlink m-0 p-4">
              <Link
                className="text-decoration-none d-flex justify-content-between align-items-center"
                to="/BuyLKD"
                onClick={() => setOpenMenu(false)}
              >
                Buy LKD
                <IoIosArrowForward />
              </Link>
            </li>

            <li className="mobile-navlink m-0 p-4">
              <a
                className="text-decoration-none d-flex justify-content-between align-items-center"
                href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenMenu(false)}
              >
                Contact
                <IoIosArrowForward />
              </a>
            </li>

            {/* <li className="mobile-navlink m-0 p-4">
          <a
            className="text-decoration-none d-flex justify-content-between align-items-center"
            href="/"
          >
            About Us
            <IoIosArrowForward />
          </a>
        </li> */}
          </ul>
          <div className="col-12 d-flex justify-content-center position-relative">
            <a
              className="d-flex text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://app.linkdao.network/"
              onClick={() => setOpenMenu(false)}
            >
              <img src={launchapp} className="tools-btn" width="150px" alt="" />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavMobile;
