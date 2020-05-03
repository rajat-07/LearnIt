import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import TopMenu from "./components/TopMenu/TopMenu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import $ from "jquery";
import "./App.css";

function App() {

  useEffect(() => {
    navbarFixed();
  }, []);

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var position = $('.header_area').height() + 50;
        if (scroll >= position+50) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }

  return (
    <div className="App">
      <div className="header_area">
        <TopMenu />
        <Navbar />
      </div>
      <Switch className="page-content" id="content">
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
