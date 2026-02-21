// src/pages/Auth/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user"); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "user") {
      console.log("User Login:", formData);
      // Redirect to User Dashboard
      navigate("/dashboard");
    } else {
      console.log("Admin Login:", formData);
      // Redirect to Admin Dashboard
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="login-page">
      {/* Background decoration */}
      <div className="login-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Login Container */}
      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-branding">
          <div className="branding-content">
            <div className="brand-logo">
              <span className="logo-text">GatePass</span>
            </div>

            <h1 className="branding-title">
              Welcome Back to
              <br />
              GatePass
            </h1>

            <p className="branding-description">
              Secure access to Egypt's automated vehicle gate payment system.
              Login to manage your account and vehicle transactions.
            </p>

            <div className="branding-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Secure Authentication</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Bank-Level Encryption</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="branding-badge">
              🇪🇬 Official Government Platform
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form-section">
          <div className="form-wrapper">
            {/* Tab Switcher */}
            <div className="login-tabs">
              <button
                className={`tab-button ${activeTab === "user" ? "active" : ""}`}
                onClick={() => setActiveTab("user")}
              >
                <span className="tab-icon">👤</span>
                <span className="tab-label">User Login</span>
              </button>
              <button
                className={`tab-button ${
                  activeTab === "admin" ? "active" : ""
                }`}
                onClick={() => setActiveTab("admin")}
              >
                <span className="tab-icon">👨‍💼</span>
                <span className="tab-label">Administrator</span>
              </button>
            </div>

            {/* Form Header */}
            <div className="form-header">
              <h2 className="form-title">
                {activeTab === "user" ? "User Sign In" : "Administrator Access"}
              </h2>
              <p className="form-subtitle">
                {activeTab === "user"
                  ? "Enter your credentials to access your dashboard"
                  : "Authorized personnel only - secure admin access"}
              </p>
            </div>

            {/* Login Form */}
            <form className="login-form" onSubmit={handleSubmit}>
              {/* Email/Username Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  {activeTab === "user" ? "Email Address" : "Admin Username"}
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder={
                      activeTab === "user"
                        ? "Enter your email"
                        : "Enter admin username"
                    }
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <a href="/forgot-password" className="forgot-link">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                {activeTab === "user"
                  ? "Sign In to Dashboard"
                  : "Access Admin Panel"}
                <span className="button-arrow">→</span>
              </button>

              {/* Divider */}
              {activeTab === "user" && (
                <>
                  <div className="form-divider">
                    <span>OR</span>
                  </div>

                  {/* Sign Up Link */}
                  <div className="signup-prompt">
                    <p>
                      Don't have an account?{" "}
                      <a href="/signup" className="signup-link">
                        Create Account
                      </a>
                    </p>
                  </div>
                </>
              )}

              {/* Admin Security Notice */}
              {activeTab === "admin" && (
                <div className="admin-notice">
                  <span className="notice-icon">⚠️</span>
                  <p>
                    This area is restricted to authorized administrators only.
                    All access attempts are logged and monitored.
                  </p>
                </div>
              )}
            </form>

            {/* Back to Home Link */}
            <div className="back-home">
              <button onClick={() => navigate("/")} className="home-link">
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Footer */}
      <div className="login-footer">
        <div className="footer-badges">
          <div className="badge-item">
            <span className="badge-icon">🔒</span>
            <span>SSL Secured</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">✓</span>
            <span>Government Certified</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🛡️</span>
            <span>Bank-Grade Security</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
