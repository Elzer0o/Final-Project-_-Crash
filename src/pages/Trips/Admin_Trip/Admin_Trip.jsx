// src/pages/Trips/Admin_Trip/Admin_Trip.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  DollarSign,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Sidebar from "../../../components/Sidebar";
import "../../../components/Sidebar.css";
import "./Admin_Trip.css";

function Admin_Trip() {
  const navigate = useNavigate();

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [transactionType, setTransactionType] = useState("all");
  const [gateName, setGateName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const adminUser = {
    name: "System Admin",
    fleetId: "ADMIN-001",
  };

  const stats = {
    totalSystemRevenue: 1250000,
    totalSystemViolations: 1240,
  };

  const allTrips = [
    {
      id: "SYS-TRIP-001",
      dateTime: "Oct 25, 2024 09:45 AM",
      vehiclePlate: "ABC-123",
      gateName: "Gate A - North Entrance",
      fareAmount: 25.5,
      violationAmount: 0,
      status: "Paid",
    },
    {
      id: "SYS-TRIP-002",
      dateTime: "Oct 25, 2024 10:05 AM",
      vehiclePlate: "XYZ-789",
      gateName: "Gate B - South Exit",
      fareAmount: 32.0,
      violationAmount: 50,
      status: "Violation",
    },
    {
      id: "SYS-TRIP-003",
      dateTime: "Oct 25, 2024 11:20 AM",
      vehiclePlate: "DEF-456",
      gateName: "Gate C - East Entrance",
      fareAmount: 18.75,
      violationAmount: 0,
      status: "Paid",
    },
    {
      id: "SYS-TRIP-004",
      dateTime: "Oct 24, 2024 02:15 PM",
      vehiclePlate: "JKL-012",
      gateName: "Gate D - West Exit",
      fareAmount: 28.5,
      violationAmount: 75,
      status: "Violation",
    },
    {
      id: "SYS-TRIP-005",
      dateTime: "Oct 24, 2024 04:30 PM",
      vehiclePlate: "MNO-345",
      gateName: "Gate A - North Entrance",
      fareAmount: 15.25,
      violationAmount: 0,
      status: "Paid",
    },
  ];

  const handleApplyFilters = () => {
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setDateFrom("");
    setDateTo("");
    setTransactionType("all");
    setGateName("all");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(allTrips.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTrips = allTrips.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="wallet-page-container">
      <Sidebar role="admin" userData={adminUser} />

      <main className="wallet-main-content admin-trip-main">
        <header className="admin-trip-header">
          <button
            type="button"
            className="admin-trip-back-btn"
            onClick={() => navigate("/admin/dashboard")}
            aria-label="Back to admin dashboard"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1>System Trip Logs</h1>
            <p>Monitor and manage all fleet transactions.</p>
          </div>
        </header>

        {/* Filter Section */}
        <section className="admin-trip-filter-section">
          <div className="admin-trip-filter-row">
            <div className="admin-trip-filter-group">
              <label htmlFor="admin-date-from" className="admin-trip-filter-label">
                From
              </label>
              <div className="admin-trip-date-input-wrapper">
                <Calendar className="admin-trip-date-icon" size={18} />
                <input
                  id="admin-date-from"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="admin-trip-date-input"
                />
              </div>
            </div>

            <div className="admin-trip-filter-group">
              <label htmlFor="admin-date-to" className="admin-trip-filter-label">
                To
              </label>
              <div className="admin-trip-date-input-wrapper">
                <Calendar className="admin-trip-date-icon" size={18} />
                <input
                  id="admin-date-to"
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="admin-trip-date-input"
                />
              </div>
            </div>

            <div className="admin-trip-filter-group">
              <label htmlFor="admin-transaction-type" className="admin-trip-filter-label">
                Transaction Type
              </label>
              <select
                id="admin-transaction-type"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="admin-trip-select"
              >
                <option value="all">All Types</option>
                <option value="fare">Fare</option>
                <option value="recharge">Recharge</option>
                <option value="violation">Violation</option>
              </select>
            </div>

            <div className="admin-trip-filter-group">
              <label htmlFor="admin-gate-name" className="admin-trip-filter-label">
                Gate Name
              </label>
              <div className="admin-trip-gate-select-wrapper">
                <MapPin className="admin-trip-gate-icon" size={18} />
                <select
                  id="admin-gate-name"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  className="admin-trip-select admin-trip-select-with-icon"
                >
                  <option value="all">All Gates</option>
                  <option value="gate-a">Gate A - North Entrance</option>
                  <option value="gate-b">Gate B - South Exit</option>
                  <option value="gate-c">Gate C - East Entrance</option>
                  <option value="gate-d">Gate D - West Exit</option>
                </select>
              </div>
            </div>

            <div className="admin-trip-filter-actions">
              <button
                type="button"
                className="admin-trip-apply-btn"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
              <button
                type="button"
                className="admin-trip-reset-btn"
                onClick={handleResetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="admin-trip-stats-section">
          <div className="admin-trip-stat-card admin-trip-stat-revenue">
            <div className="admin-trip-stat-icon-wrapper admin-trip-stat-icon-green">
              <DollarSign className="admin-trip-stat-icon" size={24} />
            </div>
            <div className="admin-trip-stat-content">
              <p className="admin-trip-stat-label">Total System Revenue</p>
              <h2 className="admin-trip-stat-value">
                {stats.totalSystemRevenue.toLocaleString()} EGP
              </h2>
            </div>
          </div>

          <div className="admin-trip-stat-card admin-trip-stat-violations">
            <div className="admin-trip-stat-icon-wrapper admin-trip-stat-icon-red">
              <AlertTriangle className="admin-trip-stat-icon" size={24} />
            </div>
            <div className="admin-trip-stat-content">
              <p className="admin-trip-stat-label">Total System Violations</p>
              <h2 className="admin-trip-stat-value">
                {stats.totalSystemViolations.toLocaleString()}
              </h2>
            </div>
          </div>
        </section>

        {/* Trips Table */}
        <section className="admin-trip-table-section">
          <div className="admin-trip-table-wrapper">
            <table className="admin-trip-table">
              <thead>
                <tr>
                  <th>Trip ID</th>
                  <th>Date &amp; Time</th>
                  <th>Vehicle Plate</th>
                  <th>Gate Name</th>
                  <th>Fare Amount</th>
                  <th>Violation Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentTrips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="admin-trip-id-cell">{trip.id}</td>
                    <td>{trip.dateTime}</td>
                    <td className="admin-trip-vehicle-cell">{trip.vehiclePlate}</td>
                    <td>{trip.gateName}</td>
                    <td className="admin-trip-fare-cell">
                      {trip.fareAmount.toFixed(2)} EGP
                    </td>
                    <td className="admin-trip-violation-cell">
                      {trip.violationAmount > 0
                        ? `${trip.violationAmount.toFixed(2)} EGP`
                        : "-"}
                    </td>
                    <td>
                      <span
                        className={`admin-trip-status-badge ${
                          trip.status === "Paid"
                            ? "admin-trip-status-paid"
                            : "admin-trip-status-violation"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination */}
        <div className="admin-trip-pagination">
          <button
            type="button"
            className="admin-trip-pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          <div className="admin-trip-pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`admin-trip-pagination-number ${
                  page === currentPage ? "admin-trip-pagination-active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="admin-trip-pagination-btn"
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

export default Admin_Trip;

