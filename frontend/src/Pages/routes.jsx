import { Routes, Route } from "react-router-dom";

import Welcome from "./welcome.jsx";
import SignIn from "./signIn.jsx";
import SignUp from "./signUp.jsx";
import UserDashboard from "./userDashboard.jsx";
import BookSpace from "./BookSpace.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/book-space" element={<BookSpace />} />
    {/* <Route path="/spaces" element={<Spaces />} /> */}
    {/* <Route path="/bookings" element={<Bookings />} /> */}
    {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default AppRoutes;