import "../styles/landingPage.css";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import SearchBar from "../components/searchBar";
import PopularCourses from "../components/popularCourses";
import SubBanner from "../components/subBanner";
import TopInstructorsSection from "../components/instructorSection";
import NewsAndTestimonialsSection from "../components/news&testimony";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import IncompleteProjectModal from "../components/incompleteModal";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <PopularCourses />
      <SubBanner />
      <TopInstructorsSection />
      <NewsAndTestimonialsSection />
      <Footer />
      <NewsletterSection />
      <IncompleteProjectModal />
    </>
  );
};

export default LandingPage;
