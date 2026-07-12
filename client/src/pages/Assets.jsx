import { useState } from "react";

function Assets() {
    const [assetName, setAssetName] = useState("");
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");

    const [assets, setAssets] = useState([{
        id: 1,
        assetName: "Dell Latitude 5430",
        category: "Laptop",
        department: "IT",
        status: "Assigned",
    },
    {
        id: 2,
        assetName: "HP LaserJet Pro",
        category: "Printer",
        department: "HR",
        status: "Available",
    },]);
    const [search, setSearch] = useState("");

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
            <input
                type="text"
                placeholder="Search Asset..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    marginBottom: "20px",
                }}
            />

            <h2>Asset List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Category</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {assets
                        .filter((asset) =>
                            asset.assetName.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((asset) => (
                            <tr key={asset.id}>
                                <td>{asset.assetName}</td>
                                <td>{asset.category}</td>
                                <td>{asset.department}</td>
                                <td>{asset.status}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setAssets(assets.filter((a) => a.id !== asset.id))
                                        }
                                    >
                                        🗑 Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Assets;