import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Bell,
  User,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar2 = ({ logo, style }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  //  amount of spacer for the Spacer div, this is to prevent content from going under fixed navbar
  const defaultSpace = { height: "50px" };
  // this will make the space below the navabar to have a default value of 80px but when another height is added, due to placement order of the styles the newly added height becomes the height that will be used
  const customSpace = { ...defaultSpace, ...style };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For demo purposes - replace with your actual logo
  const logoSrc =
    logo ||
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect fill="%23DD3333" width="40" height="40" rx="8"/%3E%3Ctext x="20" y="26" font-size="20" text-anchor="middle" fill="white"%3E📚%3C/text%3E%3C/svg%3E';

  // Dropdown close delay timers
  const [coursesTimer, setCoursesTimer] = useState(null);
  const [pagesTimer, setPagesTimer] = useState(null);
  const [blogTimer, setBlogTimer] = useState(null);

  // Helper functions for delayed close
  const handleDropdownEnter = (setOpen, timer, setTimer) => {
    if (timer) clearTimeout(timer);
    setOpen(true);
  };
  const handleDropdownLeave = (setOpen, setTimer) => {
    const t = setTimeout(() => setOpen(false), 200); // 200ms delay
    setTimer(t);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container-md">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-lg-center">
                {/* Home */}
                <li className="nav-item me-3">
                  <Link
                    to="/"
                    className="nav-link active ms-3"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                {/* Courses Dropdown */}
                <div
                  className={`dropdown ${coursesOpen ? "show" : ""}`}
                  onMouseEnter={() =>
                    handleDropdownEnter(
                      setCoursesOpen,
                      coursesTimer,
                      setCoursesTimer
                    )
                  }
                  onMouseLeave={() =>
                    handleDropdownLeave(setCoursesOpen, setCoursesTimer)
                  }
                >
                  <button
                    className="btn dropdown-toggle me-3 nav-dropdown-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={coursesOpen}
                    onClick={() => setCoursesOpen(!coursesOpen)}
                  >
                    Courses
                  </button>
                  <ul
                    className={`dropdown-menu custom-dropdown ${
                      coursesOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/coursePage" className="dropdown-item">
                        All Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Graphic Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Cloud Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Web Development
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Pages Dropdown */}
                <div
                  className={`dropdown ${pagesOpen ? "show" : ""}`}
                  onMouseEnter={() =>
                    handleDropdownEnter(setPagesOpen, pagesTimer, setPagesTimer)
                  }
                  onMouseLeave={() =>
                    handleDropdownLeave(setPagesOpen, setPagesTimer)
                  }
                >
                  <button
                    className="btn dropdown-toggle me-3 nav-dropdown-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={pagesOpen}
                    onClick={() => setPagesOpen(!pagesOpen)}
                  >
                    Pages
                  </button>
                  <ul
                    className={`dropdown-menu custom-dropdown ${
                      pagesOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Blog Dropdown */}
                <div
                  className={`dropdown ${blogOpen ? "show" : ""}`}
                  onMouseEnter={() =>
                    handleDropdownEnter(setBlogOpen, blogTimer, setBlogTimer)
                  }
                  onMouseLeave={() =>
                    handleDropdownLeave(setBlogOpen, setBlogTimer)
                  }
                >
                  <button
                    className="btn dropdown-toggle me-3 nav-dropdown-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen(!blogOpen)}
                  >
                    Blog
                  </button>
                  <ul
                    className={`dropdown-menu custom-dropdown ${
                      blogOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Recent Posts
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Author
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Search Bar - Desktop Only */}
                <li className="nav-item me-3 d-none d-lg-block">
                  <div
                    className={`search-container ${
                      searchFocused ? "search-focused" : ""
                    }`}
                  >
                    <Search size={18} className="search-icon" />
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search courses..."
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                  </div>
                </li>

                {/* Notifications - Desktop Only */}
                <li className="nav-item me-3 d-none d-lg-block">
                  <div className="nav-icon-wrapper position-relative">
                    <Bell size={20} className="nav-icon" />
                    <span className="notification-badge">3</span>
                  </div>
                </li>

                {/* Sign In Button */}
                <li className="nav-item me-2 d-grid gap-2">
                  <Link
                    to="/signIn"
                    className="btn btn-outline-custom"
                    id="login-btn"
                  >
                    Sign In
                  </Link>
                </li>

                {/* Sign Up Button */}
                <li className="nav-item me-1 d-grid gap-2">
                  <Link to="/signUp" className="btn btn-primary-custom">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div style={customSpace}></div>

      <style>{`
        /* Navbar Base Styles */
        .navbar {
          background: #FFFFFF;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .navbar-scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Logo Styles */
        .navbar-logo {
          
          width: auto;
          transition: transform 0.3s ease;
        }

        .navbar-brand:hover .navbar-logo {
          transform: scale(1.05);
        }

        /* Navigation Links */
        .nav-link {
          color: #2C3238 !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #61BA5F;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #61BA5F !important;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }

        /* Dropdown Button Styles */
        .nav-dropdown-btn {
          color: #2C3238;
          font-weight: 500;
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .nav-dropdown-btn:hover,
        .nav-dropdown-btn:focus {
          color: #61BA5F;
          background: rgba(97, 186, 95, 0.05);
          border-color: rgba(97, 186, 95, 0.2);
        }

        /* Dropdown Menu Styles */
        .custom-dropdown {
          border: none;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 0.5rem 0;
          margin-top: 0.5rem;
          min-width: 200px;
        }

        .dropdown-item {
          padding: 0.75rem 1.5rem;
          transition: all 0.2s ease;
          color: #2C3238;
        }

        .dropdown-item:hover {
          background: rgba(97, 186, 95, 0.1);
          color: #61BA5F;
          transform: translateX(5px);
        }

        /* Search Bar */
        .search-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: #2C3238;
          transition: color 0.3s ease;
          z-index: 1;
        }

        .search-input {
          border: 2px solid #e8e8e8;
          border-radius: 25px;
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          width: 200px;
          transition: all 0.3s ease;
          background: #FFFFFF;
        }

        .search-input:focus {
          outline: none;
          border-color: #61BA5F;
          width: 250px;
          box-shadow: 0 0 0 3px rgba(97, 186, 95, 0.1);
        }

        .search-focused .search-icon {
          color: #61BA5F;
        }

        /* Navigation Icons */
        .nav-icon-wrapper {
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .nav-icon-wrapper:hover {
          background: rgba(97, 186, 95, 0.1);
        }

        .nav-icon {
          color: #2C3238;
          transition: color 0.3s ease;
        }

        .nav-icon-wrapper:hover .nav-icon {
          color: #61BA5F;
        }

        .notification-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: #61BA5F;
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }

        /* Buttons */
        .btn-outline-custom {
          border: 2px solid #2C3238;
          color: #2C3238;
          border-radius: 25px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-outline-custom:hover {
          background: #2C3238;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(44, 50, 56, 0.3);
        }

        .btn-primary-custom {
          background: #61BA5F;
          color: white;
          border: none;
          border-radius: 25px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(97, 186, 95, 0.4);
        }

        /* Mobile Offcanvas Styles */
        .offcanvas {
          background: #FFFFFF;
        }

        .offcanvas-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .btn-close {
          filter: brightness(0);
        }

        /* Mobile Menu Toggler */
        .navbar-toggler {
          border: 2px solid #e8e8e8;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.25rem rgba(221, 51, 51, 0.15);
          border-color: #DD3333;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%232C3238' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        /* Responsive Styles */
        @media (max-width: 991px) {
          .nav-link::after {
            display: none;
          }

          .dropdown {
            width: 100%;
            margin-bottom: 0.5rem;
          }

          .nav-dropdown-btn {
            width: 100%;
            text-align: left;
            border: 1px solid #e8e8e8;
            border-radius: 8px;
            padding: 0.75rem 1rem;
          }

          .custom-dropdown {
            width: 100%;
            position: static !important;
            transform: none !important;
            margin-top: 0.5rem;
            box-shadow: none;
            border: 1px solid #e8e8e8;
          }

          .nav-item {
            margin-bottom: 0.5rem;
          }

          .btn-outline-custom,
          .btn-primary-custom {
            width: 100%;
          }
        }

        @media (min-width: 992px) {
          .dropdown {
            position: relative;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar2;
