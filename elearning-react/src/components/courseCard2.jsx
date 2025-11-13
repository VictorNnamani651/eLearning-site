import { useState } from "react";
import { Star, Clock, Users } from "lucide-react";

const CourseCard2 = ({ course, index, event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="course-card card h-100 border-0 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick ={event}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        transform: isHovered
          ? "translateY(-10px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.5s ease",
      }}
    >
      <div
        className={`card-img-top position-relative ${course.bgClass}`}
        style={{ height: "200px" }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.1)" }}
        ></div>
        <div className="position-absolute top-0 end-0 p-3">
          <span className="badge bg-white text-dark fw-semibold">
            {course.level}
          </span>
        </div>
        <div className="position-absolute bottom-0 start-0 p-3">
          <h2 className="text-white fw-bold mb-0" style={{ fontSize: "2rem" }}>
            {course.icon} {course.category}
          </h2>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-3 course-title">{course.title}</h5>
        <p className="card-text text-muted small mb-3">{course.description}</p>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-3">
            <small className="text-muted d-flex align-items-center">
              <Clock size={16} className="me-1" />
              {course.duration}
            </small>
            <small className="text-muted d-flex align-items-center">
              <Users size={16} className="me-1" />
              {course.students}
            </small>
          </div>
          <div className="d-flex align-items-center">
            <Star size={16} className="text-warning" fill="currentColor" />
            <small className="text-muted ms-1">{course.rating}</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="h4 mb-0 fw-bold">
            {course.price === "Free" ? (
              <span className="text-success">Free</span>
            ) : (
              <span className="text-dark">${course.price}</span>
            )}
          </div>
          <button className="btn btn-gradient text-white fw-semibold px-4 rounded-pill">
            View Course
          </button>
        </div>
      </div>

      <div className="card-overlay"></div>
    </div>
  );
};

export default CourseCard2;
