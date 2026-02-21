// src/pages/Wallet & Payment/WalletPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../components/Sidebar.css";
import "./WalletPage.css";

function WalletPage() {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState("");
  const [transactionType, setTransactionType] = useState("All Types");

  const userData = {
    name: "John Driver",
    fleetId: "FL-2024",
  };

  const walletBalance = 0;

  const summary = {
    totalPaid: 5240.0,
    totalFines: 340.0,
  };

  const transactions = [
    {
      id: 1,
      date: "Oct 25, 2024",
      type: "Fare",
      amount: -25.5,
      source: "Wallet",
      status: "Completed",
    },
    {
      id: 2,
      date: "Oct 24, 2024",
      type: "Recharge",
      amount: 500.0,
      source: "Visa *1234",
      status: "Completed",
    },
    {
      id: 3,
      date: "Oct 23, 2024",
      type: "Fare",
      amount: -18.75,
      source: "Wallet",
      status: "Completed",
    },
    {
      id: 4,
      date: "Oct 22, 2024",
      type: "Fine",
      amount: -50.0,
      source: "Wallet",
      status: "Completed",
    },
    {
      id: 5,
      date: "Oct 21, 2024",
      type: "Recharge",
      amount: 200.0,
      source: "Mastercard *5678",
      status: "Completed",
    },
  ];

  const handleRecharge = () => {
    navigate("/dashboard/wallet/recharge");
  };

  return (
    <div className="wallet-page-container">
      <Sidebar userData={userData} />

      <main className="wallet-main-content">
        <header className="wallet-page-header">
          <div>
            <h1>Wallet & Payments</h1>
            <p>Manage your wallet and payment transactions</p>
          </div>
        </header>

        <section className="wallet-balance-card">
          <div className="wallet-balance-content">
            <h3 className="wallet-balance-title">Wallet Balance</h3>
            <p className="wallet-balance-value">{walletBalance.toLocaleString()}</p>
            <p className="wallet-balance-subtitle">Available balance</p>
          </div>
          <button
            type="button"
            className="wallet-recharge-btn"
            onClick={handleRecharge}
          >
            + Recharge Wallet
          </button>
        </section>

        <div className="wallet-filters-summary-row">
          <section className="wallet-filters-card">
            <h3 className="wallet-card-title">Transaction Filters</h3>
            <div className="wallet-filters-row">
              <div className="wallet-filter-group">
                <label htmlFor="date-range">Date Range</label>
                <input
                  id="date-range"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="wallet-input wallet-input-date"
                />
              </div>
              <div className="wallet-filter-group">
                <label htmlFor="transaction-type">Transaction Type</label>
                <select
                  id="transaction-type"
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="wallet-select"
                >
                  <option value="All Types">All Types</option>
                  <option value="Fare">Fare</option>
                  <option value="Recharge">Recharge</option>
                  <option value="Fine">Fine</option>
                </select>
              </div>
            </div>
          </section>

          <section className="wallet-summary-card">
            <h3 className="wallet-card-title">Summary</h3>
            <div className="wallet-summary-row">
              <span className="wallet-summary-label">Total Paid</span>
              <span className="wallet-summary-value wallet-summary-paid">
                ${summary.totalPaid.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="wallet-summary-row">
              <span className="wallet-summary-label">Total Fines</span>
              <span className="wallet-summary-value wallet-summary-fines">
                ${summary.totalFines.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </section>
        </div>

        <section className="wallet-transactions-card">
          <h3 className="wallet-card-title">Recent Transactions</h3>
          <div className="wallet-transactions-table-wrap">
            <table className="wallet-transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Source</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>{tx.date}</td>
                    <td>{tx.type}</td>
                    <td className={tx.amount >= 0 ? "wallet-amount-positive" : "wallet-amount-negative"}>
                      {tx.amount >= 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                    <td>{tx.source}</td>
                    <td>
                      <span className="wallet-status-badge wallet-status-completed">
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

export default WalletPage;
