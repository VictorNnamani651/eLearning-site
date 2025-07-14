import { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  // The original JS functions are replaced with React's event handlers and state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Conditionally apply the Bootstrap classes for the button based on hover state
  const buttonClass = isHovered ? "btn btn-danger" : "btn btn-outline-danger";

  return (
    <div
      className="card course-card col p-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={course.imageSrc} className="card-img-top" alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <Link to="/" className={`${buttonClass} course-card-btn`}>
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
