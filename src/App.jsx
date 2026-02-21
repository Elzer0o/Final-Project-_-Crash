import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// === Admin Pages ===
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Admin_Trip from "./pages/Trips/Admin_Trip/Admin_Trip";
import Admin_Wallet from "./pages/Wallet/Admin_Wallet/Admin_Wallet";

// === User Dashboard & Core Pages ===
import UserDashboard from "./pages/Dashboard/UserDashboard";
import Homepage from "./pages/Home/Homepage";

// === Auth Pages ===
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// === Wallet & Payments ===
import WalletPage from "./pages/Wallet & Payment/WalletPage";
import RechargeWallet from "./pages/Wallet & Payment/RechargeWallet/RechargeWallet";

// === Trips ===
import TripHistory from "./pages/Trips/User/TripHistory";

// === Profile & Settings ===
import ProfilePage from "./pages/Profile & settings/ProfilePage";
import EditProfile from "./pages/Profile & settings/EditProfile";
import AddVehicle from "./pages/Profile & settings/AddVehicle/AddVehicle";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/wallet" element={<WalletPage />} />
          <Route path="/dashboard/wallet/recharge" element={<RechargeWallet />} />
          <Route path="/dashboard/trips" element={<TripHistory />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/profile/edit" element={<EditProfile />} />
          <Route path="/dashboard/profile/add-vehicle" element={<AddVehicle />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/trips" element={<Admin_Trip />} />
          <Route path="/admin/wallet" element={<Admin_Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;