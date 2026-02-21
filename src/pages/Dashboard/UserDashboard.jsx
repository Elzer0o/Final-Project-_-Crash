import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar"; 
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const userData = {
    name: "John Driver",
    fleetId: "FL-2024",
  };


  const stats = {
    walletBalance: 2847.5,
    autoRecharge: true,
    todaysTrips: 24,
    tripsChange: "+12% from yesterday",
    activeViolations: 3,
    requiresAction: true,
    monthlyRevenue: 18420,
    revenueChange: "+8.2% this month",
  };


  const recentTrips = [
    { id: 1, vehicle: "ABC-123", time: "09:45 AM", fare: 12.5, status: "Completed" },
    { id: 2, vehicle: "XYZ-789", time: "11:20 AM", fare: 28.75, status: "Violation" },
    { id: 3, vehicle: "DEF-456", time: "02:15 PM", fare: 15.25, status: "Completed" },
  ];


  const alerts = [
    { id: 1, type: "error", icon: "🚨", title: "Fine Not Paid", message: "Insufficient funds.", time: "2 hours ago" },
    { id: 2, type: "warning", icon: "⚠️", title: "Low Balance", message: "Balance below 3,000 EGP", time: "5 hours ago" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar userData={userData} />

      <main className="main-content">
        <header className="page-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {userData.name.split(" ")[0]}. Here's your fleet overview.</p>
          </div>
        </header>

        <section className="stats-section">
          <div className="stat-card green">
            <div className="stat-header">
              <div>
                <p className="stat-label">Wallet Balance</p>
                <h2 className="stat-value">{stats.walletBalance.toLocaleString()} EGP</h2>
              </div>
              <div className="stat-icon green-bg">💰</div>
            </div>
            <div className="stat-footer">
              <span className="badge-success">Active</span>
              <span className="stat-note">Auto-recharge enabled</span>
            </div>
          </div>

          <div className="stat-card blue">
            <div className="stat-header">
              <div>
                <p className="stat-label">Today's Trips</p>
                <h2 className="stat-value">{stats.todaysTrips}</h2>
              </div>
              <div className="stat-icon blue-bg">🚙</div>
            </div>
            <div className="stat-footer">
              <span className="stat-trend positive">↑ {stats.tripsChange}</span>
            </div>
          </div>

          <div className="stat-card red">
            <div className="stat-header">
              <div>
                <p className="stat-label">Active Violations</p>
                <h2 className="stat-value">{stats.activeViolations}</h2>
              </div>
              <div className="stat-icon red-bg">⚠️</div>
            </div>
            <div className="stat-footer">
              <span className="badge-danger">Requires Action</span>
            </div>
          </div>

          <div className="stat-card yellow">
            <div className="stat-header">
              <div>
                <p className="stat-label">Monthly Revenue</p>
                <h2 className="stat-value">{stats.monthlyRevenue.toLocaleString()} EGP</h2>
              </div>
              <div className="stat-icon yellow-bg">📈</div>
            </div>
            <div className="stat-footer">
              <span className="stat-trend positive">↑ {stats.revenueChange}</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="card">
            <div className="card-header">
              <h3>Recent Trips</h3>
              <button className="link-btn" onClick={() => navigate("/dashboard/trips")}>View All</button>
            </div>
            <div className="trips-table">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Time</th>
                    <th>Fare</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrips.map((trip) => (
                    <tr key={trip.id}>
                      <td>
                        <div className="vehicle-info">
                          <div className="vehicle-icon">🚗</div>
                          <span>{trip.vehicle}</span>
                        </div>
                      </td>
                      <td>{trip.time}</td>
                      <td className="fare">EGP {trip.fare}</td>
                      <td>
                        <span className={`status-badge ${trip.status.toLowerCase()}`}>{trip.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sidebar-cards">
            <div className="card">
              <h3 className="card-title">Active Alerts</h3>
              <div className="alerts-list">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`alert-item alert-${alert.type}`}>
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
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;