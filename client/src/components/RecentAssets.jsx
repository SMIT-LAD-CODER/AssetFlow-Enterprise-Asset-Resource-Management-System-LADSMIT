function RecentAssets() {
    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Recent Assets</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Dell Latitude 5430</td>
                        <td>IT</td>
                        <td>Assigned</td>
                    </tr>

                    <tr>
                        <td>HP LaserJet Printer</td>
                        <td>HR</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>Lenovo ThinkCentre</td>
                        <td>Finance</td>
                        <td>Maintenance</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RecentAssets;