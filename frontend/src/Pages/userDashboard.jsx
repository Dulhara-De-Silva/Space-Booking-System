
import { useState } from "react";
import "./UserDashboard.css";

const locations = [
    "RACE Expert City Colombo 10",
    "HomeTree Coworking Colombo 04",
    "TRACE Coworking Colombo 02",
    "Trace Jaffna",
    "TRACE Bread Center",
    "TRACE JRDC Incubator - Kandy",
    "TRACE Creators Space Rathnapura",
    "TRACE Batticaloa",
    "Southern Innovation Hub",
    "UOK Innovation Hub",
    "UWU Innovation Hub",
];

function UserDashboard() {
    const [selectedLocation, setSelectedLocation] = useState("");

    return (
        <div className="dashboard-page">
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <i className="bi bi-buildings"></i>
                    <span>TRACE SPACES</span>
                </div>

                <nav className="sidebar-menu">
                    <a href="/dashboard" className="sidebar-link active">
                        <i className="bi bi-grid-1x2"></i>
                        Dashboard
                    </a>

                    <a href="/spaces" className="sidebar-link">
                        <i className="bi bi-door-open"></i>
                        Spaces
                    </a>

                    <a href="/bookings" className="sidebar-link">
                        <i className="bi bi-calendar-check"></i>
                        My Bookings
                    </a>

                    <a href="/profile" className="sidebar-link">
                        <i className="bi bi-person"></i>
                        My Profile
                    </a>
                </nav>

                <div className="sidebar-footer">
                    <i className="bi bi-geo-alt"></i>
                    Sri Lanka
                </div>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Find and manage your workspace.</p>
                    </div>

                    <div className="dashboard-user">
                        <i className="bi bi-person-circle"></i>
                        <span>My Account</span>
                    </div>
                </header>

                <section className="location-section">
                    <div className="location-heading">
                        <div className="location-icon">
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>

                        <div>
                            <h2>Select a Location</h2>
                            <p>
                                Choose a location to explore available
                                workspaces.
                            </p>
                        </div>
                    </div>

                    <label htmlFor="location-select">
                        Workspace Location
                    </label>

                    <select
                        id="location-select"
                        className="location-dropdown"
                        value={selectedLocation}
                        onChange={(e) =>
                            setSelectedLocation(e.target.value)
                        }
                    >
                        <option value="" disabled>
                            Select a location
                        </option>

                        {locations.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>

                    {selectedLocation && (
                        <div className="selected-location">
                            <i className="bi bi-check-circle-fill"></i>

                            <div>
                                <span>Selected Location</span>
                                <h3>{selectedLocation}</h3>
                            </div>

                            <button
                                className="explore-button"
                                onClick={() =>
                                    window.location.href =
                                        `/spaces?location=${encodeURIComponent(
                                            selectedLocation
                                        )}`
                                }
                            >
                                Explore Spaces
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    )}
                </section>

                <section className="dashboard-welcome">
                    <div>
                        <span className="welcome-label">
                            YOUR WORKSPACE, YOUR WAY
                        </span>

                        <h2>Find the perfect space to work.</h2>

                        <p>
                            Discover coworking spaces, meeting rooms,
                            event spaces, auditoriums and halls across
                            Sri Lanka.
                        </p>
                    </div>

                    <i className="bi bi-buildings welcome-illustration"></i>
                </section>

                <section className="location-list-section">
                    <div className="section-heading">
                        <div>
                            <h2>Our Locations</h2>
                            <p>
                                Explore our network of innovation and
                                coworking spaces.
                            </p>
                        </div>

                        <span className="location-count">
                            {locations.length} Locations
                        </span>
                    </div>

                    <div className="location-grid">
                        {locations.map((location, index) => (
                            <button
                                key={location}
                                className={`location-card ${
                                    selectedLocation === location
                                        ? "location-card-active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setSelectedLocation(location)
                                }
                            >
                                <div className="location-card-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>

                                <div className="location-card-info">
                                    <span>
                                        LOCATION {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3>{location}</h3>
                                </div>

                                <i className="bi bi-chevron-right location-arrow"></i>
                            </button>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default UserDashboard;
