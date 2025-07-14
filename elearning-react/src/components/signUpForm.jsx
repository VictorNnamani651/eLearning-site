import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign Up Form Submitted!", {
      username,
      email,
      password,
      repeatPassword,
    });
    // In a real application, you would send this data to a server
  };

  return (
    <section id="signUp">
      <div className="signUp-container text-center">
        <h2 className="signUp-title mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat Password"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-signUp">
              SIGN UP
            </button>
          </div>
        </form>
        <p className="mt-3">
          Are you a member?
          <Link to="/signIn" className="signIn-link">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
