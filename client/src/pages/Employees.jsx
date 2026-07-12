import { useState } from "react";


function Employees() {


    const [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employees")) || []
    );


    const [editId, setEditId] = useState(null);


    const [search, setSearch] = useState("");


    const [employee, setEmployee] = useState({

        name: "",
        email: "",
        phone: "",
        department: "",
        designation: ""

    });



    const handleChange = (e) => {

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    };




    const saveEmployee = (e) => {

        e.preventDefault();


        let updatedEmployees;


        if (editId) {

            updatedEmployees = employees.map((emp) =>

                emp.id === editId

                    ?

                    {
                        ...emp,
                        ...employee
                    }

                    :

                    emp

            );


            setEditId(null);


        }

        else {


            updatedEmployees = [

                ...employees,

                {

                    id: Date.now(),

                    ...employee

                }

            ];

        }



        setEmployees(updatedEmployees);


        localStorage.setItem(
            "employees",
            JSON.stringify(updatedEmployees)
        );



        setEmployee({

            name: "",
            email: "",
            phone: "",
            department: "",
            designation: ""

        });


    };





    const deleteEmployee = (id) => {


        const updatedEmployees =
            employees.filter(
                emp => emp.id !== id
            );


        setEmployees(updatedEmployees);


        localStorage.setItem(
            "employees",
            JSON.stringify(updatedEmployees)
        );


    };






    const editEmployee = (emp) => {


        setEmployee({

            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            department: emp.department,
            designation: emp.designation

        });


        setEditId(emp.id);


    };






    const filteredEmployees =
        employees.filter((emp) =>

            emp.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );




    return (

        <div style={{ padding: "30px" }}>


            <h1>
                Employee Management
            </h1>



            <form onSubmit={saveEmployee}>


                <input
                    name="name"
                    placeholder="Employee Name"
                    value={employee.name}
                    onChange={handleChange}
                />

                <br /><br />


                <input
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                />

                <br /><br />


                <input
                    name="phone"
                    placeholder="Phone"
                    value={employee.phone}
                    onChange={handleChange}
                />

                <br /><br />


                <input
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                />

                <br /><br />


                <input
                    name="designation"
                    placeholder="Designation"
                    value={employee.designation}
                    onChange={handleChange}
                />

                <br /><br />


                <button>

                    {
                        editId
                            ?
                            "Update Employee"
                            :
                            "Add Employee"
                    }

                </button>


            </form>



            <hr />


            <h2>
                Employee List
            </h2>



            <input

                placeholder="Search Employee"

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

            />



            <br /><br />




            {
                filteredEmployees.map((emp) => (


                    <div
                        key={emp.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            margin: "10px"
                        }}
                    >

                        <h3>
                            {emp.name}
                        </h3>


                        <p>
                            {emp.email}
                        </p>


                        <p>
                            {emp.department}
                        </p>


                        <p>
                            {emp.designation}
                        </p>



                        <button
                            onClick={() =>
                                editEmployee(emp)
                            }
                        >
                            Edit
                        </button>



                        <button
                            onClick={() =>
                                deleteEmployee(emp.id)
                            }
                        >
                            Delete
                        </button>



                    </div>


                ))
            }



        </div>

    );


}


export default Employees;