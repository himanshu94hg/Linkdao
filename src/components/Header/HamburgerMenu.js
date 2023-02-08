import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import lkdLogo from "../../assets/LinkdaoNameLogo.svg";
import lkdLogoPurple from "../../assets/sLinkdaoNameLogo.svg";
import mobileNavArrow from "../../assets/mobileNavArrow.svg";
import toolsBtn from "../../assets/launchapp.svg";
import "./header.scss";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState(false);
  const [metaverse, setMetaverse] = useState(false);

  const showNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 300) {
        setShow(false);
      } else {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }

    setLastScrollY(window.scrollY);

    if (
      window.location.href.includes("lkd") &&
      !window.location.href.includes("lkd")
    ) {
      if (window.scrollY >= 500) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    } else if (
      window.location.href.includes("about") ||
      window.location.href.includes("disclaimer") ||
      window.location.href.includes("governance") ||
      window.location.href.includes("support") ||
      window.location.href.includes("news") ||
      window.location.href.includes("buylkd")
    ) {
      setLogo(true);
    } else {
      if (window.scrollY >= 800) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    }
  };

  const bgmenu = document.querySelector("#bgmenu");
  const hamburger = document.querySelector("#hamburgermenu");
  const html = document.querySelector("html");
  const metaverseModalIndicator = document.querySelector(
    ".metaverse-modal-wrapper"
  );

  useEffect(() => {
    if (openMenu === true || metaverse === true) {
      html.classList.add("hidescroll");
      bgmenu.style.pointerEvents = "auto";
      metaverseModalIndicator.style.pointerEvents = "auto";
      hamburger.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove("hidescroll");
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showNavbar);
      window.addEventListener("click", showNavbar);
    }

    return () => {
      window.removeEventListener("scroll", showNavbar);
      window.removeEventListener("click", showNavbar);
    };
  });

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenMenu(false);
        }}
      >
        <>
          <div
            className={`container-fluid mobile-navbar ${
              logo && "white-navbar"
            } py-3 d-flex justify-content-between align-items-center d-lg-none ${
              show ? "hide-nav" : ""
            }`}
          >
            <NavLink to="/">
              <img src={logo ? lkdLogoPurple : lkdLogo} alt="" width={130} />
            </NavLink>
            <div
              id="hamburgermenu"
              className={`d-block ${
                logo && "white-burger"
              } d-lg-none d-xl-none ${openMenu && "hamburgermenu open"}`}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            id="bgmenu"
            className={`bg-white d-flex flex-column d-lg-none d-xl-none justify-content-start align-items-center py-3 links menu ${
              openMenu === true && "openMenu"
            }`}
          >
            <ul className="w-100 px-0">
              <li className="mobile-navlink m-0 p-4">
                <a
                  className="text-decoration-none d-flex justify-content-between align-items-center"
                  href="https://linkdao-network.gitbook.io/linkdao/introduction/lets-get-started"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  LKD
                  <img src={mobileNavArrow} alt="" />
                </a>
              </li>
              <hr className="mobile-hr" />
              <li className="mobile-navlink m-0 p-4">
                <a
                  className="text-decoration-none d-flex justify-content-between align-items-center"
                  href="https://linkdao-network.gitbook.io/linkdao/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documents <img src={mobileNavArrow} alt="" />
                </a>
              </li>
              <hr className="mobile-hr" />
              <li className="mobile-navlink m-0 p-4">
                <NavLink
                  className="text-decoration-none d-flex justify-content-between align-items-center"
                  to="/BuyLKD"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  Buy LKD
                  <img src={mobileNavArrow} alt="" />
                </NavLink>
              </li>
              <hr className="mobile-hr" />
              <li className="mobile-navlink m-0 p-4">
                <a
                  className="text-decoration-none d-flex justify-content-between align-items-center"
                  href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  Contact
                  <img src={mobileNavArrow} alt="" />
                </a>
              </li>
              <hr className="mobile-hr" />
            </ul>
            <div className="col-12 d-flex justify-content-center position-relative">
              <a
                className="d-flex text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://app.linkdao.network/"
              >
                <img src={toolsBtn} className="tools-btn" alt="" width={150} />
              </a>
            </div>
          </div>
        </>
      </OutsideClickHandler>
      <OutsideClickHandler onOutsideClick={() => setMetaverse(false)}>
        <div
          className={`metaverse-modal-wrapper ${
            metaverse && "metaverse-active"
          } flex-column p-5 d-flex gap-3 align-items-center justify-content-center`}
        >
          <img
            src="{xMark}"
            alt=""
            className="x-mark"
            onClick={() => setMetaverse(false)}
          />
          <img src="{metaverseModal}" alt="" className="metaverse-title" />
          <img
            src="{commingSoon}"
            alt=""
            width={400}
            className="comming-soon"
          />
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default HamburgerMenu;
