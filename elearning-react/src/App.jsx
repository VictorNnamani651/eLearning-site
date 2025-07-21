import LandingPage from "./pages/landingPage.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import SignInPage from "./pages/signInPage.jsx";
import CoursePage from "./pages/coursePage.jsx";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div id="body">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/coursePage" element={<CoursePage />} />
      </Routes>
    </div>
  );
}

export default App;
