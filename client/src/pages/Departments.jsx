import { useState } from "react";

function Departments() {

    const [departmentName, setDepartmentName] = useState("");
    const [manager, setManager] = useState("");
    const [description, setDescription] = useState("");

    const [search, setSearch] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const [departments, setDepartments] = useState(
        JSON.parse(localStorage.getItem("departments")) || [
            {
                id: 1,
                departmentName: "IT",
                manager: "Rahul Patel",
                description: "Software Development"
            },
            {
                id: 2,
                departmentName: "HR",
                manager: "Priya Shah",
                description: "Human Resources"
            }
        ]
    );

    const saveDepartments = (data) => {
        setDepartments(data);
        localStorage.setItem(
            "departments",
            JSON.stringify(data)
        );
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !departmentName ||
            !manager ||
            !description
        ) {
            alert("Fill all fields");
            return;
        }

        let updatedDepartments;

        if (isEditing) {

            updatedDepartments = departments.map((dept) =>
                dept.id === editId
                    ? {
                        ...dept,
                        departmentName,
                        manager,
                        description
                    }
                    : dept
            );

            setIsEditing(false);
            setEditId(null);

        } else {

            updatedDepartments = [
                ...departments,
                {
                    id: Date.now(),
                    departmentName,
                    manager,
                    description
                }
            ];

        }

        saveDepartments(updatedDepartments);

        setDepartmentName("");
        setManager("");
        setDescription("");

    };

    const editDepartment = (dept) => {

        setDepartmentName(dept.departmentName);
        setManager(dept.manager);
        setDescription(dept.description);

        setEditId(dept.id);
        setIsEditing(true);

    };

    const deleteDepartment = (id) => {

        saveDepartments(
            departments.filter(
                dept => dept.id !== id
            )
        );

    };

    return (

        <div>

            <h1>Department Management</h1>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Department Name"
                    value={departmentName}
                    onChange={(e) =>
                        setDepartmentName(e.target.value)
                    }
                />

                <input
                    placeholder="Department Head"
                    value={manager}
                    onChange={(e) =>
                        setManager(e.target.value)
                    }
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <button type="submit">

                    {
                        isEditing
                            ? "Update Department"
                            : "Add Department"
                    }

                </button>

            </form>

            <br />

            <input

                placeholder="Search Department"

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

                        <th>Name</th>

                        <th>Head</th>

                        <th>Description</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        departments

                            .filter((dept) =>
                                dept.departmentName
                                    .toLowerCase()
                                    .includes(
                                        search.toLowerCase()
                                    )
                            )

                            .map((dept) => (

                                <tr key={dept.id}>

                                    <td>
                                        {dept.departmentName}
                                    </td>

                                    <td>
                                        {dept.manager}
                                    </td>

                                    <td>
                                        {dept.description}
                                    </td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                editDepartment(dept)
                                            }
                                        >
                                            ✏ Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteDepartment(dept.id)
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

export default Departments;