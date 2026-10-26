
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/NavBar.jsx";
import "./BookSpace.css";

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

const spaceTypes = [
    {
        name: "Event Space",
        icon: "bi-calendar-event",
        description: "Workshops, events and gatherings",
    },
    {
        name: "Co-working Space",
        icon: "bi-laptop",
        description: "Flexible desks and productive workspaces",
    },
    {
        name: "Meeting Room",
        icon: "bi-people",
        description: "Meetings and collaboration",
    },
    {
        name: "Auditorium & Hall",
        icon: "bi-easel",
        description: "Conferences, presentations and large events",
    },
];

function BookSpace() {
    const navigate = useNavigate();

    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedSpaceType, setSelectedSpaceType] = useState("");

    function handleLocationChange(event) {
        setSelectedLocation(event.target.value);
        setSelectedSpaceType("");
    }

    function handleExploreSpaces() {
        if (!selectedLocation || !selectedSpaceType) {
            return;
        }

        const queryParams = new URLSearchParams({
            location: selectedLocation,
            type: selectedSpaceType,
        });

        navigate(`/spaces?${queryParams.toString()}`);
    }

    return (
        <div className="dashboard-page">
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Main Dashboard */}
            <main className="dashboard-main">
                {/* Welcome Banner */}
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

                    <i
                        className="bi bi-buildings welcome-illustration"
                        aria-hidden="true"
                    ></i>
                </section>

                {/* Step 1: Select Location */}
                <section className="location-section">
                    <div className="selection-step-heading">
                        <div className="selection-step-number">01</div>

                        <div>
                            <span className="selection-step-label">
                                FIRST STEP
                            </span>

                            <h2>Choose Your Location</h2>

                            <p>
                                Where would you like to book a workspace?
                            </p>
                        </div>
                    </div>

                    <label
                        className="professional-select-label"
                        htmlFor="location-select"
                    >
                        Workspace location
                    </label>

                    <div className="professional-select-wrapper">
                        <i
                            className="bi bi-geo-alt professional-select-icon"
                            aria-hidden="true"
                        ></i>

                        <select
                            id="location-select"
                            className="location-dropdown"
                            value={selectedLocation}
                            onChange={handleLocationChange}
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

                        <i
                            className="bi bi-chevron-down professional-select-arrow"
                            aria-hidden="true"
                        ></i>
                    </div>

                    <p className="selection-helper-text">
                        <i className="bi bi-info-circle"></i>
                        Select a location to see the available space types.
                    </p>

                    {selectedLocation && (
                        <div className="selected-location-summary">
                            <i className="bi bi-check-circle-fill"></i>

                            <div>
                                <span>Selected location</span>
                                <strong>{selectedLocation}</strong>
                            </div>

                            <button
                                type="button"
                                className="change-location-button"
                                onClick={() => {
                                    setSelectedLocation("");
                                    setSelectedSpaceType("");
                                }}
                            >
                                Change
                            </button>
                        </div>
                    )}
                </section>

                {/* Step 2: Select Space Type */}
                {selectedLocation && (
                    <section className="space-type-section">
                        <div className="selection-step-heading">
                            <div className="selection-step-number">02</div>

                            <div>
                                <span className="selection-step-label">
                                    SECOND STEP
                                </span>

                                <h2>Choose Your Space Type</h2>

                                <p>
                                    Select the type of workspace you need at{" "}
                                    <strong>{selectedLocation}</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="space-type-grid">
                            {spaceTypes.map((type) => (
                                <button
                                    key={type.name}
                                    type="button"
                                    className={`space-type-card ${
                                        selectedSpaceType === type.name
                                            ? "space-type-card-active"
                                            : ""
                                    }`}
                                    aria-pressed={
                                        selectedSpaceType === type.name
                                    }
                                    onClick={() =>
                                        setSelectedSpaceType(type.name)
                                    }
                                >
                                    <div className="space-type-icon">
                                        <i
                                            className={`bi ${type.icon}`}
                                            aria-hidden="true"
                                        ></i>
                                    </div>

                                    <h3>{type.name}</h3>

                                    <p>{type.description}</p>

                                    <span className="space-type-select-label">
                                        {selectedSpaceType === type.name
                                            ? "Selected"
                                            : "Choose this type"}

                                        <i
                                            className={`bi ${
                                                selectedSpaceType === type.name
                                                    ? "bi-check-circle-fill"
                                                    : "bi-arrow-right"
                                            }`}
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Explore Spaces */}
                        <div className="explore-spaces-footer">
                            <div className="explore-selection-summary">
                                {selectedSpaceType ? (
                                    <>
                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>
                                            <strong>{selectedSpaceType}</strong>
                                            <small>{selectedLocation}</small>
                                        </span>
                                    </>
                                ) : (
                                    <span>
                                        Select a space type to continue.
                                    </span>
                                )}
                            </div>

                            <button
                                type="button"
                                className="explore-button"
                                disabled={!selectedSpaceType}
                                onClick={handleExploreSpaces}
                            >
                                Explore Spaces
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default BookSpace;
