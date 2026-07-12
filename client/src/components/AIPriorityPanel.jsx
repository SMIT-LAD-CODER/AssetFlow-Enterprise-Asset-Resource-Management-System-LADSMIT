function AIPriorityPanel() {
    const assets = JSON.parse(localStorage.getItem("assets")) || [];
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const maintenance =
        JSON.parse(localStorage.getItem("maintenance")) || [];

    const assigned = assets.filter(
        (a) => a.status === "Assigned"
    ).length;

    const available = assets.filter(
        (a) => a.status === "Available"
    ).length;

    const maintenanceCount = maintenance.length;

    let priority = "Low";
    let color = "#22c55e";

    if (maintenanceCount >= 3) {
        priority = "High";
        color = "#ef4444";
    } else if (available < 2 || assigned > available) {
        priority = "Medium";
        color = "#f59e0b";
    }

    return (
        <div
            style={{
                background: "white",
                borderRadius: "18px",
                padding: "25px",
                marginTop: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
        >
            <h2>🧠 ArthaMitra AI Decision Center</h2>

            <p>
                Intelligent resource monitoring and recommendations.
            </p>

            <hr />

            <h3>Current Priority</h3>

            <div
                style={{
                    display: "inline-block",
                    background: color,
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
            >
                {priority}
            </div>

            <hr />

            <h3>🤖 AI Recommendations</h3>

            <ul style={{ lineHeight: "35px" }}>
                {available > 3 && (
                    <li>
                        📦 {available} assets are idle. Consider reallocating
                        them.
                    </li>
                )}

                {maintenanceCount > 0 && (
                    <li>
                        🛠 Schedule maintenance for pending assets.
                    </li>
                )}

                {employees.length > assets.length && (
                    <li>
                        💻 Purchase more laptops for new employees.
                    </li>
                )}

                {assigned > available && (
                    <li>
                        📈 Asset utilization is excellent.
                    </li>
                )}

                {assets.length === 0 && (
                    <li>Add assets to begin AI analysis.</li>
                )}
            </ul>

            <hr />

            <h3>Overall AI Status</h3>

            <div
                style={{
                    background: "#ecfdf5",
                    padding: "15px",
                    borderRadius: "12px",
                }}
            >
                🟢 Enterprise Resources are Stable
            </div>
        </div>
    );
}

export default AIPriorityPanel;