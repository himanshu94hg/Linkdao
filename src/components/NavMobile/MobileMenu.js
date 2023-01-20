import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import launchapp from "../../assets/launchapp.svg";

const MobileMenu = () => {
  return (
    <div
      id="bgmenu"
      className="bg-white d-flex flex-column d-lg-none d-xl-none justify-content-start align-items-center py-3 links menu openMenu"
      style={{ pointerEents: "auto" }}
    >
      <ul className="w-100 px-0 ulNav">
        <li className="mobile-navlink m-0 p-4">
          <a
            className="text-decoration-none d-flex justify-content-between align-items-center"
            href="/"
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
          >
            Documents
            <IoIosArrowForward />
          </a>
        </li>

        <li className="mobile-navlink m-0 p-4">
          <a
            className="text-decoration-none d-flex justify-content-between align-items-center"
            href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
            target="_blank"
            rel="noreferrer"
          >
            Support
            <IoIosArrowForward />
          </a>
        </li>

        <li className="mobile-navlink m-0 p-4">
          <a
            className="text-decoration-none d-flex justify-content-between align-items-center"
            href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
            target="_blank"
            rel="noreferrer"
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
        >
          <img src={launchapp} className="tools-btn" width="200px" alt="" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
