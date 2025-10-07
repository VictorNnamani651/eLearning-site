import "../styles/landingPage.css";
import Navbar2 from "../components/navbar2";
import HeroSection from "../components/hero";
import SearchBar from "../components/searchBar";
import PopularCourses from "../components/popularCourses";
import SubBanner from "../components/subBanner";
import TopInstructorsSection from "../components/instructorSection";
import NewsAndTestimonialsSection from "../components/news&testimony";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import IncompleteProjectModal from "../components/incompleteModal";
import Logo from "/assets/images/logo-banner.png";

const LandingPage = () => {
  return (
    <>
      <Navbar2 logo={Logo} style={{ height: "0px" }} />
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
