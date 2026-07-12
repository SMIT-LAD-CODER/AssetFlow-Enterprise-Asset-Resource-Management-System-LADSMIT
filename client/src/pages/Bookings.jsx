import { useState } from "react";

function Bookings() {

    const employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    const [employee, setEmployee] = useState("");
    const [resource, setResource] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [status, setStatus] = useState("Pending");

    const [search, setSearch] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const [bookings, setBookings] = useState(
        JSON.parse(localStorage.getItem("bookings")) || []
    );

    const saveBookings = (data) => {
        setBookings(data);
        localStorage.setItem(
            "bookings",
            JSON.stringify(data)
        );
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !employee ||
            !resource ||
            !date ||
            !time
        ) {
            alert("Please fill all fields");
            return;
        }

        let updated;

        if (isEditing) {

            updated = bookings.map((booking) =>
                booking.id === editId
                    ? {
                        ...booking,
                        employee,
                        resource,
                        date,
                        time,
                        status
                    }
                    : booking
            );

            setIsEditing(false);
            setEditId(null);

        } else {

            updated = [
                ...bookings,
                {
                    id: Date.now(),
                    employee,
                    resource,
                    date,
                    time,
                    status
                }
            ];

        }

        saveBookings(updated);

        setEmployee("");
        setResource("");
        setDate("");
        setTime("");
        setStatus("Pending");

    };

    const editBooking = (booking) => {

        setEmployee(booking.employee);
        setResource(booking.resource);
        setDate(booking.date);
        setTime(booking.time);
        setStatus(booking.status);

        setEditId(booking.id);
        setIsEditing(true);

    };

    const deleteBooking = (id) => {

        saveBookings(
            bookings.filter(
                (booking) => booking.id !== id
            )
        );

    };

    return (

        <div>

            <h1>Resource Bookings</h1>

            <form onSubmit={handleSubmit}>

                <select
                    value={employee}
                    onChange={(e) =>
                        setEmployee(e.target.value)
                    }
                >

                    <option value="">
                        Select Employee
                    </option>

                    {
                        employees.map((emp) => (

                            <option
                                key={emp.id}
                                value={emp.name}
                            >
                                {emp.name}
                            </option>

                        ))
                    }

                </select>

                <select
                    value={resource}
                    onChange={(e) =>
                        setResource(e.target.value)
                    }
                >

                    <option value="">
                        Select Resource
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
                    type="date"
                    value={date}
                    onChange={(e) =>
                        setDate(e.target.value)
                    }
                />

                <input
                    type="time"
                    value={time}
                    onChange={(e) =>
                        setTime(e.target.value)
                    }
                />

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                >

                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Completed</option>

                </select>

                <button type="submit">

                    {
                        isEditing
                            ? "Update Booking"
                            : "Create Booking"
                    }

                </button>

            </form>

            <br />

            <input
                placeholder="Search Booking"
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

                        <th>Employee</th>

                        <th>Resource</th>

                        <th>Date</th>

                        <th>Time</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bookings

                            .filter((booking) =>
                                booking.employee
                                    .toLowerCase()
                                    .includes(
                                        search.toLowerCase()
                                    )
                            )

                            .map((booking) => (

                                <tr key={booking.id}>

                                    <td>{booking.employee}</td>

                                    <td>{booking.resource}</td>

                                    <td>{booking.date}</td>

                                    <td>{booking.time}</td>

                                    <td>{booking.status}</td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                editBooking(booking)
                                            }
                                        >
                                            ✏ Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteBooking(booking.id)
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

export default Bookings;