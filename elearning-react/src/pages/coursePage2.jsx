import { useState } from "react";
import CourseCard2 from "../components/courseCard2";
import { Search, Grid, List } from "lucide-react";
import Navbar2 from "../components/navbar2";
import logo from "/assets/images/logo-banner.png";

// const CourseCard = ({ course, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="course-card card h-100 border-0 shadow-lg"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
//         transform: isHovered
//           ? "translateY(-10px) scale(1.02)"
//           : "translateY(0) scale(1)",
//         transition: "all 0.5s ease",
//       }}
//     >
//       <div
//         className={`card-img-top position-relative ${course.bgClass}`}
//         style={{ height: "200px" }}
//       >
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100"
//           style={{ background: "rgba(0,0,0,0.1)" }}
//         ></div>
//         <div className="position-absolute top-0 end-0 p-3">
//           <span className="badge bg-white text-dark fw-semibold">
//             {course.level}
//           </span>
//         </div>
//         <div className="position-absolute bottom-0 start-0 p-3">
//           <h2 className="text-white fw-bold mb-0" style={{ fontSize: "2rem" }}>
//             {course.icon} {course.category}
//           </h2>
//         </div>
//         <div className="gradient-overlay"></div>
//       </div>

//       <div className="card-body p-4">
//         <h5 className="card-title fw-bold mb-3 course-title">{course.title}</h5>
//         <p className="card-text text-muted small mb-3">{course.description}</p>

//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div className="d-flex gap-3">
//             <small className="text-muted d-flex align-items-center">
//               <Clock size={16} className="me-1" />
//               {course.duration}
//             </small>
//             <small className="text-muted d-flex align-items-center">
//               <Users size={16} className="me-1" />
//               {course.students}
//             </small>
//           </div>
//           <div className="d-flex align-items-center">
//             <Star size={16} className="text-warning" fill="currentColor" />
//             <small className="text-muted ms-1">{course.rating}</small>
//           </div>
//         </div>

//         <div className="d-flex justify-content-between align-items-center">
//           <div className="h4 mb-0 fw-bold">
//             {course.price === "Free" ? (
//               <span className="text-success">Free</span>
//             ) : (
//               <span className="text-dark">${course.price}</span>
//             )}
//           </div>
//           <button className="btn btn-gradient text-white fw-semibold px-4 rounded-pill">
//             View Course
//           </button>
//         </div>
//       </div>

//       <div className="card-overlay"></div>
//     </div>
//   );
// };

const CoursePage2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      description:
        "Master the essentials of digital marketing, including SEO, social media, and content strategy with hands-on projects.",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: "1.2k",
      rating: "4.8",
      price: "99",
      bgClass: "bg-gradient-pink",
      icon: "📱",
    },
    {
      id: 2,
      title: "Introduction to Graphic Design",
      description:
        "Learn visual communication and design tools like Adobe Photoshop and Illustrator from industry professionals.",
      category: "Graphic Design",
      level: "Beginner",
      duration: "8 weeks",
      students: "890",
      rating: "4.7",
      price: "129",
      bgClass: "bg-gradient-purple",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Cloud Computing Basics (AWS)",
      description:
        "An introductory course to cloud computing concepts and Amazon Web Services (AWS) fundamentals.",
      category: "Cloud Computing",
      level: "Intermediate",
      duration: "10 weeks",
      students: "756",
      rating: "4.9",
      price: "199",
      bgClass: "bg-gradient-green",
      icon: "☁️",
    },
    {
      id: 4,
      title: "Mobile App Development (Android)",
      description:
        "Build your first Android applications using Java/Kotlin and the Android Studio IDE.",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "12 weeks",
      students: "632",
      rating: "4.6",
      price: "249",
      bgClass: "bg-gradient-orange",
      icon: "📱",
    },
    {
      id: 5,
      title: "Data Science with Python",
      description:
        "Explore data analysis, visualization, and machine learning using Python and popular libraries.",
      category: "Data Science",
      level: "Advanced",
      duration: "16 weeks",
      students: "1.5k",
      rating: "4.9",
      price: "299",
      bgClass: "bg-gradient-blue",
      icon: "📊",
    },
    {
      id: 6,
      title: "Full-Stack Web Development",
      description:
        "Complete web development bootcamp covering frontend, backend, and database technologies.",
      category: "Web Development",
      level: "Intermediate",
      duration: "20 weeks",
      students: "2.1k",
      rating: "4.8",
      price: "Free",
      bgClass: "bg-gradient-teal",
      icon: "💻",
    },
  ];

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
                Discover Your Next <span className="text-gradient">Skill</span>
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
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold mb-0">
            {filteredCourses.length} Course
            {filteredCourses.length !== 1 ? "s" : ""} Available
          </h2>
          <small className="text-muted">
            Showing results for "
            {selectedCategory === "All" ? "All Categories" : selectedCategory}"
          </small>
        </div>

        <div
          className={`row g-4 ${
            viewMode === "list"
              ? "row-cols-1"
              : "row-cols-1 row-cols-md-2 row-cols-lg-3"
          }`}
        >
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="col">
              <CourseCard2 course={course} index={index} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
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
      </div>

      <style>{`
        .course-listing-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #FFFFFF 0%, #f5f5f5 50%, #e8e8e8 100%);
        }

        .text-gradient {
          background: linear-gradient(135deg, #DD3333 0%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
