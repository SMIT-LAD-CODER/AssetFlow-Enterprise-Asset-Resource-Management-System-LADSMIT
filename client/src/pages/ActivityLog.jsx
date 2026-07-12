function ActivityLog() {

    const logs =
        JSON.parse(localStorage.getItem("activityLogs")) || [];

    return (

        <div style={{ padding: "30px" }}>

            <h1>Activity Log</h1>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
            >

                <thead>

                    <tr>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Asset</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        logs.length === 0 ?

                            <tr>

                                <td
                                    colSpan="3"
                                    style={{ textAlign: "center" }}
                                >
                                    No activity available.
                                </td>

                            </tr>

                            :

                            logs
                                .slice()
                                .reverse()
                                .map((log) => (

                                    <tr key={log.id}>

                                        <td>{log.time}</td>

                                        <td>{log.action}</td>

                                        <td>{log.asset}</td>

                                    </tr>

                                ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ActivityLog;