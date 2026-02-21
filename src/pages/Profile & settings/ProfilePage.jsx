// src/pages/Profile & settings/ProfilePage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Edit,
  FileText,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import "../../components/Sidebar.css";
import "./ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();

  const userData = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    fleetId: "FL-2024",
  };

  // Vehicles with toggleable status
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      plate: "ABC-1234",
      model: "Toyota Camry",
      status: "Active",
    },
    {
      id: 2,
      plate: "XYZ-5678",
      model: "Honda Civic",
      status: "Inactive",
    },
  ]);

  const quickStats = {
    totalTrips: 247,
    totalFines: 3,
    totalFare: 1847,
  };

  const toggleVehicleStatus = (vehicleId) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === vehicleId
          ? {
              ...vehicle,
              status: vehicle.status === "Active" ? "Inactive" : "Active",
            }
          : vehicle
      )
    );
  };

  const handleViewVehicle = (vehicleId) => {
    // Placeholder for view vehicle action
    console.log("View vehicle:", vehicleId);
  };

  const handleEditProfile = () => {
    navigate("/dashboard/profile/edit");
  };

  return (
    <div className="wallet-page-container">
      <Sidebar userData={userData} />

      <main className="wallet-main-content">
        <header className="profile-page-header">
          <h1>Profile Settings</h1>
        </header>

        {/* User Info Card */}
        <section className="profile-user-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar-placeholder">IMG 96x96</div>
            <div className="profile-avatar-actions">
            </div>
          </div>

          <div className="profile-user-details">
            <h2 className="profile-user-name">{userData.name}</h2>
            <div className="profile-contact-info">
              <div className="profile-contact-item">
                <Mail size={18} className="profile-contact-icon" />
                <span>{userData.email}</span>
              </div>
              <div className="profile-contact-item">
                <Phone size={18} className="profile-contact-icon" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="profile-edit-btn"
            onClick={handleEditProfile}
          >
            <Edit size={18} />
            Edit Profile
          </button>
        </section>

        {/* Two Column Layout */}
        <div className="profile-content-grid">
          {/* Left Column: Linked Vehicles */}
          <section className="profile-vehicles-card">
            <h3 className="profile-card-title">Linked Vehicles</h3>
            <div className="profile-vehicles-list">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="profile-vehicle-item">
                  <div className="profile-vehicle-info">
                    <span className="profile-vehicle-plate">{vehicle.plate}</span>
                    <span className="profile-vehicle-model">{vehicle.model}</span>
                  </div>
                  <div className="profile-vehicle-actions">
                    <button
                      type="button"
                      className={`profile-vehicle-status ${
                        vehicle.status === "Active"
                          ? "profile-vehicle-status-active"
                          : "profile-vehicle-status-inactive"
                      }`}
                      onClick={() => toggleVehicleStatus(vehicle.id)}
                    >
                      {vehicle.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column: Quick Stats */}
          <section className="profile-stats-card">
            <h3 className="profile-card-title">Quick Stats</h3>
            <div className="profile-stats-grid">
              <div className="profile-stat-item">
                <div className="profile-stat-icon-wrapper profile-stat-icon-blue">
                  <FileText size={24} className="profile-stat-icon" />
                </div>
                <h3 className="profile-stat-value">{quickStats.totalTrips}</h3>
                <p className="profile-stat-label">Total Trips</p>
              </div>

              <div className="profile-stat-item">
                <div className="profile-stat-icon-wrapper profile-stat-icon-red">
                  <AlertTriangle size={24} className="profile-stat-icon" />
                </div>
                <h3 className="profile-stat-value">{quickStats.totalFines}</h3>
                <p className="profile-stat-label">Total Fines</p>
              </div>

              <div className="profile-stat-item">
                <div className="profile-stat-icon-wrapper profile-stat-icon-green">
                  <DollarSign size={24} className="profile-stat-icon" />
                </div>
                <h3 className="profile-stat-value">
                  {quickStats.totalFare.toLocaleString()} EGP
                </h3>
                <p className="profile-stat-label">Total Fare</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
