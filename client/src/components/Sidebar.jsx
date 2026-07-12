import { NavLink } from "react-router-dom";

import {
    FaTachometerAlt,
    FaBoxOpen,
    FaUsers,
    FaBuilding,
    FaCalendarAlt,
    FaTools,
    FaClipboardList,
    FaUserCircle,
    FaCog,
} from "react-icons/fa";

function Sidebar() {
    const menuStyle = ({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        color: isActive ? "#ffffff" : "#d1d5db",
        padding: "12px 16px",
        borderRadius: "12px",
        marginBottom: "10px",
        fontWeight: "500",
        background: isActive
            ? "linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)"
            : "transparent",
        boxShadow: isActive ? "0 4px 15px rgba(99,102,241,.35)" : "none",
        transition: "all .3s ease",
    });

    return (
        <div
            style={{
                width: "260px",
                minHeight: "100vh",
                background:
                    "linear-gradient(180deg,#020617,#0f172a,#1e1b4b,#312e81)",
                color: "white",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "5px 0 20px rgba(0,0,0,.35)",
            }}
        >
            {/* Logo */}
            <div>
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "30px",
                    }}
                >
                    <div
                        style={{
                            width: "65px",
                            height: "65px",
                            borderRadius: "50%",
                            margin: "0 auto",
                            background:
                                "linear-gradient(135deg,#3b82f6,#6366f1,#8b5cf6,#ec4899)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "28px",
                            boxShadow: "0 0 20px rgba(99,102,241,.6)",
                        }}
                    >
                        🚀
                    </div>

                    <h2
                        style={{
                            marginTop: "12px",
                            marginBottom: "5px",
                        }}
                    >
                        AssetFlow
                    </h2>

                    <small style={{ color: "#94a3b8" }}>
                        Enterprise ERP
                    </small>
                </div>

                {/* Main Navigation */}
                <p
                    style={{
                        color: "#64748b",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        marginBottom: "15px",
                    }}
                >
                    Main Menu
                </p>

                <NavLink to="/dashboard" style={menuStyle}>
                    <FaTachometerAlt />
                    Dashboard
                </NavLink>

                <NavLink to="/assets" style={menuStyle}>
                    <FaBoxOpen />
                    Assets
                </NavLink>

                <NavLink to="/employees" style={menuStyle}>
                    <FaUsers />
                    Employees
                </NavLink>

                <NavLink to="/departments" style={menuStyle}>
                    <FaBuilding />
                    Departments
                </NavLink>

                <NavLink to="/bookings" style={menuStyle}>
                    <FaCalendarAlt />
                    Bookings
                </NavLink>

                <NavLink to="/maintenance" style={menuStyle}>
                    <FaTools />
                    Maintenance
                </NavLink>

                <NavLink to="/activity" style={menuStyle}>
                    <FaClipboardList />
                    Activity Log
                </NavLink>

                <hr
                    style={{
                        border: "1px solid #334155",
                        margin: "25px 0",
                    }}
                />

                <p
                    style={{
                        color: "#64748b",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        marginBottom: "15px",
                    }}
                >
                    Account
                </p>

                <NavLink to="/profile" style={menuStyle}>
                    <FaUserCircle />
                    Profile
                </NavLink>

                <NavLink to="/settings" style={menuStyle}>
                    <FaCog />
                    Settings
                </NavLink>
            </div>

            {/* Bottom Card */}
            <div
                style={{
                    marginTop: "20px",
                    background: "rgba(255,255,255,.06)",
                    borderRadius: "18px",
                    padding: "18px",
                    border: "1px solid rgba(255,255,255,.08)",
                }}
            >
                <h4 style={{ marginTop: 0 }}>
                    🤖 AI Copilot
                </h4>

                <p
                    style={{
                        fontSize: "13px",
                        color: "#cbd5e1",
                        lineHeight: "20px",
                    }}
                >
                    Smart assistant for assets, employees and analytics.
                </p>

                <button
                    style={{
                        width: "100%",
                        marginTop: "12px",
                        padding: "10px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "white",
                        fontWeight: "bold",
                        background:
                            "linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)",
                    }}
                >
                    Coming Soon 🚀
                </button>
            </div>
        </div>
    );
}

export default Sidebar;