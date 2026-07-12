import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { analyzeEnterprise } from "../services/aiEngine";

function AICopilot() {

    const ai = analyzeEnterprise();
    const [open, setOpen] = useState(false);

    const [question, setQuestion] = useState("");

    const getAnswer = () => {

        if (question.toLowerCase().includes("asset"))
            return `There are currently ${ai.totalAssets} assets in the organization.`;

        if (question.toLowerCase().includes("employee"))
            return `👨 Employees : ${ai.totalEmployees}`;

        if (question.toLowerCase().includes("booking"))
            return `📅 Bookings : ${ai.totalBookings}`;

        if (question.toLowerCase().includes("maintenance"))
            return `🛠 Maintenance Requests : ${ai.totalMaintenanceRequests}`;

        if (question.toLowerCase().includes("department"))
            return `🏢 Departments : ${ai.totalDepartments}`;

        return "🤖 I can answer questions about Assets, Employees, Bookings, Departments and Maintenance.";
    }

    return (

        <>

            <button

                onClick={() => setOpen(!open)}

                style={{

                    position: "fixed",

                    bottom: "25px",

                    right: "25px",

                    width: "70px",

                    height: "70px",

                    borderRadius: "50%",

                    border: "none",

                    fontSize: "28px",

                    cursor: "pointer",

                    background: "linear-gradient(135deg,#2563EB,#8B5CF6)",

                    color: "white",

                    boxShadow: "0 0 25px rgba(99,102,241,.6)",

                    zIndex: 999

                }}

            >

                <FaRobot size={30} />

            </button>

            {

                open &&

                <div

                    style={{

                        position: "fixed",

                        bottom: "110px",

                        right: "25px",

                        width: "330px",

                        background: "white",

                        borderRadius: "20px",

                        padding: "20px",

                        boxShadow: "0 20px 40px rgba(0,0,0,.25)",

                        zIndex: 999

                    }}

                >

                    <h3>🤖ArthaMitra </h3>

                    <p>

                        Hello Smit 👋

                    </p>

                    <input

                        placeholder="Ask anything..."

                        value={question}

                        onChange={(e) => setQuestion(e.target.value)}

                        style={{

                            width: "100%",

                            padding: "12px",

                            borderRadius: "10px",

                            marginBottom: "15px"

                        }}

                    />

                    <div

                        style={{

                            background: "#EEF2FF",

                            padding: "15px",

                            borderRadius: "10px",

                            minHeight: "70px"

                        }}

                    >

                        {question === "" ?

                            "Examples:\n\nHow many assets?\nEmployees\nBookings\nMaintenance"

                            : getAnswer()

                        }

                    </div>

                </div>

            }

        </>

    )

}

export default AICopilot;