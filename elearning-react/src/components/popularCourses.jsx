import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseCard from "./courseCard";
import { API } from "../api/api";

const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  // State to track if the view is considered "mobile" (smaller than Bootstrap's 'md' breakpoint of 768px)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update the view state on window resize
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
  useEffect(() => {
    const fetchPopularCourses = async () => {
      try {
        const res = await fetch(API.POPULAR_COURSES);
        const data = await res.json();
        setPopularCourses(data);
      } catch (err) {
        console.error("Failed to fetch popular courses:", err);
      }
    };

    fetchPopularCourses();
  }, []);
  return (
    // Use React Bootstrap Container for overall page width and responsiveness
    <Container as="section" fluid="md" className="popular-courses py-5">
      {/* Header Section: Using React Bootstrap Row and Col for layout, Button for action */}
      <Row className="align-items-center mb-4 text-center text-md-start">
        <Col md={8}>
          {" "}
          {/* Occupy 8 columns on medium screens and up */}
          <h3>Popular Courses</h3>
          <p className="text-muted">
            Explore our most sought-after courses designed to boost your skills
            and career.
          </p>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          {" "}
          {/* Occupy 4 columns, right-aligned on medium and up */}
          {/* React Bootstrap Button component, styled as outline-primary */}
          <Button
            as={Link}
            to="/coursePage"
            variant="outline-primary"
            className="browse-all-courses"
          >
            Browse All Courses <i className="fa fa-angle-double-right ms-2"></i>
          </Button>
        </Col>
      </Row>

      {/* Course Cards Display: Conditional rendering based on screen size */}
      <div>
        {isMobileView ? (
          // --- React Bootstrap Carousel for Mobile View (below 768px) ---
          <Carousel
            indicators
            interval={null}
            keyboard={true}
            controls={true}
            variant="dark"
            id="popularCoursesCarousel"
          >
            {popularCourses.map((course, index) => (
              <Carousel.Item key={course.id}>
                {/* CourseCard content for each slide */}
                <CourseCard course={course} />
                <br />
                <br />
                {/* Carousel.Caption can be added here if needed */}
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          // --- React Bootstrap Grid for Desktop/Tablet View (768px and above) ---
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
            {popularCourses.map((course) => (
              // Use React Bootstrap Col component for each card in the grid
              <Col key={course.id}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default PopularCourses;
