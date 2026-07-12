import { useState } from "react";

function Assets() {
    const [assetName, setAssetName] = useState("");
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");

    const [assets, setAssets] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!assetName || !category || !department) {
            alert("Please fill all fields");
            return;
        }

        const newAsset = {
            id: Date.now(),
            assetName,
            category,
            department,
            status: "Available",
        };

        setAssets([...assets, newAsset]);

        setAssetName("");
        setCategory("");
        setDepartment("");
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Asset Management</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Asset Name"
                    value={assetName}
                    onChange={(e) => setAssetName(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Asset
                </button>
            </form>

            <hr />

            <h2>Asset List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Category</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.id}>
                            <td>{asset.assetName}</td>
                            <td>{asset.category}</td>
                            <td>{asset.department}</td>
                            <td>{asset.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Assets;