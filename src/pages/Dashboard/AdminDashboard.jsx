// src/pages/Dashboard/AdminDashboard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../components/Sidebar.css";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Mock admin data
  const adminData = {
    name: "John Driver",
    role: "Fleet Manager",
  };

  // Mock dashboard stats
  const stats = {
    walletBalance: 1247.5,
    totalTrips: 142,
    tripsChange: "+12% from last month",
    activeViolations: 3,
    violationsFines: 450,
    monthlyRevenue: 2847,
  };

  // Mock recent trips
  const recentTrips = [
    {
      id: 1,
      vehicle: "NYC-4521",
      time: "Today, 2:30 PM",
      fare: 24.5,
      status: "Completed",
    },
    {
      id: 2,
      vehicle: "NYC-4521",
      time: "Today, 11:15 AM",
      fare: 18.75,
      status: "Violation",
    },
    {
      id: 3,
      vehicle: "NYC-7834",
      time: "Yesterday, 4:45 PM",
      fare: 31.2,
      status: "Completed",
    },
    {
      id: 2,
      vehicle: "NYC-4521",
      time: "Today, 11:15 AM",
      fare: 18.75,
      status: "Violation",
    },
  ];

  // Mock alerts
  const alerts = [
    {
      id: 1,
      type: "error",
      icon: "⚠️",
      title: "New Violation",
      message: "Fine payment failed due to insufficient balance.",
      time: "2 hours ago",
    },
    {
      id: 1,
      type: "error",
      icon: "⚠️",
      title: "New Violation",
      message: "Fine payment failed due to insufficient balance.",
      time: "2 hours ago",
    },
    {
      id: 1,
      type: "error",
      icon: "⚠️",
      title: "New Violation",
      message: "Fine payment failed due to insufficient balance.",
      time: "2 hours ago",
    },

  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar
        role="admin"
        userData={{ name: adminData.name, fleetId: "ADMIN-001" }}
      />

      {/* Main Content */}
      <main className="admin-main-content">
        {/* Header */}
        <header className="admin-page-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {adminData.name}</p>
          </div>
          <div className="admin-badge">
            <div className="shield-icon">🛡️</div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="admin-stats-section">
          <div className="admin-stat-card green">
            <div className="stat-header">
              <div>
                <p className="stat-label">Wallet Balance</p>
                <h2 className="stat-value">
                  ${stats.walletBalance.toLocaleString()}
                </h2>
              </div>
              <div className="stat-icon green-bg">💰</div>
            </div>
          </div>

          <div className="admin-stat-card blue">
            <div className="stat-header">
              <div>
                <p className="stat-label">Total Trips</p>
                <h2 className="stat-value">{stats.totalTrips}</h2>
              </div>
              <div className="stat-icon blue-bg">🚙</div>
            </div>
            <div className="stat-footer">
              <span className="stat-trend positive">{stats.tripsChange}</span>
            </div>
          </div>

          <div className="admin-stat-card red">
            <div className="stat-header">
              <div>
                <p className="stat-label">Active Violations</p>
                <h2 className="stat-value">{stats.activeViolations}</h2>
              </div>
              <div className="stat-icon red-bg">⚠️</div>
            </div>
            <div className="stat-footer">
              <span className="violations-fine">
                Pay ${stats.violationsFines} in fines
              </span>
            </div>
          </div>

          <div className="admin-stat-card yellow">
            <div className="stat-header">
              <div>
                <p className="stat-label">This Month</p>
                <h2 className="stat-value">
                  ${stats.monthlyRevenue.toLocaleString()}
                </h2>
              </div>
              <div className="stat-icon yellow-bg">💵</div>
            </div>
            <div className="stat-footer">
              <span className="stat-note">Revenue generated</span>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="admin-content-section">
          {/* Recent Trips */}
          <div className="admin-card">
            <h3 className="card-title">Recent Trips</h3>
            <div className="admin-trips-list">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="admin-trip-item">
                  <div className="trip-icon">🚗</div>
                  <div className="trip-details">
                    <h4>{trip.vehicle}</h4>
                    <p>{trip.time}</p>
                  </div>
                  <div className="trip-fare">${trip.fare}</div>
                  <span className={`trip-status ${trip.status.toLowerCase()}`}>
                    {trip.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts */}
          <div className="admin-card">
            <h3 className="card-title">Active Alerts</h3>
            <div className="admin-alerts-list">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`admin-alert-item alert-${alert.type}`}
                >
                  <div className="alert-icon">{alert.icon}</div>
                  <div className="alert-content">
                    <h4>{alert.title}</h4>
                    <p>{alert.message}</p>
                    <span className="alert-time">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          {/* Revenue Trend */}
          <div className="admin-card chart-card">
            <div className="chart-header">
              <h3>Revenue Trend</h3>
              <button className="chart-menu-btn">☰</button>
            </div>
            <div className="chart-container">
              <svg className="revenue-chart" viewBox="0 0 500 250">
                <line
                  x1="0"
                  y1="0"
                  x2="500"
                  y2="0"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="500"
                  y2="50"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="100"
                  x2="500"
                  y2="100"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="150"
                  x2="500"
                  y2="150"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="200"
                  x2="500"
                  y2="200"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />

                <polyline
                  points="0,150 83,120 166,90 249,100 332,60 415,20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                <circle cx="0" cy="150" r="5" fill="#3b82f6" />
                <circle cx="83" cy="120" r="5" fill="#3b82f6" />
                <circle cx="166" cy="90" r="5" fill="#3b82f6" />
                <circle cx="249" cy="100" r="5" fill="#3b82f6" />
                <circle cx="332" cy="60" r="5" fill="#3b82f6" />
                <circle cx="415" cy="20" r="5" fill="#3b82f6" />
              </svg>
              <div className="chart-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Violation Types */}
          <div className="admin-card chart-card">
            <div className="chart-header">
              <h3>Violation Types</h3>
              <button className="chart-menu-btn">☰</button>
            </div>
            <div className="donut-container">
              <svg className="donut-chart" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="40"
                  strokeDasharray="198 440"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="40"
                  strokeDasharray="154 440"
                  strokeDashoffset="-198"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="40"
                  strokeDasharray="88 440"
                  strokeDashoffset="-352"
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="donut-legend">
                <div className="legend-item">
                  <span className="legend-dot red"></span>
                  <span className="legend-label">Seatbelt</span>
                  <span className="legend-value">45%</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot orange"></span>
                  <span className="legend-label">Phone Usage</span>
                  <span className="legend-value">35%</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot yellow"></span>
                  <span className="legend-label">Speed</span>
                  <span className="legend-value">20%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
