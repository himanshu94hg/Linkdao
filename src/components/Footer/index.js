import React from "react";
import "./index.scss";
import Twitter from "../../assets/Social/twitter.svg";
import Telegram from "../../assets/Social/telegram.svg";
import Medium from "../../assets/Social/medium.svg";
import Github from "../../assets/Social/github.svg";
import Gitbook from "../../assets/Social/Gitbook.png";
import Email from "../../assets/Social/email.svg";
import coinMarketCap from "../../assets/Social/coinMarketCap.svg";
import coinGecko from "../../assets/Social/coinGecko.svg";
import disclaimer from "../../assets/Social/disclaimer.svg";
import Logo from "../../assets/LinkdaoNameLogo.svg";
import Accordion from "./Accordion";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-0 footer">
        <div className="socials container-fluid">
          <div className="container-lg socials-container d-grid align-items-center socialWeb">
            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="https://twitter.com/LinkdaoN"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Twitter} alt="" />
                  <p className="mb-0">Twitter</p>
                </div>
              </a>
            </div>
            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="https://t.me/linkdao_network"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Telegram} alt="" />
                  <p className="mb-0">Telegram</p>
                </div>
              </a>
            </div>

            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="https://medium.com/@linkdaonetwork"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Medium} alt="" />
                  <p className="mb-0">Medium</p>
                </div>
              </a>
            </div>

            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="https://github.com/linkdaonetwork"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Github} alt="" />
                  <p className="mb-0">Github</p>
                </div>
              </a>
            </div>
            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="https://linkdao-network.gitbook.io/linkdao"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Gitbook} alt="" />
                  <p className="mb-0">Gitbook</p>
                </div>
              </a>
            </div>
            <div className="col-4 col-lg">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href="mailto:contact@linkdao.network"
              >
                <div
                  className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img src={Email} alt="" />
                  <p className="mb-0">Email</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid px-3 px-lg-5 py-0 footer-links justify-content-center">
          <div className="container-lg d-flex mt-0 mt-lg-4 footer-blocks w-100 position-relative align-items-baseline justify-content-between py-4 py-lg-1">
            {window.innerWidth < 768 ? (
              <Accordion />
            ) : (
              <>
                <a href="/">
                  <img src={Logo} alt="" width="160" height="90" />
                </a>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">About Us</h4>

                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Our partners</h5>
                  </a>

                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Roadmap</h5>
                  </a>
                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Security</h5>
                  </a>
                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Tokenomics</h5>
                  </a>
                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Contact us</h5>
                  </a>
                </div>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">Solutions</h4>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none footer-type-link"
                  >
                    <h5>Earn</h5>
                  </a>
                  <a
                    href="https://app.linkdao.network/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none footer-type-link"
                  >
                    <h5>LKD Tools</h5>
                  </a>

                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>Buy LKD</h5>
                  </a>
                  <a
                    className="text-white text-decoration-none footer-type-link"
                    href="/"
                  >
                    <h5>LKD Token</h5>
                  </a>
                </div>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">Learn</h4>
                  <div className="d-flex flex-column gap-3">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>How to buy LKD</h5>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>How to Stake</h5>
                    </a>
                    {/* <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none footer-type-link"
                  >
                    <h5>How to Farm</h5>
                  </a> */}
                  </div>
                  <div
                    className="d-flex flex-row gap-3 position-relative"
                    style={{ bottom: "-90px" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://coinmarketcap.com/currencies/linkdao-network/"
                    >
                      <img src={coinMarketCap} alt="" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.coingecko.com/en/coins/linkdao"
                    >
                      <img src={coinGecko} alt="" />
                    </a>
                    <a href="/">
                      <img src={disclaimer} alt="" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          <hr className="d-none d-lg-block" />
          <div className="row w-100 justify-content-center align-items-center py-3 m-0">
            <p
              className="mb-0 text-white fw-light"
              style={{ fontSize: "12px" }}
            >
              Copyright © Linkdao 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
