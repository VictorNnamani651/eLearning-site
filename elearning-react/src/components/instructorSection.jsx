import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InstructorCard from "./InstructorCard";
import { API } from "../api/api";
import LoadingScreen from "./loading";

const TopInstructorsSection = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch(API.INSTRUCTORS);
        if (!response.ok) {
          throw new Error("Failed to fetch instructors");
        }
        const data = await response.json();
        setInstructors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

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
              All Instructors <i className="fa fa-angle-double-right"></i>
            </Link>
          </button>
        </div>

        <div className="instructor-cards row gap-2 p-md-0 p-5 py-3">
          {loading && <LoadingScreen />}
          {error && <p className="text-danger">{error}</p>}
          {!loading &&
            !error &&
            instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructorsSection;
