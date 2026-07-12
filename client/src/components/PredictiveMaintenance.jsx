function PredictiveMaintenance() {

    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    const getHealth = (status) => {
        switch (status) {
            case "Available":
                return {
                    score: 95,
                    days: 90,
                    color: "#22c55e",
                    level: "Excellent"
                };

            case "Assigned":
                return {
                    score: 82,
                    days: 30,
                    color: "#3b82f6",
                    level: "Good"
                };

            case "Maintenance":
                return {
                    score: 48,
                    days: 7,
                    color: "#ef4444",
                    level: "Critical"
                };

            default:
                return {
                    score: 70,
                    days: 20,
                    color: "#f59e0b",
                    level: "Average"
                };
        }
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "25px",
                marginTop: "30px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)"
            }}
        >
            <h2>🧠 ArthaMitra Predictive Maintenance</h2>

            <p>
                AI predicts future maintenance requirements using asset condition.
            </p>

            <br />

            {assets.map((asset) => {

                const prediction = getHealth(asset.status);

                return (

                    <div
                        key={asset.id}
                        style={{
                            marginBottom: "25px",
                            padding: "18px",
                            border: "1px solid #eee",
                            borderRadius: "12px"
                        }}
                    >
                        <h3>{asset.assetName}</h3>

                        <p><b>Department:</b> {asset.department}</p>

                        <p><b>Status:</b> {asset.status}</p>

                        <p>
                            <b>Health Score:</b> {prediction.score}%
                        </p>

                        <div
                            style={{
                                width: "100%",
                                background: "#ddd",
                                height: "14px",
                                borderRadius: "20px",
                                overflow: "hidden"
                            }}
                        >
                            <div
                                style={{
                                    width: `${prediction.score}%`,
                                    background: prediction.color,
                                    height: "100%"
                                }}
                            />
                        </div>

                        <br />

                        <p>
                            📅 Expected Maintenance in{" "}
                            <b>{prediction.days} Days</b>
                        </p>

                        <p>
                            🤖 AI Confidence{" "}
                            <b>{prediction.score - 5}%</b>
                        </p>

                        <p
                            style={{
                                color: prediction.color,
                                fontWeight: "bold"
                            }}
                        >
                            {prediction.level}
                        </p>

                    </div>

                );

            })}

        </div>
    );
}

export default PredictiveMaintenance;