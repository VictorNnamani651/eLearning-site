import { useState, useEffect } from "react";
import CourseCard2 from "../components/courseCard2";
import { Search, Grid, List } from "lucide-react";
import Navbar2 from "../components/navbar2";
import logo from "/assets/images/logo-banner.png";
import { API } from "../api/api";
import LoadingScreen from "../components/loading";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import { useNavigate } from "react-router-dom";

const CoursePage2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API.COURSES);
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchCourses();
  }, []);

  const categories = [
    "All",
    "Digital Marketing",
    "Graphic Design",
    "Cloud Computing",
    "Mobile Development",
    "Data Science",
    "Web Development",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="course-listing-page">
      {/* Header */}
      <Navbar2 logo={logo} />
      <div className="bg-white shadow-sm">
        <div className="container py-5">
          <div className="row align-items-center mb-4">
            <div className="col-lg-10">
              <h1 className="display-4 fw-bold mb-2">
                Discover Your Next Skill
              </h1>
              <p className="lead text-muted">
                Choose from our expertly crafted courses to advance your career
              </p>
            </div>
            <div className="col-lg-2 text-end d-none d-md-inline">
              <span style={{ fontSize: "4rem" }}>🚀</span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="position-relative">
                <Search
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control form-control-lg rounded-pill ps-5 shadow-sm"
                  style={{ border: "1px solid #e0e0e0" }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex gap-3 justify-content-lg-end">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select rounded-pill shadow-sm"
                  style={{ maxWidth: "250px" }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <div
                  className="btn-group rounded-pill bg-light p-1"
                  role="group"
                >
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`btn ${
                      viewMode === "grid"
                        ? "btn-light shadow-sm"
                        : "btn-link text-muted"
                    } rounded-pill`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`btn ${
                      viewMode === "list"
                        ? "btn-light shadow-sm"
                        : "btn-link text-muted"
                    } rounded-pill`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container py-5">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h4 fw-bold mb-0">
                {filteredCourses.length} Course
                {filteredCourses.length !== 1 ? "s" : ""} Available
              </h2>
              <small className="text-muted">
                Showing results for "
                {selectedCategory === "All"
                  ? "All Categories"
                  : selectedCategory}
                "
              </small>
            </div>

            <div
              className={`row g-4 ${
                viewMode === "list"
                  ? "row-cols-1"
                  : "row-cols-1 row-cols-md-2 row-cols-lg-3"
              }`}
            >
              {filteredCourses.map((course) => (
                <div key={course.id} className="col">
                  <CourseCard2
                    course={course}
                    key={course.id}
                    event={() => {
                      navigate("/courseDetail");
                    }}
                  />
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && !loading && (
              <div className="text-center py-5">
                <div style={{ fontSize: "4rem" }} className="mb-3">
                  🔍
                </div>
                <h3 className="h4 fw-bold mb-2">No courses found</h3>
                <p className="text-muted">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
      <NewsletterSection />

      <style>{`
        .course-listing-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #FFFFFF 0%, #f5f5f5 50%, #e8e8e8 100%);
        }

        .course-card {
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          background: white;
        }

        .course-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }

        .course-card:hover .course-title {
          color: #DD3333;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(221, 51, 51, 0.1) 0%, rgba(44, 50, 56, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .course-card:hover .card-overlay {
          opacity: 1;
        }

        .gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%);
        }

        .bg-gradient-pink {
          background: linear-gradient(135deg, #DD3333 0%, #2C3238 100%);
        }

        .bg-gradient-purple {
          background: linear-gradient(135deg, #2C3238 0%, #DD3333 100%);
        }

        .bg-gradient-green {
          background: linear-gradient(135deg, #000000 0%, #2C3238 100%);
        }

        .bg-gradient-orange {
          background: linear-gradient(135deg, #DD3333 0%, #000000 100%);
        }

        .bg-gradient-blue {
          background: linear-gradient(135deg, #2C3238 0%, #000000 100%);
        }

        .bg-gradient-teal {
          background: linear-gradient(135deg, #DD3333 0%, #FFFFFF 100%);
        }

        .btn-gradient {
          background: linear-gradient(135deg, #DD3333 0%, #000000 100%);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(221, 51, 51, 0.4);
        }

        .course-title {
          transition: color 0.3s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #DD3333;
          box-shadow: 0 0 0 0.25rem rgba(221, 51, 51, 0.15);
        }

        .btn-link {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default CoursePage2;
