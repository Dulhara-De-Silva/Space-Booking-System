
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/NavBar.jsx";






function BookSpace() {
    

    return (
       <div className="book-space-page">
            <Navbar />

            <main className="book-space-main">
                <h1>Book a Space</h1>
                <p>
                    Find and book the perfect workspace for your needs.
                </p>
            </main>
        </div>
    );
}

export default BookSpace;
