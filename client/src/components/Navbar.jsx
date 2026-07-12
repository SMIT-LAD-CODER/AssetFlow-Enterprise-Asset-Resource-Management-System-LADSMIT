import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            style={{
                height: "70px",
                background: "linear-gradient(90deg,#0f172a,#1e293b,#312e81,#4c1d95)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 30px",
                color: "white",
                boxShadow: "0 5px 20px rgba(0,0,0,0.35)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            {/* Left Side */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div
                    style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background:
                            "linear-gradient(135deg,#38bdf8,#6366f1,#8b5cf6,#ec4899)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                        boxShadow: "0 0 18px rgba(99,102,241,0.6)",
                    }}
                >
                    🚀
                </div>

                <div>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "22px",
                            fontWeight: "700",
                            letterSpacing: "1px",
                        }}
                    >
                        AssetFlow
                    </h2>

                    <small
                        style={{
                            color: "#cbd5e1",
                        }}
                    >
                        Enterprise Asset Management
                    </small>
                </div>
            </div>

            {/* Search */}
            <div
                style={{
                    width: "350px",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "30px",
                    padding: "10px 18px",
                    backdropFilter: "blur(10px)",
                }}
            >
                <FaSearch color="#cbd5e1" />

                <input
                    placeholder="Search assets, employees..."
                    style={{
                        marginLeft: "12px",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "white",
                        width: "100%",
                        fontSize: "15px",
                    }}
                />
            </div>

            {/* Right Side */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "22px",
                }}
            >
                {/* Notification */}
                <div
                    style={{
                        position: "relative",
                        cursor: "pointer",
                    }}
                >
                    <FaBell size={22} />

                    <span
                        style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-6px",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#22c55e",
                        }}
                    ></span>
                </div>

                {/* User Profile */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "rgba(255,255,255,0.08)",
                        padding: "8px 16px",
                        borderRadius: "30px",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    <FaUserCircle size={35} />

                    <div>
                        <div
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            Smit Lad
                        </div>

                        <small
                            style={{
                                color: "#cbd5e1",
                            }}
                        >
                            Administrator
                        </small>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;