import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useState } from "react";

const CourseCard = ({ course, columnClass }) => {
  // the code below is for hover effect
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // Conditionally apply the Bootstrap classes for the button based on hover state
  const buttonClass = isHovered ? "btn btn-danger" : "btn btn-outline-danger";
  const shadowClass = isHovered ? "cardShadow" : "shadow-sm;";
  return (
    // h-100 ensures cards in a Row stretch to equal height
    <Card
      className={`h-100 ${shadowClass} ${columnClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card.Img for the image */}
      <Card.Img variant="top" className="courseCardImg p-0" src={course.imageSrc} alt={course.title} />
      {/* Card.Body for the content area */}
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>{" "}
        {/* Card.Title for the heading */}
        <Card.Text className="text-muted">
          {/* Card.Text for paragraph content */}
          {course.description}
        </Card.Text>
      </Card.Body>
      {/* Card.Footer for bottom content like buttons */}
      <Card.Footer className="bg-white border-0">
        <Link to="/" className={`${buttonClass} course-card-btn`}>
          View Course
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
