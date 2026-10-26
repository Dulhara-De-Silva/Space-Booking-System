
import { useNavigate } from "react-router-dom";
import "../App.css";

function Welcome() {
    const navigate = useNavigate();

    const spaces = [
        {
            image: "/Images/trace-expert-city.jpg",
            alt: "Trace Expert City",
            title: "TRACE Expert City Colombo 10",
            description:
                "TRACE Expert City, located in Colombo, is a premier innovation and technology hub designed to foster entrepreneurship and collaboration in Sri Lanka. This dynamic space provides state-of-the-art facilities for startups and established businesses, offering co-working areas, incubation centers, and access to essential resources. TRACE Expert City serves as a vibrant ecosystem where innovators can connect, collaborate, and develop cutting-edge solutions, driving technological advancement and economic growth in the region. Its strategic location in Colombo enhances opportunities for networking and partnerships within the thriving tech community.",
        },
        {
            image: "/Images/trace-hometree.jpg",
            alt: "Home Tree",
            title: "HomeTree Coworking Colombo 04",
            description:
                "Nestled in the heart of Colombo 4, right next to Majestic City, HomeTree offers an inviting and comfortable coworking environment. More than just a workspace, it is a vibrant community where entrepreneurs, freelancers, and business professionals come together to collaborate and innovate. HomeTree fosters a culture of support and connection, encouraging members to pursue their ambitions both big and small. HomeTree provides an ideal setting for those seeking to make a meaningful impact in their work and beyond. Join us and be part of our journey to co-create change!",
        },
        {
            image: "/Images/trace-colombo-3.jpg",
            alt: "Trace Coworking Colombo",
            title: "TRACE Coworking Colombo 02",
            description:
                "Located in Colombo 2, TRACE Coworking offers an inviting and comfortable coworking environment. It brings entrepreneurs, freelancers, and business professionals together to collaborate and innovate. The space encourages a culture of support and connection, helping members pursue their ambitions and create meaningful impact through their work.",
        },
        {
            image: "/Images/trace-jaffna.jpg",
            alt: "Trace Jaffna",
            title: "TRACE Coworking Jaffna City",
            description:
                "Located in Jaffna at Ruban Complex, TRACE Coworking offers an inviting and comfortable coworking environment. Entrepreneurs, freelancers, and business professionals can collaborate, share ideas, and build connections. The space supports local innovation and provides an environment for professionals to develop their ideas and grow their ventures.",
        },
        {
            image: "/Images/trace-bread-center.jpg",
            alt: "TRACE Bread Center",
            title: "TRACE Bread Center - Makandura",
            description:
                "The TRACE BREAD (Business Research And Development) Center in Makandura, Sri Lanka, is a government-supported incubation facility for food and agriculture entrepreneurs. It offers machinery, prototyping, and commercialization support to help startups scale up, managed by TRACE Sri Lanka to drive innovation in the food sector.",
        },
        {
            image: "/Images/trace-kandy.jpg",
            alt: "TRACE JRDC",
            title: "TRACE JRDC Incubator - Kandy",
            description:
                "The TRACE - JRDC Incubator in Kandy is a collaboration between TRACE Sri Lanka and the China-Sri Lanka Joint Research & Demonstration Center for Water Technology (JRDC), a key water research facility at the University of Peradeniya. It creates a hub for technology startups, research, and MSMEs focusing on water, green, and agri-tech. The facility supports coworking, incubation, and collaboration between academia and industry, helping innovators develop their ideas into market-ready solutions.",
        },
        {
            image: "/Images/Nalanda Trace.png",
            alt: "TRACE Creators Space Rathnapura",
            title: "TRACE Creators Space - Rathnapura",
            description:
                "TRACE Creators Space in Rathnapura is a collaborative innovation hub launched with the Nalanda Ellawala Innovation Hub. It offers coworking, workshops, and technology training for startups, freelancers, and innovators in the region. The space aims to develop local technology talent and entrepreneurship in Sabaragamuwa while connecting innovators to TRACE facilities nationwide.",
        },
        {
            image: "/Images/Batticaloa trace.png",
            alt: "TRACE Batticaloa",
            title: "TRACE Batticaloa",
            description:
                "TRACE Batticaloa is an innovation and coworking space established by the national TRACE initiative in partnership with DreamSpace Academy in Batticaloa, Sri Lanka. It provides technology entrepreneurs and creatives with workstations, a collaborative community, and resources to foster local innovation and connect them with the national technology ecosystem.",
        },
        {
            image: "/Images/Matara TRACE.png",
            alt: "Southern Innovation Hub",
            title: "Southern Innovation Hub",
            description:
                "Southern Sri Lanka, anchored by Galle, Matara, and Hambantota, combines coastal ecosystems with modern infrastructure, creating opportunities for sustainable innovation. The South offers foundations for ventures that blend heritage, nature, technology, and the region's unique resources.",
        },
        {
            image: "/Images/UOK location.png",
            alt: "UOK Innovation Hub",
            title: "UOK Innovation Hub",
            description:
                "The University of Kelaniya's Innovation Hub is a dynamic space within the Faculty of Computing and Technology, designed to foster creativity and entrepreneurship. It features modern coworking and incubator facilities that support emerging startups and facilitate research and development. This collaborative environment encourages interdisciplinary teamwork and nurtures a culture of innovation, making it an ideal setting for aspiring technopreneurs in Sri Lanka.",
        },
        {
            image: "/Images/UWU location.png",
            alt: "UWU Innovation Hub",
            title: "UWU Innovation Hub",
            description:
                "The UWU-TRACE Innovation Hub, located on the Uva Wellassa University campus, is a facility designed to promote innovation and entrepreneurship in the Uva Province. Established in partnership with TRACE, the hub offers modern coworking spaces and incubation facilities for emerging startups. It fosters collaboration among students and faculty, encouraging an entrepreneurial mindset and providing access to mentorship and resources. This environment empowers innovators to transform ideas into impactful solutions that drive regional and national progress.",
        },
    ];

    return (
        <div className="app">
            {/* Navigation bar */}
            <header className="navbar">
                <button
                    className="brand"
                    onClick={() => navigate("/")}
                    aria-label="Go to welcome page"
                >
                    <img
                        src="/images/logo.png"
                        alt="Trace Spaces logo"
                        className="logo"
                    />
                    <span>Trace Spaces</span>
                </button>

                <div className="nav-actions">
                    <button
                        className="btn btn-outline"
                        onClick={() => navigate("/signin")}
                    >
                        Sign In
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Welcome banner */}
            <main className="welcome">
                <section className="welcome-content">
                    <p className="eyebrow">YOUR SPACE, YOUR WAY</p>

                    <h1>
                        Find the perfect
                        <br />
                        space for your <span>next idea.</span>
                    </h1>

                    <p className="description">
                        Discover and book meeting rooms, coworking spaces,
                        and auditoriums with ease. Your next great experience
                        starts here.
                    </p>

                    <div className="welcome-actions">
                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => navigate("/signup")}
                        >
                            Get Started →
                        </button>

                        <button
                            className="btn btn-outline btn-large"
                            onClick={() => navigate("/signin")}
                        >
                            I already have an account
                        </button>
                    </div>

                    <div className="features">
                        <div>
                            <strong>Easy</strong>
                            <span>Online booking</span>
                        </div>

                        <div>
                            <strong>Flexible</strong>
                            <span>Space options</span>
                        </div>

                        <div>
                            <strong>Convenient</strong>
                            <span>Simple scheduling</span>
                        </div>
                    </div>
                </section>

                {/* Welcome images */}
                <section className="welcome-images">
                    <div className="image-main">
                        <img
                            src="/images/welcome-page.png"
                            alt="Workspace available for booking"
                        />

                       
                    </div>

                    <div className="image-secondary">
                        <img
                            src="/images/welcome-page2.png"
                            alt="Modern meeting space"
                        />
                    </div>
                </section>
            </main>

            {/* Available spaces - outside the welcome layout */}
            <section className="spaces-section container-fluid py-5 px-3 px-lg-5">
                <div className="spaces-heading text-center mx-auto mb-5">
                    <p className="eyebrow">EXPLORE OUR LOCATIONS</p>

                    <h2>Discover Your Perfect Space</h2>

                    <p>
                        From professional environments to flexible workspaces,
                        find the right place for your next meeting, event, or idea.
                    </p>
                </div>

                <div className="spaces-grid d-flex flex-column gap-4">
                    {spaces.map((space) => (
                        <article
                            className="space-card card flex-row align-items-center w-100"
                            key={space.title}
                        >
                            <img
                                src={space.image}
                                alt={space.alt}
                                className="space-card-img"
                            />

                            <div className="space-card-content card-body">
                                <h3 className="card-title">
                                    {space.title}
                                </h3>

                                <p className="card-text">
                                    {space.description}
                                </p>

                                <button
                                    className="btn btn-outline"
                                    onClick={() => navigate("/signin")}
                                >
                                    Explore Space →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                © {new Date().getFullYear()} Trace Spaces. All rights reserved.
            </footer>
        </div>
    );
}

export default Welcome;
