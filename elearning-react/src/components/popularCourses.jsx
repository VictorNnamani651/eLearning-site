import CourseCard from "./courseCard";
import { popularCoursesData } from "../db";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  return (
    <section className="popular-courses">
      <div className="container-md">
        <div className="header">
          <div className="texts">
            <h3>Popular Courses</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur!
            </p>
          </div>
          <button className="browse-all-courses">
            <Link to="/">
              Browse All Courses<i className="fa fa-angle-double-right"></i>
            </Link>
          </button>
        </div>

        {/* COURSE CARD CONTAINER */}
        <div className="course-card-container">
          {/* FOR LARGER SCREENS */}
          <div
            className="row d-none d-md-flex gap-2"
            id="course-view-for-lg-screens"
          >
            {popularCoursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* POPULAR COURSES CARDS CAROUSEL FOR MOBILE VIEW */}
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide d-md-none"
          >
            <div className="carousel-indicators top-100">
              {popularCoursesData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={index}
                  className={
                    index === 0
                      ? "active rounded rounded-circle"
                      : "rounded rounded-circle"
                  }
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {popularCoursesData.map((course, index) => (
                <div
                  key={course.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval={index === 1 ? "2000" : "10000"}
                >
                  {/* Note: I'm using a small optimization to reuse the CourseCard component here
                      by wrapping it in a carousel-specific div. */}
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
