import React from "react";
import Team from "../Team/Team";
import Course from "../Course/Course";
import Testimonial from "../Testimonial/Testimonial";
import Package from "../Package/Package";
import Blog from "../Blog/Blog";
import Impress from "../Impress/Impress";
import { Parallax } from "react-parallax";
import image1 from "../../images/banner/home-banner.jpg";
import "bootstrap";
import "./Home.css";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function Home() {

  return (
    <div>
      <section class="home_banner_area">
        <Parallax bgImage={image1} strength={500} class="home_banner_area">
          <div class="banner_inner d-flex align-items-center">
            <div
              class="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset="0"
              data-background=""
            ></div>
            <div class="container" style={insideStyles}>
              <div class="banner_content text-center">
                <h3>
                  We Ensure better education <br />
                  for a better world
                </h3>
                <p>
                  In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble.
                </p>
                <a class="main_btn" href="#">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      <section class="finance_area">
        <div class="container">
          <div class="finance_inner row">
            <div class="col-lg-3 col-sm-6">
              <div class="finance_item">
                <div class="media">
                  <div class="d-flex">
                    <i class="lnr lnr-rocket"></i>
                  </div>
                  <div class="media-body">
                    <h5>
                      Science & <br />
                      Engineering
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="finance_item">
                <div class="media">
                  <div class="d-flex">
                    <i class="lnr lnr-earth"></i>
                  </div>
                  <div class="media-body">
                    <h5>
                      Science & <br />
                      Engineering
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="finance_item">
                <div class="media">
                  <div class="d-flex">
                    <i class="lnr lnr-smile"></i>
                  </div>
                  <div class="media-body">
                    <h5>
                      Science & <br />
                      Engineering
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="finance_item">
                <div class="media">
                  <div class="d-flex">
                    <i class="lnr lnr-tag"></i>
                  </div>
                  <div class="media-body">
                    <h5>
                      Science & <br />
                      Engineering
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Course />
      <Team />
      <Testimonial />
      <Package />
      <Blog />
      <Impress />
    </div>
  );
}

export default Home;
