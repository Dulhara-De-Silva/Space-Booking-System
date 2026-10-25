
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import "../Pages/signIn.css";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrorMessage("");

  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Sign in failed.");
        return;
      }

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setErrorMessage(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="signin-page">
      {/* Left Image and Branding Section */}
      <section className="signin-visual">
        <img
          src="/Images/welcome-page.png"
          alt="Modern workspace"
          className="signin-background"
        />

        <div className="signin-visual-overlay"></div>



        <div className="signin-visual-content">
          <span className="signin-tagline">
            YOUR SPACE. YOUR POSSIBILITIES.
          </span>

          <h1>
            Find your space.
            <br />
            Focus on what
            <br />
            matters.
          </h1>

          <p>
            Discover inspiring workspaces designed to help you
            connect, create, collaborate, and achieve more.
          </p>

          <div className="signin-image-footer">
            <span className="signin-dot"></span>
            Your next great idea starts here.
          </div>
        </div>
      </section>

      {/* Right Sign In Form Section */}
      <section className="signin-form-section">
        <button
          type="button"
          className="signin-back-button"
          onClick={() => navigate("/")}
        >
          <span aria-hidden="true">←</span> Back to Home
        </button>

        <div className="signin-form-wrapper">

          <div className="signin-brand">
            <img
              src="/Images/logo.png"
              alt="Trace Spaces logo"
              className="signin-logo"
            />
            <span>Trace Spaces</span>
          </div>

          <div className="signin-heading">
            <span className="signin-eyebrow">WELCOME BACK</span>

            <h2>Sign in to your account</h2>

            <p>
              Welcome back! Please enter your details to continue.
            </p>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="signin-field">
              <label htmlFor="signin-email">Email address</label>

              <div className="signin-input-wrapper">
                <span className="signin-input-icon" aria-hidden="true">
                  ✉
                </span>

                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="signin-field">
              <label htmlFor="signin-password">Password</label>

              <div className="signin-input-wrapper">
                <span className="signin-input-icon" aria-hidden="true">
                  ♙
                </span>

                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="signin-submit-button">
              Sign In <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="signin-divider">
            <span>NEW TO TRACE SPACES?</span>
          </div>

          <p className="signin-signup-text">
            Don't have an account?{" "}
            <Link to="/signup">Create an account</Link>
          </p>

          <p className="signin-terms">
            By continuing, you agree to use Trace Spaces responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
