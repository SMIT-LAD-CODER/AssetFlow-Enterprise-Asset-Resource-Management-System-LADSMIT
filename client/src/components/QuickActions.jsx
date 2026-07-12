import { useNavigate } from "react-router-dom";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <div
            style={{

                display: "flex",

                gap: "20px",

                marginTop: "35px",

                flexWrap: "wrap"

            }}
        >

            <button onClick={() => navigate("/assets")}>
                📦 Assets
            </button>

            <button onClick={() => navigate("/employees")}>
                👨 Employees
            </button>

            <button onClick={() => navigate("/departments")}>
                🏢 Departments
            </button>

            <button onClick={() => navigate("/bookings")}>
                📅 Bookings
            </button>

            <button onClick={() => navigate("/maintenance")}>
                🛠 Maintenance
            </button>

            <button onClick={() => navigate("/activity")}>
                📜 Activity
            </button>

        </div>

    );

}

export default QuickActions;