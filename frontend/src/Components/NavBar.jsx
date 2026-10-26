
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navLinks = [
        { label: "Dashboard", path: "/user/dashboard", icon: "bi-grid-1x2" },
        { label: "Spaces", path: "/spaces", icon: "bi-door-open" },
        { label: "Book a Space", path: "/book-space", icon: "bi-calendar-plus" },
        { label: "My Bookings", path: "/bookings", icon: "bi-calendar-check" },
        { label: "My Profile", path: "/profile", icon: "bi-person" },
    ];

    return (
        <header className="top-navbar">
            <Link to="/user/dashboard" className="top-navbar-brand">
                <img
                        src="/Images/logo.png"
                        alt="Trace Spaces logo"
                        className="logo"
                    />
                <span>TRACE SPACES</span>
            </Link>

            <nav className="top-navbar-menu" aria-label="Main navigation">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end
                        className={({ isActive }) =>
                            `top-navbar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className={`bi ${link.icon}`}></i>
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>

            <Link to="/user/dashboard" className="top-navbar-account">
                <i className="bi bi-person-circle"></i>
                <span>My Account</span>
            </Link>
        </header>
    );
}

export default Navbar;
