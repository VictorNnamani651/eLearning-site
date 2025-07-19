import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AllCourses from "../components/allCourses";
import NewsletterSection from "../components/newsLetter";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <AllCourses />
      <Footer />
      <NewsletterSection />
    </>
  );
};

export default CoursePage;
