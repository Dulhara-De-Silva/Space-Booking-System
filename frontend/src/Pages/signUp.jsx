import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Pages/signUp.css";
import "../App.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  
async function handleSubmit(event) {
  event.preventDefault();

  // Check whether the passwords match
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  try {
    // Send the form data to the backend
    const response = await fetch(
      "http://localhost:5000/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    // Handle errors returned by the backend
    if (!response.ok) {
      toast.error(data.message || "Registration failed");
      return;
    }

    // Handle successful registration
    toast.success(data.message || "Account created successfully!");

    // Navigate to the Sign In page
    navigate("/signin");
  } catch (error) {
    console.error("Signup error:", error);

    toast.error(
      "Unable to connect to the server. Please try again."
    );
  }
}


  return (
    <main className="signup-page">
      {/* Left Image Section */}
      <section className="signup-visual">
        <img
          src="/Images/welcome-page2.png"
          alt="Modern workspace"
          className="signup-background"
        />

        <div className="signup-visual-overlay"></div>

        <div className="signup-visual-content">
          <span className="signup-tagline">
            YOUR SPACE. YOUR POSSIBILITIES.
          </span>

          <h1>
            Make room
            <br />
            for your
            <br />
            next big idea.
          </h1>

          <p>
            Create your account and discover workspaces
            designed for productivity, creativity, and
            collaboration.
          </p>

          <div className="signup-image-footer">
            <span className="signup-dot"></span>
            Your next great idea starts here.
          </div>
        </div>
      </section>

      {/* Right Sign Up Section */}
      <section className="signup-form-section">
        <div className="signup-brand">
          <img
            src="/Images/logo.png"
            alt="Trace Spaces logo"
            className="signup-logo"
          />
          <span>Trace Spaces</span>
        </div>

        <button
          type="button"
          className="signup-back-button"
          onClick={() => navigate("/")}
        >
          <span aria-hidden="true">←</span> Back to Home
        </button>

        <div className="signup-form-wrapper">
          <div className="signup-heading">
            <span className="signup-eyebrow">GET STARTED</span>

            <h2>Create your account</h2>

            <p>
              Join Trace Spaces and find the right space for you.
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-field">
              <label htmlFor="signup-name">Full name</label>
              <input
                id="signup-name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-email">Email address</label>
              <input
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-confirm-password">
                Confirm password
              </label>
              <input
                id="signup-confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              className="signup-submit-button"
            >
              Create Account <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="signup-divider">
            <span>ALREADY A MEMBER?</span>
          </div>

          <p className="signup-login-text">
            Already have an account?{" "}
            <Link to="/signin">Sign in</Link>
          </p>

          <p className="signup-terms">
            By creating an account, you agree to use Trace Spaces
            responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SignUp;