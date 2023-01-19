import React from "react";
import "./index.scss";

const HeroSlider = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide slick-slider slick-initialized"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slick-list">
          <div className="carousel-item active" data-bs-interval="3000">
            <div>
              <div
                className="d-flex flex-column gap-0 rowwrapper"
                tabIndex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <p>
                  <b>Earn</b>
                </p>
                <p style={{ fontSize: "13p" }}>
                  Make the most of your assets by embracing LinkDao Earn
                  products.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div>
              <div
                className="d-flex flex-column gap-0 rowwrapper"
                tabIndex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <p>
                  <b>LKD Tools</b>
                </p>
                <p style={{ fontSize: "13p" }}>
                  Advanced analytic tools designed to provide accurate data,
                  news, project support and much more.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div>
              <div
                className="d-flex flex-column gap-0 rowwrapper"
                tabIndex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <p>
                  <b>Recurring Pools</b>
                </p>
                <p style={{ fontSize: "13p" }}>
                  LinkDao platform supports most advanced recurring rewards
                  system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
