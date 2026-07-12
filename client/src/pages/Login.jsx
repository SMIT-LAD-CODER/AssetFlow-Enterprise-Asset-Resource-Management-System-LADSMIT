function Login() {
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
            <div
                style={{
                    width: "350px",
                    padding: "30px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                }}
            >
                <h2>🚀 AssetFlow</h2>
                <p>Enterprise Asset & Resource Management</p>

                <input
                    type="email"
                    placeholder="Email"
                    style={{ width: "100%", padding: "10px", marginTop: "15px" }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={{ width: "100%", padding: "10px", marginTop: "15px" }}
                />

                <button
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

                <hr />

                <small>
                    Demo Login:
                    <br />
                    admin@assetflow.com
                </small>
            </div>
        </div>
    );
}

export default Login;