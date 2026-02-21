// src/pages/Profile & settings/AddVehicle/AddVehicle.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import "../../../components/Sidebar.css";
import "./AddVehicle.css";

function AddVehicle() {
  const navigate = useNavigate();

  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [toast, setToast] = useState(null); // { type: 'success', message: string }

  const userData = {
    name: "John Driver",
    fleetId: "FL-2024",
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleAddVehicle = (event) => {
    event.preventDefault();
    setToast({ type: "success", message: "Vehicle added successfully." });

    // Simulate redirect after short delay so user sees the toast
    setTimeout(() => {
      navigate(-1);
    }, 1200);
  };

  return (
    <div className="wallet-page-container">
      <Sidebar userData={userData} />

      <main className="wallet-main-content add-vehicle-main">
        <header className="add-vehicle-header">
          <h1>Add Vehicle</h1>
          <p>Enter your vehicle details to link it to your Autofare account.</p>
        </header>

        <section className="add-vehicle-card">
          <form className="add-vehicle-form" onSubmit={handleAddVehicle}>
            {/* License Plate Number */}
            <div className="add-vehicle-field-group">
              <label htmlFor="license-plate" className="add-vehicle-label">
                <span className="add-vehicle-label-icon">🚗</span>
                License Plate Number
              </label>
              <input
                id="license-plate"
                type="text"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                className="add-vehicle-input"
                placeholder="e.g., ABC 1234"
              />
            </div>

            {/* Vehicle Type */}
            <div className="add-vehicle-field-group">
              <label htmlFor="vehicle-type" className="add-vehicle-label">
                <span className="add-vehicle-label-icon">🚙</span>
                Vehicle Type
              </label>
              <div className="add-vehicle-select-wrapper">
                <select
                  id="vehicle-type"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="add-vehicle-select"
                >
                  <option value="">Select vehicle type</option>
                  <option value="private-car">Private Car</option>
                  <option value="minibus">Minibus</option>
                  <option value="bus">Bus</option>
                  <option value="truck">Truck</option>
                </select>
              </div>
            </div>

            {/* Vehicle Model & Year */}
            <div className="add-vehicle-field-group">
              <label htmlFor="vehicle-model" className="add-vehicle-label">
                <span className="add-vehicle-label-icon">📋</span>
                Vehicle Model &amp; Year
              </label>
              <input
                id="vehicle-model"
                type="text"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="add-vehicle-input"
                placeholder="e.g., Toyota Camry 2022"
              />
            </div>

            {/* Vehicle Color */}
            <div className="add-vehicle-field-group">
              <label htmlFor="vehicle-color" className="add-vehicle-label">
                <span className="add-vehicle-label-icon">🎨</span>
                Vehicle Color
              </label>
              <input
                id="vehicle-color"
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="add-vehicle-input"
                placeholder="Enter vehicle color"
              />
            </div>

            <div className="add-vehicle-actions">
              <button
                type="button"
                className="add-vehicle-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="add-vehicle-submit-btn">
                + Add Vehicle
              </button>
            </div>
          </form>
        </section>

        {/* Information Box */}
        <section className="add-vehicle-info-box">
          <div className="add-vehicle-info-icon">ℹ️</div>
          <div className="add-vehicle-info-text">
            <h3>Vehicle Information</h3>
            <p>
              Make sure all vehicle details are accurate. Your vehicle will be
              verified before it can be used for toll payments on Autofare.
            </p>
          </div>
        </section>

        {toast && (
          <div className="add-vehicle-toast" role="alert">
            {toast.message}
          </div>
        )}
      </main>
    </div>
  );
}

export default AddVehicle;

