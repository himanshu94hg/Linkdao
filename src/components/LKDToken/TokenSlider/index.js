import React from "react";
import "../../Home/HeroSlider/index.scss";
import Farm from "../../../assets/Farm.svg";
import Pool from "../../../assets/Pool.svg";

const TokenSlider = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide slick-list"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div> */}
        <div className="carousel-inner slick-track">
          <div
            className="carousel-item active slick-slide"
            data-bs-interval="2000"
          >
            <div>
              <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
                <div className="card-line"></div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p
                        className="text-secondary mb-0"
                        style={{ fontSize: "12px", fontWeight: "400" }}
                      >
                        LKD Pool
                      </p>
                      <div className="d-flex align-items-center pt-1 gap-1">
                        <h4 className="mb-0">36%</h4>
                        <h5 className="mb-0">APR</h5>
                      </div>
                    </div>
                    <img
                      src={Farm}
                      alt=""
                      style={{ width: "57px", height: "57px" }}
                    />
                  </div>
                  <p
                    className="mb-0 pt-1 text-secondary"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Earn fixed rewards by securely depositing your assets into
                    the recurring smart contract
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div>
              <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
                <div className="card-line"></div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p
                        className="text-secondary mb-0"
                        style={{ fontSize: "12px", fontWeight: "400" }}
                      >
                        LKD Pool
                      </p>
                      <div className="d-flex align-items-center pt-1 gap-1">
                        <h4 className="mb-0">24%</h4>
                        <h5 className="mb-0">APR</h5>
                      </div>
                    </div>
                    <img
                      src={Pool}
                      alt=""
                      style={{ width: "57px", height: "57px" }}
                    />
                  </div>
                  <p
                    className="mb-0 pt-1 text-secondary"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Earn fixed rewards by securely depositing your assets into
                    the recurring smart contract
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenSlider;
