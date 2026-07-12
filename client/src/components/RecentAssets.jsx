function RecentAssets() {

    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    return (

        <div
            style={{
                background: "white",
                marginTop: "35px",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)"
            }}
        >

            <h2>Recent Assets</h2>

            <table width="100%">

                <thead>

                    <tr>

                        <th>Asset</th>

                        <th>Department</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        assets.slice(0, 5).map(asset => (

                            <tr key={asset.id}>

                                <td>{asset.assetName}</td>

                                <td>{asset.department}</td>

                                <td>

                                    <span
                                        style={{
                                            background:
                                                asset.status === "Available"
                                                    ? "green" : "orange",

                                            color: "white",

                                            padding: "6px 12px",

                                            borderRadius: "20px"
                                        }}
                                    >

                                        {asset.status}

                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentAssets;