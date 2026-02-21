// src/pages/Trips/User/TripHistory.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Car, DollarSign, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "../../../components/Sidebar";
import "../../../components/Sidebar.css";
import "./TripHistory.css";

function TripHistory() {
  const navigate = useNavigate();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const userData = {
    name: "John Driver",
    fleetId: "FL-2024",
  };

  // Mock stats
  const stats = {
    totalTrips: 247,
    totalFarePaid: 12450,
    totalViolations: 7340,
  };

  // Mock trips data
  const allTrips = [
    {
      id: "TR-2024-001",
      dateTime: "Oct 25, 2024 09:45 AM",
      vehiclePlate: "ABC-123",
      gateName: "Gate A - North Entrance",
      fareAmount: 25.5,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-002",
      dateTime: "Oct 25, 2024 11:20 AM",
      vehiclePlate: "XYZ-789",
      gateName: "Gate B - South Exit",
      fareAmount: 18.75,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-003",
      dateTime: "Oct 24, 2024 02:15 PM",
      vehiclePlate: "DEF-456",
      gateName: "Gate C - East Entrance",
      fareAmount: 32.0,
      status: "Not Paid",
      violationAmount: 50.0,
    },
    {
      id: "TR-2024-004",
      dateTime: "Oct 24, 2024 04:30 PM",
      vehiclePlate: "GHI-789",
      gateName: "Gate A - North Entrance",
      fareAmount: 15.25,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-005",
      dateTime: "Oct 23, 2024 08:15 AM",
      vehiclePlate: "JKL-012",
      gateName: "Gate D - West Exit",
      fareAmount: 28.5,
      status: "Not Paid",
      violationAmount: 75.0,
    },
    {
      id: "TR-2024-006",
      dateTime: "Oct 23, 2024 10:45 AM",
      vehiclePlate: "MNO-345",
      gateName: "Gate B - South Exit",
      fareAmount: 22.0,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-007",
      dateTime: "Oct 22, 2024 01:20 PM",
      vehiclePlate: "PQR-678",
      gateName: "Gate C - East Entrance",
      fareAmount: 19.5,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-008",
      dateTime: "Oct 22, 2024 03:45 PM",
      vehiclePlate: "STU-901",
      gateName: "Gate A - North Entrance",
      fareAmount: 35.0,
      status: "Not Paid",
      violationAmount: 100.0,
    },
    {
      id: "TR-2024-009",
      dateTime: "Oct 21, 2024 07:30 AM",
      vehiclePlate: "VWX-234",
      gateName: "Gate D - West Exit",
      fareAmount: 20.75,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-010",
      dateTime: "Oct 21, 2024 09:15 AM",
      vehiclePlate: "YZA-567",
      gateName: "Gate B - South Exit",
      fareAmount: 27.5,
      status: "Paid",
      violationAmount: 0,
    },
    {
      id: "TR-2024-011",
      dateTime: "Oct 20, 2024 12:00 PM",
      vehiclePlate: "BCD-890",
      gateName: "Gate C - East Entrance",
      fareAmount: 24.0,
      status: "Not Paid",
      violationAmount: 60.0,
    },
    {
      id: "TR-2024-012",
      dateTime: "Oct 20, 2024 02:30 PM",
      vehiclePlate: "EFG-123",
      gateName: "Gate A - North Entrance",
      fareAmount: 16.5,
      status: "Paid",
      violationAmount: 0,
    },
  ];

  const handleApplyFilters = () => {
    // Filter logic would go here
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setDateFrom("");
    setDateTo("");
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(allTrips.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTrips = allTrips.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="wallet-page-container">
      <Sidebar userData={userData} />

      <main className="wallet-main-content">
        <header className="wallet-page-header">
          <div>
            <h1>Trip History</h1>
            <p>View and manage your trip records and payments</p>
          </div>
        </header>

        {/* Filter Section */}
        <section className="trip-filter-section">
          <div className="trip-filter-row">
            <div className="trip-filter-group">
              <label htmlFor="date-from" className="trip-filter-label">
                From
              </label>
              <div className="trip-date-input-wrapper">
                <Calendar className="trip-date-icon" size={18} />
                <input
                  id="date-from"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="trip-date-input"
                />
              </div>
            </div>
            <div className="trip-filter-group">
              <label htmlFor="date-to" className="trip-filter-label">
                To
              </label>
              <div className="trip-date-input-wrapper">
                <Calendar className="trip-date-icon" size={18} />
                <input
                  id="date-to"
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="trip-date-input"
                />
              </div>
            </div>
            <div className="trip-filter-actions">
              <button
                type="button"
                className="trip-apply-btn"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
              <button
                type="button"
                className="trip-reset-btn"
                onClick={handleResetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="trip-stats-section">
          <div className="trip-stat-card trip-stat-blue">
            <div className="trip-stat-icon-wrapper trip-stat-icon-blue">
              <Car className="trip-stat-icon" size={24} />
            </div>
            <div className="trip-stat-content">
              <p className="trip-stat-label">Total Trips</p>
              <h2 className="trip-stat-value">{stats.totalTrips}</h2>
            </div>
          </div>

          <div className="trip-stat-card trip-stat-green">
            <div className="trip-stat-icon-wrapper trip-stat-icon-green">
              <DollarSign className="trip-stat-icon" size={24} />
            </div>
            <div className="trip-stat-content">
              <p className="trip-stat-label">Total Fare Paid</p>
              <h2 className="trip-stat-value">
                {stats.totalFarePaid.toLocaleString()} EGP
              </h2>
            </div>
          </div>

          <div className="trip-stat-card trip-stat-red">
            <div className="trip-stat-icon-wrapper trip-stat-icon-red">
              <AlertTriangle className="trip-stat-icon" size={24} />
            </div>
            <div className="trip-stat-content">
              <p className="trip-stat-label">Total Violations</p>
              <h2 className="trip-stat-value">
                {stats.totalViolations.toLocaleString()} EGP
              </h2>
            </div>
          </div>
        </section>

        {/* Trips Table */}
        <section className="trip-table-section">
          <div className="trip-table-wrapper">
            <table className="trip-table">
              <thead>
                <tr>
                  <th>Trip ID</th>
                  <th>Date & Time</th>
                  <th>Vehicle Plate</th>
                  <th>Route Name</th>
                  <th>Fare Amount</th>
                  <th>Status</th>
                  <th>Violation Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentTrips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="trip-id-cell">{trip.id}</td>
                    <td>{trip.dateTime}</td>
                    <td className="trip-vehicle-cell">{trip.vehiclePlate}</td>
                    <td>{trip.gateName}</td>
                    <td className="trip-fare-cell">
                      {trip.fareAmount.toFixed(2)} EGP
                    </td>
                    <td>
                      <span
                        className={`trip-status-badge ${
                          trip.status === "Paid"
                            ? "trip-status-paid"
                            : "trip-status-not-paid"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </td>
                    <td className="trip-violation-cell">
                      {trip.violationAmount > 0
                        ? `${trip.violationAmount.toFixed(2)} EGP`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination */}
        <div className="trip-pagination">
          <button
            type="button"
            className="trip-pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          <div className="trip-pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`trip-pagination-number ${
                  currentPage === page ? "trip-pagination-active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="trip-pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default TripHistory;
