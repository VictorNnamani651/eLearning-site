import LandingPage from "./pages/landingPage.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import SignInPage from "./pages/signInPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="body">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
