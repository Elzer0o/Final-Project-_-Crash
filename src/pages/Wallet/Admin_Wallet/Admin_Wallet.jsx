// src/pages/Wallet/Admin_Wallet/Admin_Wallet.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  DollarSign,
  AlertTriangle,
  CreditCard,
  Wallet as WalletIcon,
} from "lucide-react";
import Sidebar from "../../../components/Sidebar";
import "../../../components/Sidebar.css";
import "./Admin_Wallet.css";

function Admin_Wallet() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [transactionFilter, setTransactionFilter] = useState("all");

  const adminUser = {
    name: "System Admin",
    fleetId: "ADMIN-001",
  };

  const stats = {
    totalLiquidity: 158450,
    totalRevenue: 1250000,
    revenueChange: "+12.5%",
    totalUnpaidFines: 32450,
  };

  const transactions = [
    {
      id: 1,
      date: "Oct 25, 2024",
      userOrPlate: "John Driver / ABC-123",
      type: "Toll Fee",
      amount: 25.5,
      method: "Wallet",
      status: "Paid",
    },
    {
      id: 2,
      date: "Oct 25, 2024",
      userOrPlate: "Mary Ali / XYZ-789",
      type: "Recharge",
      amount: 500,
      method: "Visa *1234",
      status: "Paid",
    },
    {
      id: 3,
      date: "Oct 24, 2024",
      userOrPlate: "Ahmed Hassan / DEF-456",
      type: "Fine",
      amount: 150,
      method: "Wallet",
      status: "Paid",
    },
    {
      id: 4,
      date: "Oct 24, 2024",
      userOrPlate: "System / Fleet-wide",
      type: "Toll Fee",
      amount: 875,
      method: "Wallet",
      status: "Paid",
    },
    {
      id: 5,
      date: "Oct 23, 2024",
      userOrPlate: "Omar Ali / JKL-012",
      type: "Fine",
      amount: 220,
      method: "Visa *5678",
      status: "Paid",
    },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      !searchQuery ||
      tx.userOrPlate.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      transactionFilter === "all"
        ? true
        : transactionFilter === "fines"
        ? tx.type.toLowerCase() === "fine"
        : transactionFilter === "tolls"
        ? tx.type.toLowerCase() === "toll fee"
        : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="wallet-page-container">
      <Sidebar role="admin" userData={adminUser} />

      <main className="wallet-main-content admin-wallet-main">
        {/* Header */}
        <header className="admin-wallet-header">
          <button
            type="button"
            className="admin-wallet-back-btn"
            onClick={() => navigate("/admin/dashboard")}
            aria-label="Back to admin dashboard"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1>System Wallet &amp; Payments</h1>
            <p>Centralized view of all financial activity across your fleet.</p>
          </div>
        </header>

        {/* Top Stats */}
        <section className="admin-wallet-stats">
          {/* Blue main banner */}
          <div className="admin-wallet-card admin-wallet-card-primary">
            <div>
              <p className="admin-wallet-card-label">Total System Liquidity</p>
              <h2 className="admin-wallet-card-value">
                {stats.totalLiquidity.toLocaleString()} EGP
              </h2>
              <p className="admin-wallet-card-sub">
                Current consolidated balance across all wallets.
              </p>
            </div>
            <div className="admin-wallet-card-icon">
              <WalletIcon size={32} />
            </div>
          </div>

          {/* Total Revenue */}
          <div className="admin-wallet-card admin-wallet-card-green">
            <div className="admin-wallet-stat-icon admin-wallet-stat-icon-green">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="admin-wallet-card-label">Total Revenue</p>
              <h3 className="admin-wallet-card-value-sm">
                {stats.totalRevenue.toLocaleString()} EGP
              </h3>
              <p className="admin-wallet-card-sub positive">
                {stats.revenueChange} vs last period
              </p>
            </div>
          </div>

          {/* Total Unpaid Fines */}
          <div className="admin-wallet-card admin-wallet-card-red">
            <div className="admin-wallet-stat-icon admin-wallet-stat-icon-red">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="admin-wallet-card-label">Total Unpaid Fines</p>
              <h3 className="admin-wallet-card-value-sm">
                {stats.totalUnpaidFines.toLocaleString()} EGP
              </h3>
              <p className="admin-wallet-card-sub">
                Pending violations awaiting settlement.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="admin-wallet-filters">
          <div className="admin-wallet-search-group">
            <label htmlFor="admin-wallet-search" className="admin-wallet-filter-label">
              Search by User / Plate
            </label>
            <div className="admin-wallet-search-wrapper">
              <Search className="admin-wallet-search-icon" size={18} />
              <input
                id="admin-wallet-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type user name or plate number"
                className="admin-wallet-search-input"
              />
            </div>
          </div>

          <div className="admin-wallet-filter-group">
            <label
              htmlFor="admin-wallet-transaction-type"
              className="admin-wallet-filter-label"
            >
              Transaction Type
            </label>
            <select
              id="admin-wallet-transaction-type"
              value={transactionFilter}
              onChange={(e) => setTransactionFilter(e.target.value)}
              className="admin-wallet-select"
            >
              <option value="all">All</option>
              <option value="tolls">Tolls</option>
              <option value="fines">Fines</option>
            </select>
          </div>
        </section>

        {/* Transactions Table */}
        <section className="admin-wallet-table-section">
          <div className="admin-wallet-table-wrapper">
            <table className="admin-wallet-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>User / Plate</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>{tx.date}</td>
                    <td className="admin-wallet-user-cell">{tx.userOrPlate}</td>
                    <td>{tx.type}</td>
                    <td className="admin-wallet-amount-cell">
                      {tx.amount.toFixed(2)} EGP
                    </td>
                    <td>
                      <span className="admin-wallet-method">
                        {tx.method.includes("Visa") ? (
                          <>
                            <CreditCard size={16} /> {tx.method}
                          </>
                        ) : (
                          <>
                            <WalletIcon size={16} /> {tx.method}
                          </>
                        )}
                      </span>
                    </td>
                    <td>
                      <span className="admin-wallet-status-badge admin-wallet-status-paid">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Admin_Wallet;

