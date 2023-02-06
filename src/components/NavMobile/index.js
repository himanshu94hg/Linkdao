import React, { useState } from "react";
import "./index.scss";
import Hamburger from "hamburger-react";
import Logo from "../../assets/LinkdaoNameLogo.svg";
import MobileMenu from "./MobileMenu";

const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  /* window.onclick = () => {
    setOpenMenu(false);
  }; */

  //   document.addEventListener("mousedown", toggleMenu);

  return (
    <>
      <div className="container-fluid mobile-navbar white-navbar py-3 d-flex justify-content-between align-items-center d-lg-none ">
        <a aria-current="page" className="active" href="/">
          <img src={Logo} width="130" alt="" />
        </a>
        <Hamburger className="hamburgermenu" onToggle={toggleMenu} />
      </div>
      {openMenu ? <MobileMenu /> : null}
    </>
  );
};

export default NavMobile;
