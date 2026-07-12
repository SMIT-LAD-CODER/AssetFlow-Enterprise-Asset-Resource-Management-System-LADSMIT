function DashboardCard({ title, value, icon }) {
    return (
        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >
            <h3>{icon} {title}</h3>

            <h1>{value}</h1>
        </div>
    );
}

export default DashboardCard;