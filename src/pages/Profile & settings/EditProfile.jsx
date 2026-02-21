// src/pages/Profile & settings/EditProfile.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Eye,
  EyeOff,
  Car,
  Edit2,
  Trash2,
  Lock,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import "../../components/Sidebar.css";
import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();

  // Profile form state
  const [fullName, setFullName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@email.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("10 1234 5678");
  const [nationalId, setNationalId] = useState("");

  // Vehicles state
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      plate: "ABC-123",
      model: "Toyota Camry",
      type: "Private Car",
    },
    {
      id: 2,
      plate: "XYZ-789",
      model: "Ford Transit",
      type: "Minibus",
    },
  ]);

  // Password verification
  const [verificationPassword, setVerificationPassword] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null); // 'success' | 'error' | null
  const [verificationMessage, setVerificationMessage] = useState("");

  const userData = {
    name: fullName,
    fleetId: "FL-2024",
  };
  

  const handleSaveChanges = (event) => {
    event.preventDefault();
    // Placeholder: submit to API later
    // eslint-disable-next-line no-console
    console.log("Saved profile changes", {
      fullName,
      email,
      password,
      phone,
      nationalId,
    });
  };

  const handleCancel = () => {
    navigate("/dashboard/profile");
  };

  const handleAddVehicle = () => {
    const nextId = vehicles.length + 1;
    setVehicles([
      ...vehicles,
      {
        id: nextId,
        plate: `NEW-${nextId.toString().padStart(3, "0")}`,
        model: "New Vehicle",
        type: "Private Car",
      },
    ]);
  };

  const handleEditVehicle = (id) => {
    // Placeholder for edit vehicle
    // eslint-disable-next-line no-console
    console.log("Edit vehicle", id);
  };

  const handleDeleteVehicle = (id) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleVerifyPassword = () => {
    const MOCK_PASSWORD = "123456";

    if (!verificationPassword) {
      setVerificationStatus("error");
      setVerificationMessage("Wrong Password. Please try again.");
      return;
    }

    if (verificationPassword === MOCK_PASSWORD) {
      setVerificationStatus("success");
      setVerificationMessage("Correct Password! Changes authorized.");
    } else {
      setVerificationStatus("error");
      setVerificationMessage("Wrong Password. Please try again.");
    }
  };

  return (
    <div className="wallet-page-container">
      <Sidebar userData={userData} />

      <main className="wallet-main-content edit-profile-main">
        <header className="edit-profile-header">
          <h1>Edit Profile</h1>
          <p>Update your personal and vehicle information.</p>
        </header>

        <div className="edit-profile-grid">
          {/* Left Column: Profile Information */}
          <section className="edit-profile-card">
            <h2 className="edit-profile-card-title">Profile Information</h2>
            <form className="edit-profile-form" onSubmit={handleSaveChanges}>
              <div className="edit-profile-field-group">
                <label htmlFor="full-name" className="edit-profile-label">
                  Full Name
                </label>
                <div className="edit-profile-input-wrapper">
                  <input
                    id="full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="edit-profile-input"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="edit-profile-field-group">
                <label htmlFor="email" className="edit-profile-label">
                  Email Address
                </label>
                <div className="edit-profile-input-wrapper">
                  <Mail className="edit-profile-input-icon" size={18} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="edit-profile-input edit-profile-input-with-icon"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="edit-profile-field-group">
                <label htmlFor="new-password" className="edit-profile-label">
                  New Password
                </label>
                <div className="edit-profile-input-wrapper">
                  <Lock className="edit-profile-input-icon" size={18} />
                  <input
                    id="new-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="edit-profile-input edit-profile-input-with-icon edit-profile-input-with-toggle"
                    placeholder="Enter a new password"
                  />
                  <button
                    type="button"
                    className="edit-profile-toggle-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="edit-profile-field-group">
                <label htmlFor="phone" className="edit-profile-label">
                  Phone Number
                </label>
                <div className="edit-profile-input-row">
                  <span className="edit-profile-prefix">+20</span>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="edit-profile-input edit-profile-input-flex"
                    placeholder="10 XXXX XXXX"
                  />
                </div>
              </div>

              <div className="edit-profile-field-group">
                <label htmlFor="national-id" className="edit-profile-label">
                  National ID
                </label>
                <input
                  id="national-id"
                  type="text"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="edit-profile-input"
                  placeholder="Enter your national ID"
                />
              </div>

              <div className="edit-profile-actions">
                <button type="button" className="edit-profile-cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="edit-profile-save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </section>

          {/* Right Column: Vehicles & Verification */}
          <div className="edit-profile-right-column">
            {/* My Vehicles Card */}
            <section className="edit-profile-card edit-profile-vehicles-card">
              <div className="edit-profile-vehicles-header">
                <h2 className="edit-profile-card-title">My Vehicles</h2>
                <button
                  type="button"
                  className="edit-profile-add-vehicle-btn"
                  onClick={() => navigate("/dashboard/profile/add-vehicle")}
                >
                  + Add Vehicle
                </button>
              </div>
              <div className="edit-profile-vehicle-list">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="edit-profile-vehicle-item">
                    <div className="edit-profile-vehicle-main">
                      <div className="edit-profile-vehicle-icon">
                        <Car size={18} />
                      </div>
                      <div className="edit-profile-vehicle-info">
                        <span className="edit-profile-vehicle-plate">
                          {vehicle.plate}
                        </span>
                        <span className="edit-profile-vehicle-model">
                          {vehicle.model}
                        </span>
                      </div>
                    </div>
                    <div className="edit-profile-vehicle-meta">
                      <span className="edit-profile-vehicle-type-badge">
                        {vehicle.type}
                      </span>
                      <div className="edit-profile-vehicle-actions">
                        <button
                          type="button"
                          className="edit-profile-icon-btn"
                          onClick={() => handleEditVehicle(vehicle.id)}
                          aria-label="Edit vehicle"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          type="button"
                          className="edit-profile-icon-btn edit-profile-icon-danger"
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                          aria-label="Delete vehicle"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Password Verification Card */}
            <section className="edit-profile-card edit-profile-verification-card">
              <h2 className="edit-profile-card-title">Password Verification</h2>
              <p className="edit-profile-verification-text">
                For security reasons, please confirm your password before applying
                sensitive changes.
              </p>
              <div className="edit-profile-field-group">
                <label htmlFor="verify-password" className="edit-profile-label">
                  Current Password
                </label>
                <input
                  id="verify-password"
                  type="password"
                  value={verificationPassword}
                  onChange={(e) => setVerificationPassword(e.target.value)}
                  className={`edit-profile-input ${
                    verificationStatus === "success"
                      ? "edit-profile-input-success"
                      : verificationStatus === "error"
                      ? "edit-profile-input-error"
                      : ""
                  }`}
                  placeholder="Enter your current password"
                />
              </div>
              <button
                type="button"
                className="edit-profile-verify-btn"
                onClick={handleVerifyPassword}
              >
                Verify
              </button>
              {verificationMessage && (
                <p
                  className={`edit-profile-verification-message ${
                    verificationStatus === "success"
                      ? "edit-profile-verification-success"
                      : verificationStatus === "error"
                      ? "edit-profile-verification-error"
                      : ""
                  }`}
                >
                  {verificationMessage}
                </p>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EditProfile;

