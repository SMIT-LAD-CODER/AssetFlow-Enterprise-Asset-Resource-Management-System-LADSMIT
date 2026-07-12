import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "lad.smit@assetflow.demo" || password === "AssetFlow@123") {
            navigate("/dashboard");
        }
        else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f7fa",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    width: "350px",
                    padding: "30px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <h2>🚀 AssetFlow</h2>
                <p>Enterprise Asset & Resource Management System</p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginTop: "15px" }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginTop: "15px" }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "20px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
                <p
                    style={{
                        marginTop: "20px",
                        fontSize: "14px",
                        color: "#555",
                        textAlign: "center",
                    }}
                >
                    <strong>Demo Login</strong>
                    <br />
                    Email: lad.smit@assetflow.demo
                    <br />
                    Password: AssetFlow@123
                </p>
            </form>
        </div>
    );
}

export default Login;