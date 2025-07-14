import "../styles/navbar.css";
import logo from "/assets/images/logo-banner.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {
  // State variables for each dropdown's open/close status
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md sticky-top shadow">
      <div className="container-md">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item me-3">
                <Link
                  to="/"
                  className="nav-link active ms-3"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <div
                className={`dropdown ${coursesOpen ? "show" : ""}`}
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  className="btn dropdown-toggle me-3 border-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={coursesOpen}
                  onClick={() => setCoursesOpen(!coursesOpen)}
                >
                  Courses
                </button>
                <ul className={`dropdown-menu ${coursesOpen ? "show" : ""}`}>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action one
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action two
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action three
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`dropdown ${pagesOpen ? "show" : ""}`}
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <button
                  className="btn dropdown-toggle me-3 border-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={pagesOpen}
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  Pages
                </button>
                <ul className={`dropdown-menu ${pagesOpen ? "show" : ""}`}>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action one
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action two
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action three
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`dropdown ${blogOpen ? "show" : ""}`}
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
              >
                <button
                  className="btn dropdown-toggle me-3 border-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={blogOpen}
                  onClick={() => setBlogOpen(!blogOpen)}
                >
                  Blog
                </button>
                <ul className={`dropdown-menu ${blogOpen ? "show" : ""}`}>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action one
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action two
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action three
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item me-1 d-grid gap-2">
                <Link
                  to="/signIn"
                  className="btn btn-outline-success"
                  id="login-btn"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item me-1 d-grid gap-2">
                <Link
                  to="/signUp"
                  className="border border-success btn btn-success text-light"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
