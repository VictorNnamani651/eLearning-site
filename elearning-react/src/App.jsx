import LandingPage from "./pages/landingPage.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import SignInPage from "./pages/signInPage.jsx";
import CoursePage2 from "./pages/coursePage2.jsx";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/coursePage" element={<CoursePage2 />} />
      </Routes>
    </>
  );
}

export default App;
