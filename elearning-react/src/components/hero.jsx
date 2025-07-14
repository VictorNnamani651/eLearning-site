import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="container-md" id="content-container">
        <div className="centered-content">
          <div className="texts">
            <h1 className="animate__animated animate__zoomIn">
              Education With Greater Convenience
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              deserunt.
            </p>
          </div>
          <div className="buttons-container">
            <Link
              to="/signUp"
              className="btn btn-danger col-6 col-md-4 mx-auto animate__animated animate__fadeInUp start-trial-btn"
            >
              Start Free Trial
            </Link>
            <Link
              to="/signUp"
              className="btn btn-outline-light col-6 col-md-4 mx-auto animate__animated animate__fadeInUp browse-courses-btn"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
