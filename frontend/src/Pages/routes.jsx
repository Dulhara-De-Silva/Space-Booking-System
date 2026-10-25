import { Routes, Route } from "react-router-dom";

import Welcome from "./welcome.jsx";
import SignIn from "./signIn.jsx";
import SignUp from "./signUp.jsx";
import UserDashboard from "./userDashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default AppRoutes;