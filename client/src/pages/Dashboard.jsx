import DashboardCard from "../components/DashboardCard";
import RecentAssets from "../components/RecentAssets";
import QuickActions from "../components/QuickActions";
import DashboardCharts from "../components/DashboardCharts";
import ArthaMitraInsights from "../components/ArthaMitraInsights";
import {
    FaBoxOpen,
    FaUsers,
    FaTools,
    FaCalendarCheck
} from "react-icons/fa";

function Dashboard() {

    return (

        <div style={{ padding: "30px", background: "#f5f7fb", minHeight: "100vh" }}>

            <h1 style={{ marginBottom: "25px" }}>
                Dashboard
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px"
                }}
            >

                <DashboardCard
                    title="Total Assets"
                    value="120"
                    icon={<FaBoxOpen size={28} />}
                />

                <DashboardCard
                    title="Employees"
                    value="45"
                    icon={<FaUsers size={28} />}
                />

                <DashboardCard
                    title="Bookings"
                    value="18"
                    icon={<FaCalendarCheck size={28} />}
                />

                <DashboardCard
                    title="Maintenance"
                    value="6"
                    icon={<FaTools size={28} />}
                />

                <DashboardCharts />

                <ArthaMitraInsights />

            </div>

            <QuickActions />

            <RecentAssets />



        </div>

    );

}

export default Dashboard;