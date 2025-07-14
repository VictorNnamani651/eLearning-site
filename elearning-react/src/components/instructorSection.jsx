import InstructorCard from "./instructorCard";
import { instructorsData } from "../db";
import { Link } from "react-router-dom";

const TopInstructorsSection = () => {
  return (
    <section className="py-5 bg-light" id="instructors-section">
      <div className="container-md">
        <div className="header d-sm-flex flex-sm-row align-content-center">
          <div className="texts col">
            <h3>Top Instructors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur!
            </p>
          </div>
          <button className="all-instructors">
            <Link to="/">
              All Instructors<i className="fa fa-angle-double-right"></i>
            </Link>
          </button>
        </div>
        <div className="instructor-cards row gap-2 p-md-0 p-5 py-3">
          {instructorsData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructorsSection;
