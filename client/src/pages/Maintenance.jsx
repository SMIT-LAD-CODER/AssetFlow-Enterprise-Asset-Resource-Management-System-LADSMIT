import { useState } from "react";

function Maintenance() {

    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    const [assetName, setAssetName] = useState("");
    const [issue, setIssue] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [status, setStatus] = useState("Pending");

    const [search, setSearch] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const [requests, setRequests] = useState(
        JSON.parse(localStorage.getItem("maintenance")) || []
    );

    const saveRequests = (data) => {
        setRequests(data);
        localStorage.setItem(
            "maintenance",
            JSON.stringify(data)
        );
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!assetName || !issue) {
            alert("Please fill all fields");
            return;
        }

        let updated;

        if (isEditing) {

            updated = requests.map((req) =>
                req.id === editId
                    ? {
                        ...req,
                        assetName,
                        issue,
                        priority,
                        status
                    }
                    : req
            );

            setIsEditing(false);
            setEditId(null);

        } else {

            updated = [
                ...requests,
                {
                    id: Date.now(),
                    assetName,
                    issue,
                    priority,
                    status
                }
            ];

        }

        saveRequests(updated);

        setAssetName("");
        setIssue("");
        setPriority("Medium");
        setStatus("Pending");

    };

    const editRequest = (req) => {

        setAssetName(req.assetName);
        setIssue(req.issue);
        setPriority(req.priority);
        setStatus(req.status);

        setEditId(req.id);
        setIsEditing(true);

    };

    const deleteRequest = (id) => {

        saveRequests(
            requests.filter(
                (req) => req.id !== id
            )
        );

    };

    return (

        <div>

            <h1>Maintenance Management</h1>

            <form onSubmit={handleSubmit}>

                <select
                    value={assetName}
                    onChange={(e) =>
                        setAssetName(e.target.value)
                    }
                >

                    <option value="">
                        Select Asset
                    </option>

                    {
                        assets.map((asset) => (

                            <option
                                key={asset.id}
                                value={asset.assetName}
                            >
                                {asset.assetName}
                            </option>

                        ))
                    }

                </select>

                <input
                    placeholder="Issue"
                    value={issue}
                    onChange={(e) =>
                        setIssue(e.target.value)
                    }
                />

                <select
                    value={priority}
                    onChange={(e) =>
                        setPriority(e.target.value)
                    }
                >

                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>

                </select>

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                >

                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>

                </select>

                <button type="submit">

                    {
                        isEditing
                            ? "Update"
                            : "Raise Request"
                    }

                </button>

            </form>

            <br />

            <input
                placeholder="Search Asset"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <br />
            <br />

            <table>

                <thead>

                    <tr>

                        <th>Asset</th>

                        <th>Issue</th>

                        <th>Priority</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        requests

                            .filter((req) =>
                                req.assetName
                                    .toLowerCase()
                                    .includes(
                                        search.toLowerCase()
                                    )
                            )

                            .map((req) => (

                                <tr key={req.id}>

                                    <td>{req.assetName}</td>

                                    <td>{req.issue}</td>

                                    <td>{req.priority}</td>

                                    <td>{req.status}</td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                editRequest(req)
                                            }
                                        >
                                            ✏ Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteRequest(req.id)
                                            }
                                        >
                                            🗑 Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Maintenance;