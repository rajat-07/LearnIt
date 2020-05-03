import React from "react";
import "./Package.css";

function Package() {
  return (
    <section class="packages_area p_120">
      <div class="container">
        <div class="row packages_inner">
          <div class="col-lg-4">
            <div class="packages_text">
              <h3>
                Choose <br />
                Course Packages
              </h3>
              <p>
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first telescope. It’s exciting to think
                about setting up your own viewing station.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="packages_item">
              <div class="pack_head">
                <i class="lnr lnr-graduation-hat"></i>
                <h3>Premium</h3>
                <p>For the individuals</p>
              </div>
              <div class="pack_body">
                <ul class="list">
                  <li>
                    <a href="#">Secure Online Transfer</a>
                  </li>
                  <li>
                    <a href="#">Unlimited Styles for interface</a>
                  </li>
                  <li>
                    <a href="#">Reliable Customer Service</a>
                  </li>
                </ul>
              </div>
              <div class="pack_footer">
                <h4>£399.00</h4>
                <a class="main_btn" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="packages_item">
              <div class="pack_head">
                <i class="lnr lnr-diamond"></i>
                <h3>Exclusive</h3>
                <p>For the individuals</p>
              </div>
              <div class="pack_body">
                <ul class="list">
                  <li>
                    <a href="#">Secure Online Transfer</a>
                  </li>
                  <li>
                    <a href="#">Unlimited Styles for interface</a>
                  </li>
                  <li>
                    <a href="#">Reliable Customer Service</a>
                  </li>
                </ul>
              </div>
              <div class="pack_footer">
                <h4>£399.00</h4>
                <a class="main_btn" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;
