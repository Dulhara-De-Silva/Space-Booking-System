import RoomAvailability from "../Components/RoomAvailability";

function UserDashboard() {
    return (
        <div className="user-dashboard">
            <h1>Welcome to Trace Spaces</h1>
            <p>Find and book your preferred space.</p>

            <RoomAvailability />
        </div>
    );
}

export default UserDashboard;