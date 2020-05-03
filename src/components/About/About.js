import React from "react";
import Video from "../../images/video-1.jpg";
import VideoIcon from "../../images/icon/video-icon-1.png";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import { Parallax } from "react-parallax";
import image1 from "../../images/banner/banner-2.jpg";
import $ from "jquery";
import "./About.css";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function About() {
//   $("#btn-collapseOne");
//   $("#btn-collapseTwo");
//   $("#btn-collapseThree");
//   $("#btn-collapseFour");
//   $("#collapseOne");
//   $("#collapseTwo");
//   $("#collapseThree");
//   $("#collapseFour");

  // success
  const handleSuccess = () => {
    $("*").removeClass("collapsed");
    $("*").removeClass("show");
    $("#btn-collapseTwo").addClass("collapsed");
    $("#btn-collapseThree").addClass("collapsed");
    $("#btn-collapseFour").addClass("collapsed");
    $("#collapseOne").addClass("show");
  };

  // info
  const handleInfo = () => {
    $("*").removeClass("collapsed");
    $("*").removeClass("show");
    $("#btn-collapseOne").addClass("collapsed");
    $("#btn-collapseThree").addClass("collapsed");
    $("#btn-collapseFour").addClass("collapsed");
    $("#collapseTwo").addClass("show");
  };

  // danger
  const handleDanger = () => {
    $("*").removeClass("collapsed");
    $("*").removeClass("show");
    $("#btn-collapseOne").addClass("collapsed");
    $("#btn-collapseTwo").addClass("collapsed");
    $("#btn-collapseFour").addClass("collapsed");
    $("#collapseThree").addClass("show");
  };

  // warning
  const handleWarning = () => {
    $("*").removeClass("collapsed");
    $("*").removeClass("show");
    $("#btn-collapseOne").addClass("collapsed");
    $("#btn-collapseTwo").addClass("collapsed");
    $("#btn-collapseThree").addClass("collapsed");
    $("#collapseFour").addClass("show");
  };

  return (
    <div>
      <section class="banner_area">
        <Parallax bgImage={image1} strength={500} class="banner_area">
          <div class="banner_inner d-flex align-items-center">
            <div
              class="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset="0"
              data-background=""
            ></div>
            <div class="container" style={insideStyles}>
              <div class="banner_content text-center" style={insideStyles}>
                <h2>About Us</h2>
                <div class="page_link">
                  <a href="index.html">Home</a>
                  <a href="about-us.html">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
      <section class="about_area p_120">
        <div class="container">
          <div class="main_title">
            <h2>Goals to Achieve for the leadership</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="row about_inner">
            <div class="col-lg-6">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <button
                      id="btn-collapseOne"
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                    //   data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={handleSuccess}
                    >
                      Success
                      <i class="lnr lnr-chevron-down"></i>
                      <i class="lnr lnr-chevron-up"></i>
                    </button>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    // data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <button
                      id="btn-collapseTwo"
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                    //   data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      onClick={handleInfo}
                    >
                      Info
                      <i class="lnr lnr-chevron-down"></i>
                      <i class="lnr lnr-chevron-up"></i>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    // data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <button
                      id="btn-collapseThree"
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                    //   data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      onClick={handleDanger}
                    >
                      Danger
                      <i class="lnr lnr-chevron-down"></i>
                      <i class="lnr lnr-chevron-up"></i>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    // data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingfour">
                    <button
                      id="btn-collapseFour"
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                    //   data-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                      onClick={handleWarning}
                    >
                      Warning
                      <i class="lnr lnr-chevron-down"></i>
                      <i class="lnr lnr-chevron-up"></i>
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingfour"
                    // data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="video_area" id="video">
                <img class="img-fluid" src={Video} alt="" />
                <a
                  class="popup-youtube"
                  href="https://www.youtube.com/watch?v=VufDd-QL1c0"
                >
                  <img src={VideoIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="about_details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </section>
      <Team />
      <Testimonial />
    </div>
  );
}

export default About;
