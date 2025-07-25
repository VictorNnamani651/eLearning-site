import { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import { API } from "../api/api";
import SearchBar from "./searchBar";
import LoadingScreen from "./loading";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API.COURSES);
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <SearchBar />
          <div className="row d-flex gap-3 justify-content-center py-3 m-0">
            {courses.map((course) => (
              <CourseCard
                course={course}
                columnClass={"col-12 col-md-3 p-0"}
                key={course.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default AllCourses;
