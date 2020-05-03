import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import $ from "jquery";
import "./Navbar.css";

function Navbar() {
  let history = useHistory();

  useEffect(() => {
    history.push(`/home`);
  }, []);

  const handleHome = () => {
    history.push("./home");
    $("*").removeClass("active");
    $(".nav-home").addClass("active");
  };

  const handleAbout = () => {
    history.push("./about");
    $("*").removeClass("active");
    $(".nav-about").addClass("active");
  };

  return (
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand logo_h" href="index.html">
              <img src={logo} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item nav-home active">
                  <a onClick={handleHome} class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item nav-about">
                  <a onClick={handleAbout} class="nav-link nav-about">
                    About
                  </a>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="courses.html">
                        Courses
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="course-details.html">
                        Course Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="elements.html">
                        Elements
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="single-blog.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
