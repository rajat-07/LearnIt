import React from "react";
import course1 from '../../images/courses/course-1.jpg';
import course2 from '../../images/courses/course-2.jpg';
import course3 from '../../images/courses/course-3.jpg';
import course4 from '../../images/courses/course-4.jpg';
import course5 from '../../images/courses/course-5.jpg';
import "./Course.css";

function Course() {
  return (
    <section class="courses_area p_120">
      <div class="container">
        <div class="main_title">
          <h2>Popular Free Courses</h2>
          <p>
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station.
          </p>
        </div>
        <div class="row courses_inner">
          <div class="col-lg-9">
            <div class="grid_inner">
              <div class="grid_item wd55">
                <div class="courses_item">
                  <img src={course1} alt="" />
                  <div class="hover_text">
                    <a class="cat" href="#">
                      Free
                    </a>
                    <a href="#">
                      <h4>Japanease Language Class</h4>
                    </a>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="lnr lnr-users"></i> 355
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-bubble"></i> 35
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-user"></i> T. Robert
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="grid_item wd44">
                <div class="courses_item">
                  <img src={course2} alt="" />
                  <div class="hover_text">
                    <a class="cat" href="#">
                      Free
                    </a>
                    <a href="#">
                      <h4>Japanease Language Class</h4>
                    </a>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="lnr lnr-users"></i> 355
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-bubble"></i> 35
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-user"></i> T. Robert
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="grid_item wd44">
                <div class="courses_item">
                  <img src={course4} alt="" />
                  <div class="hover_text">
                    <a class="cat" href="#">
                      Free
                    </a>
                    <a href="#">
                      <h4>Japanease Language Class</h4>
                    </a>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="lnr lnr-users"></i> 355
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-bubble"></i> 35
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-user"></i> T. Robert
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="grid_item wd55">
                <div class="courses_item">
                  <img src={course5} alt="" />
                  <div class="hover_text">
                    <a class="cat" href="#">
                      Free
                    </a>
                    <a href="#">
                      <h4>Japanease Language Class</h4>
                    </a>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="lnr lnr-users"></i> 355
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-bubble"></i> 35
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lnr lnr-user"></i> T. Robert
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="course_item">
              <img src={course3} alt="" />
              <div class="hover_text">
                <a class="cat" href="#">
                  Free
                </a>
                <a href="#">
                  <h4>Japanease Language Class</h4>
                </a>
                <ul class="list">
                  <li>
                    <a href="#">
                      <i class="lnr lnr-users"></i> 355
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lnr lnr-bubble"></i> 35
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lnr lnr-user"></i> T. Robert
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
