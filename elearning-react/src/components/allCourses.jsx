import { courseData } from "../db";
import CourseCard from "./courseCard";
import SearchBar from "./searchBar";

function AllCourses() {
  return (
    <>
      <SearchBar />
      <div className="border border-2 border-info row d-flex gap-3 justify-content-center py-3">
        {courseData.map((course) => (
          <CourseCard course={course} columnClass={"col-12 col-md-3"} />
        ))}
      </div>
    </>
  );
}

export default AllCourses;
