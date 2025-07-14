import { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  // State for form inputs (optional, but a best practice for forms)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted!", { username, password, rememberMe });
    // In a real application, you would send this data to a server
  };

  return (
    <section id="signIn">
      <div className="signIn-container text-center">
        <h2 className="signIn-title mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <input
              type="text"
              className="form-control"
              placeholder="Username or email *"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3 text-start">
            <input
              type="password"
              className="form-control"
              placeholder="Password *"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <Link to="/" className="link-red">
              Lost your password?
            </Link>
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-signIn">
              SIGN IN
            </button>
          </div>
        </form>
        <p className="mt-3">
          Not a member yet?
          <Link to="/signUp" className="link-red">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignInForm;
