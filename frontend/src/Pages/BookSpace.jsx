
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar.jsx";
import "./BookSpace.css";

const locations = [
    "All Locations",
    "Don Padris Bungalow",
    "ISB",
    "Batticaloa",
    "ASAYA Workstation by the Sea",
    "TRACE Expert City Colombo 10",
    "TRACE Co-working Jaffna City",
    "UVA Co-working Space",
    "TRACE BREAD Centre - Makandura",
    "Innovator Park - Kandy",
    "TRACE Co-working Colombo 02",
    "TRACE Creators Space - Ratnapura",
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

// Sample spaces
// Replace these records with data retrieved from your database.

const spaces = [
    {
        id: 1,
        name: "Don Padris Bungalow",
        location: "Don Padris Bungalow",
        type: "Event Space",
        capacity: "Custom Setup",
        description: `🌴 Work from paradise. Live at your own pace. 💻✨ Escape the routine and experience a refreshing Workation at Siyambalagasara where peaceful surroundings, comfortable accommodation, and reliable connectivity come together.
                        🌿 Work. Relax. Recharge.
                        🏡 Comfortable stay
                        📶 Reliable internet
                        🌴 Peaceful natural surroundings
                        💻 Perfect for remote work`,
        image: "/Images/Don Padris Bungalow.jpeg",
    },
    {
        id: 2,
        name: "ISB",
        location: "ISB",
        type: "Meeting Room",
        capacity: "Per Seat",
        description: `Work smarter. Grow together. 
                    💼✨ Introducing the ISB Co-Working Space — a modern, comfortable environment designed for students, professionals, entrepreneurs, and innovators. 
                    🚀 Comfortable workstations 
                    📶 High-speed internet
                    💡 Creative environment
                    🤝 A space to collaborate, create & grow`,
        image: "/Images/ISB.jpg",
    },
    {
        id: 3,
        name: "DreamSpace",
        location: "Batticaloa",
        type: "Co-working Space",
        capacity: "Custom Setup",
        description: `💡 Empowering Local Communities Through Innovation!
                        DreamSpace Academy is a non-profit social enterprise co-creating an ecosystem to tackle socio-economic and environmental challenges through education, innovation, and entrepreneurship.`,
        image: "/Images/DreamSpace.jpg",
    },
    {
        id: 4,
        name: "ASAYA Workstation by the Sea",
        location: "ASAYA Workstation by the Sea",
        type: "Event Space",
        capacity: "Custom",
        description: `🌊 Work. Relax. Recharge. by the sea. 💻✨
                    Looking for a change of scenery without putting your work on hold? ASAYA offers the perfect workation escape in Mirissa.
                    🏡 Comfortable stay
                    📶 Reliable Wi-Fi
                    🏊 Pool & relaxation
                    💻 Perfect for remote work
                    Enjoy a peaceful coastal setting while staying productive, refreshed, and inspired.`,
        image: "/Images/ASAYA.jpg",
    },
    {
        id: 5,
        name: "Bay 07",
        location: "TRACE Expert City Colombo 10",
        type: "Auditorium & Hall",
        capacity: "80 Seats",
        description: `✨ BAY 07 – Where Ideas Meet Opportunities! 🚀
                        Looking for a space to bring your ideas to life? Bay 07 at TRACE Expert City is a dynamic venue for workshops, seminars, startup pitching sessions, networking events, corporate meetings, and more.
                        💡 Share knowledge
                        🤝 Build meaningful connections
                        🚀 Showcase innovative ideas
                        🌟 Create new opportunities

                        Whatever your vision, make your next event an inspiring experience at Bay 07!`,
        image: "/Images/Bay 07.jpg",
    },
    {
        id: 6,
        name: "I Space",
        location: "TRACE Expert City Colombo 10",
        type: "Meeting Room",
        capacity: "50 Seats",
        description: `Every great idea starts with the right space. 💡
                        Whether you're hosting business meetings, hands-on workshops, recording podcasts, or gathering for community events, iSpace by Veritas provides the perfect environment built for collaboration, creativity, and connection.
                        Bring your ideas we'll provide the space.`,
        image: "/Images/I Space.jpeg",
    },
    {
        id: 7,
        name: "Third Place",
        location: "TRACE Expert City Colombo 10",
        type: "Meeting Room",
        capacity: "25 Seats",
        description: `☕ More Than Coffee. A Space for Your Ideas.
                            Looking for a relaxed, inspiring space to bring people together?
                            The Third Place at TRACE Expert City is more than just a coffee shop — it’s a space designed for work, connection, collaboration, and creativity.
                            From a productive co-working day to a team meeting, workshop, networking session, or small event, The Third Place gives you the flexibility to make the space your own.

                            ✨ Perfect for:
                            ☕ Co-working & focused work
                            🤝 Meetings & team sessions
                            🎤 Workshops & presentations
                            🎉 Small events & gatherings
                            💡 Networking & creative sessions
                            👥 Capacity: Up to 25 people
                            🗓️ Weekdays | 8:00 AM – 8:00 PM
                            And of course, you can enjoy your favourite coffee and refreshments while you work, connect, and create. ☕✨`,
        image: "/Images/Third Place.jpeg",
    },
    {
        id: 8,
        name: "Creator Space",
        location: "TRACE Expert City Colombo 10",
        type: "Meeting Room",
        capacity: "150 Seats",
        description: `🚀 Create. Connect. Collaborate.
                        Looking for a professional space to host your next workshop, training session, meeting, or creative event?

                        Welcome to TRACE Creator Space — a plug & play venue designed to make your event experience seamless and productive. ✨

                        📅 Weekday Bookings Only
                        🎥 Full Tech & A/C Setup Included
                        🏢 Professional & Flexible Event Space
                        📍 TRACE Expert City, Colombo 10

                        Whether you're bringing a team together, sharing knowledge, or turning an idea into action — we've got the space for it.`,
        image: "/Images/Creator Space.jpeg",
    },
    {
        id: 9,
        name: "Idea Studio",
        location: "TRACE Expert City Colombo 10",
        type: "Meeting Room",
        capacity: "15 Seats",
        description: `🚀 Your Ideas Deserve the Right Space.
                        Big ideas need more than a desk — they need the right environment to come to life.
                        Welcome to IDEA STUDIO at TRACE Expert City — a professional space designed to help you focus deeper, collaborate better, and execute faster.
                        💡 Perfect for:
                        • Team brainstorming & meetings
                        • Strategy sessions
                        • Project planning
                        • Creative discussions
                        • Focused individual work
                        ✨ BOOK FOR 4 HOURS OR MORE
                        Available on weekdays & weekends
                        Enjoy these exclusive perks:
                        ☕ 10% OFF coffee purchases at The Third Place Café
                        🛋️ Reserved couch-area seating at The Third Place Café
                        💰 Rs. 1,500 + tax per hour
                        📍 TRACE Expert City
                        AC19, Colombo 01000
                        📞 Call / WhatsApp: 070 670 6791
                        ✉️ Email: projects@trace.lk
                        Think. Collaborate. Create. Execute.
                        👉 Book your IDEA STUDIO today and give your next project the space it deserves.         `,
        image: "/Images/Idea Studio.jpeg",
    },
    {
        id: 10,
        name: "TRACE Co-working Jaffna",
        location: "TRACE Co-working Jaffna City",
        type: "Co-working Space",
        capacity: "50 Seats",
        description: `🚀 Work. Connect. Grow. TRACE Co-Working Jaffna
                        Looking for a professional space to bring your ideas to life?
                        TRACE Co-Working Jaffna gives you the space, connectivity, and environment you need to stay productive, focused, and ready for your next big step.
                        ✨ Flexible Workspaces
                        📶 High-Speed & Reliable Wi-Fi
                        🛠️ Additional Services
                        💡 A professional environment for ideas, teams & growth
                        Whether you're a freelancer, entrepreneur, startup, or growing team your next big idea needs the right space.`,
        image: "/Images/TRACE Jaffna.jpeg",
    },
    {
        id: 11,
        name: "UVA Co-working Space",
        location: "UVA Co-working Space",
        type: "Co-working Space",
        capacity: "150 Seats",
        description: `🚀 Discover the UVA Co-Working Space!
                        Looking for a space to turn your ideas into reality? 💡
                        The UVA Co-Working Space at Uva Wellassa University, powered by innovation and collaboration, is a dynamic environment designed to support startups, freelancers, entrepreneurs, and innovators.

                        ✨ What You’ll Find:
                        ✅ Meeting & Conference Facilities
                        ✅ High-Speed Wi-Fi
                        ✅ Networking Opportunities
                        ✅ Business Consultancy & Support
                        ✅ Technical Support
                        ✅ Mentoring Programs

                        💼 Affordable Access. Endless Possibilities.
                        🔹 External Users: Rs. 1,000 per hour
                        🎓 Internal Students: Free of Charge

                        Whether you're developing a new business idea, collaborating with a team, or building valuable connections, the UVA Co-Working Space is the place to start!`,
        image: "/Images/UVA Space.jpeg",
    },
    {
        id: 12,
        name: "BREAD Centre",
        location: "TRACE BREAD Centre - Makandura",
        type: "Co-working Space",
        capacity: "75 Seats",
        description: `🌱 Driving Food Innovation Through BREAD Center!
                        The Business Research and Development (BREAD) Center, jointly owned by the National Enterprise Development Authority (NEDA) and Wayamba University of Sri Lanka under the Ministry of Industries, is managed by **TRACE Sri Lanka** to support innovation in the food and agricultural sectors. 🚀
                        From product development and prototyping to technical mentorship and practical training, BREAD Center helps turn innovative ideas into market-ready opportunities. 🌾💡`,
        image: "/Images/TRACE Bread.jpeg",
    },
    {
        id: 13,
        name: "Innovator Park - Kandy",
        location: "Innovator Park - Kandy",
        type: "Co-working Space",
        capacity: "15 Seats",
        description: `🚀 Elevate Your Work Experience at Innovator Park - Kandy! 🏢✨
                            Looking for the perfect space to work, connect, or host your next event?
                            Innovator Park – Kandy (by TRACE Expert City) offers modern, fully-equipped spaces tailored for professionals, educators, and teams in a comfortable and inspiring environment.

                            ✨ Our Key Offerings:
                            • Co-Working Space: Quiet, productive environment for individuals and teams.
                            • Event Space: Ideal for workshops, networking events, and seminars.
                            • Class Space: Modern setup for lectures and educational sessions.
                            • High-Speed Wi-Fi: Seamless connectivity to keep you going.

                            Book your space today and take your productivity to the next level!🎯`,
        image: "/Images/Innovator Park.jpeg",
    },
    {
        id: 14,
        name: "Co-Working Colombo 02",
        location: "TRACE Co-working Colombo 02",
        type: "Meeting Room",
        capacity: "20 Seats",
        description: `🚀 Co-Create Change in Colombo 02!
                        Looking for the perfect space to grow your ideas, meet like-minded innovators, and elevate your business? TRACE Coworking Colombo 02 is more than just a workspace—it’s a vibrant community built for entrepreneurs, freelancers, and visionaries.

                        Whether you need a dedicated desk or a professional setup for meetings, we’ve got you covered:

                        ✨ What We Offer:
                        🏢 Collaborative Co-Working Space – Flexible desks & comfortable setup
                        🤝 Meeting Rooms & Event Spaces – Fully equipped for your client discussions and presentations
                        💡 Innovation & Support – A thriving network of professionals ready to connect and collaborate

                        Bring your ambition, and we’ll provide the space to make it happen. Join us and co-create change today! 💡✨`,
        image: "/Images/Co Working Colombo 02.jpeg",
    },
    {
        id: 15,
        name: "Nalanda Innovation Hub",
        location: "TRACE Creators Space - Ratnapura",
        type: "Meeting Room",
        capacity: "150 Seats",
        description: `Looking for the perfect environment to host your next strategy session, team huddle, or client pitch? 🚀 At Nalanda Innovation Hub, we offer more than just a meeting space—we provide an environment designed to spark breakthrough ideas and drive real impact.
                        ✨ What we offer:
                        • Modern & comfortable meeting rooms
                        • High-speed Wi-Fi connectivity
                        • Smart TV & seamless presentation tools
                        • A vibrant, creative workspace built for collaboration Collaborate. Create. Grow. 🌱`,
        image: "/Images/Nalanda Innovation.jpeg",
    },
    
];

function BookSpace() {
    const navigate = useNavigate();

    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedSpaceType, setSelectedSpaceType] = useState("");

    // Handle location selection
    function handleLocationChange(event) {
        setSelectedLocation(event.target.value);

        // Reset space type when location changes
        setSelectedSpaceType("");
    }

    // Filter spaces according to selected location and space type
    const filteredSpaces = spaces.filter((space) => {
        const locationMatches =
            selectedLocation === "All Locations" ||
            space.location === selectedLocation;

        const typeMatches = space.type === selectedSpaceType;

        return locationMatches && typeMatches;
    });

    // Navigate to the spaces page with selected space details
    function handleViewDetails(space) {
        const queryParams = new URLSearchParams({
            location: space.location,
            type: space.type,
            spaceId: String(space.id),
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

                        <div className="selection-step-number">
                            01
                        </div>

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

                    {/* Selected Location Summary */}
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

                            <div className="selection-step-number">
                                02
                            </div>

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

                        {/* Space Type Cards */}
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

                        {/* Step 3: Display Available Spaces */}
                        {selectedSpaceType && (

                            <section className="available-spaces-section">

                                <div className="selection-step-heading">

                                    <div className="selection-step-number">
                                        03
                                    </div>

                                    <div>
                                        <span className="selection-step-label">
                                            THIRD STEP
                                        </span>

                                        <h2>Available Spaces</h2>

                                        <p>
                                            Explore {selectedSpaceType} options at{" "}
                                            <strong>{selectedLocation}</strong>.
                                        </p>
                                    </div>

                                </div>

                                {/* Available Spaces */}
                                {filteredSpaces.length > 0 ? (

                                    <div className="available-spaces-grid">

                                        {filteredSpaces.map((space) => (

                                            <div
                                                className="available-space-card"
                                                key={space.id}
                                            >

                                                <div className="available-space-image">

                                                    <img
                                                        src={space.image}
                                                        alt={space.name}
                                                        onError={(event) => {
                                                            event.currentTarget.style.display = "none";
                                                        }}
                                                    />

                                                    <span className="available-space-type">
                                                        {space.type}
                                                    </span>

                                                </div>

                                                <div className="available-space-content">

                                                    <h3>{space.name}</h3>

                                                    <p>
                                                        {space.description}
                                                    </p>

                                                    <div className="space-capacity">

                                                        <i className="bi bi-people"></i>

                                                        Capacity: {space.capacity} persons

                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="book-space-button"
                                                        onClick={() =>
                                                            handleViewDetails(space)
                                                        }
                                                    >
                                                        View Details

                                                        <i className="bi bi-arrow-right"></i>

                                                    </button>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                ) : (

                                    /* No Spaces Available */
                                    <div className="no-spaces-message">

                                        <i className="bi bi-building"></i>

                                        <h3>No Spaces Available</h3>

                                        <p>
                                            There are currently no{" "}
                                            {selectedSpaceType.toLowerCase()}{" "}
                                            options available at{" "}
                                            {selectedLocation}.
                                        </p>

                                        <span>
                                            Please select another space type
                                            or location.
                                        </span>

                                    </div>

                                )}

                            </section>

                        )}

                    </section>
                )}

            </main>

        </div>
    );
}

export default BookSpace;
