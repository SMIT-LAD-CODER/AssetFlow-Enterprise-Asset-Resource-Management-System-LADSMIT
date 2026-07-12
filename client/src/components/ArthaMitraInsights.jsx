import { analyzeEnterprise } from "../services/aiEngine";

function ArthaMitraInsights() {
    const ai = analyzeEnterprise();
    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    const employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    const availableAssets =
        assets.filter(a => a.status === "Available").length;

    const assignedAssets =
        assets.filter(a => a.status === "Assigned").length;

    const maintenanceAssets =
        assets.filter(a => a.status === "Maintenance").length;

    const efficiency =
        assets.length === 0
            ? 100
            : Math.round((assignedAssets / assets.length) * 100);

    return (

        <div
            style={{
                marginTop: "35px",
                background: "#ffffff",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)"
            }}
        >

            <h2>🧠 ArthaMitra Decision Engine</h2>

            <p>
                Smart AI-powered recommendations based on your enterprise data.
            </p>

            <br />

            <h3>📊 Resource Efficiency</h3>

            <div
                style={{
                    width: "100%",
                    background: "#e5e7eb",
                    height: "18px",
                    borderRadius: "30px",
                    overflow: "hidden"
                }}
            >

                <div
                    style={{
                        width: `${efficiency}%`,
                        height: "100%",
                        background:
                            "linear-gradient(90deg,#10B981,#3B82F6,#8B5CF6)"
                    }}
                />

            </div>

            <h2>{efficiency}%</h2>

            <hr />

            <h3>⚠ Smart Alerts</h3>

            <ul>

                <li>Available Assets : {availableAssets}</li>

                <li>Assigned Assets : {assignedAssets}</li>

                <li>Maintenance Assets : {maintenanceAssets}</li>

                <li>Total Employees : {employees.length}</li>

            </ul>

            <hr />

            <h3>🧠 AI Recommendations</h3>

            <ul>

                {
                    availableAssets > 3 &&
                    <li>📦 Several assets are idle. Consider reallocating them.</li>
                }

                {
                    maintenanceAssets > 0 &&
                    <li>🛠 Schedule maintenance for pending assets.</li>
                }

                {
                    employees.length > assets.length &&
                    <li>👨 Purchase additional laptops for employees.</li>
                }

                {
                    assignedAssets > availableAssets &&
                    <li>✅ Asset utilization is healthy.</li>
                }

            </ul>

            <div
                style={{
                    marginTop: "20px",
                    background: "#ECFDF5",
                    padding: "15px",
                    borderRadius: "12px"
                }}
            >

                <h3 style={{ color: "#065F46" }}>
                    🟢 Overall System Status
                </h3>

                <p>
                    Organization resources are operating efficiently.
                </p>

            </div>

        </div>

    );

}

export default ArthaMitraInsights;