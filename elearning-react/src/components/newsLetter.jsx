import { Link } from "react-router-dom";

const NewsletterSection = () => {
  return (
    <div
      className="contact d-flex justify-content-center align-items-center"
      id="news-letter"
    >
      <div className="centered-content">
        <h1>Subscribe to our news letter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptate aperiam odio quis modi alias.
        </p>
        <div className="mt-3 contact-search-bar-container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger px-4 py-2 fw-semibold"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-media mt-5">
          <Link to="/">
            <i className="bi bi-facebook"></i>
          </Link>

          <Link to="/">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-pinterest"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-youtube"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
