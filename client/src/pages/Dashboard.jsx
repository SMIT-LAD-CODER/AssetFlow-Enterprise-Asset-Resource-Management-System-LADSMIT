import DashboardCard from "../components/DashboardCard";
import RecentAssets from "../components/RecentAssets";
import QuickActions from "../components/QuickActions";
import DashboardCharts from "../components/DashboardCharts";
import ArthaMitraInsights from "../components/ArthaMitraInsights";
import AIPriorityPanel from "../components/AIPriorityPanel";
import PredictiveMaintenance from "../components/PredictiveMaintenance";

import { analyzeEnterprise } from "../services/aiEngine";
import {
    FaBoxOpen,
    FaUsers,
    FaTools,
    FaCalendarCheck
} from "react-icons/fa";

function Dashboard() {
    const ai = analyzeEnterprise();
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
                    value={ai.totalAssets}
                    icon={<FaBoxOpen size={28} />}
                />

                <DashboardCard
                    title="Employees"
                    value={ai.totalEmployees}
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


            </div>

            <QuickActions />

            <RecentAssets />


            <ArthaMitraInsights />

            <AIPriorityPanel />

            <PredictiveMaintenance />


        </div>

    );

}

export default Dashboard;