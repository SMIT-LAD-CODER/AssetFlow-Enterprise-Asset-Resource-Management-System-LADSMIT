import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const assetData = [
    { department: "IT", assets: 30 },
    { department: "HR", assets: 12 },
    { department: "Finance", assets: 20 },
    { department: "Sales", assets: 18 },
    { department: "Admin", assets: 10 },
];

const monthlyData = [
    { month: "Jan", bookings: 5 },
    { month: "Feb", bookings: 8 },
    { month: "Mar", bookings: 12 },
    { month: "Apr", bookings: 16 },
    { month: "May", bookings: 14 },
    { month: "Jun", bookings: 22 },
];

const pieData = [
    { name: "Available", value: 45 },
    { name: "Assigned", value: 65 },
    { name: "Maintenance", value: 10 },
];

const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
];

function DashboardCharts() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                gap: "25px",
                marginTop: "35px",
            }}
        >
            {/* Bar Chart */}

            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <h3>Assets by Department</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={assetData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="assets" fill="#6366F1" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Line Chart */}

            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <h3>Monthly Bookings</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="bookings"
                            stroke="#3B82F6"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Chart */}

            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <h3>Asset Status</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>

                        <Pie
                            data={pieData}
                            dataKey="value"
                            outerRadius={90}
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                    </PieChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default DashboardCharts;
