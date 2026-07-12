import DashboardCard from "../components/DashboardCard";

function Dashboard() {
    return (
        <div style={{ padding: "30px" }}>

            <h1>Dashboard</h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "20px",
                }}
            >

                <DashboardCard
                    title="Total Assets"
                    value="120"
                    icon="📦"
                />

                <DashboardCard
                    title="Employees"
                    value="45"
                    icon="👨"
                />

                <DashboardCard
                    title="Bookings"
                    value="18"
                    icon="📅"
                />

                <DashboardCard
                    title="Maintenance"
                    value="6"
                    icon="🛠"
                />

            </div>

        </div>
    );
}

export default Dashboard;