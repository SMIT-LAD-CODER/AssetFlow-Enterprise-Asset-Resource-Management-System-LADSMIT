function DashboardCard({ title, value, icon }) {

    return (

        <div
            style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <div>

                <h3>{title}</h3>

                <h1>{value}</h1>

            </div>

            <div
                style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "18px",
                    borderRadius: "50%"
                }}
            >
                {icon}
            </div>

        </div>

    );

}

export default DashboardCard;