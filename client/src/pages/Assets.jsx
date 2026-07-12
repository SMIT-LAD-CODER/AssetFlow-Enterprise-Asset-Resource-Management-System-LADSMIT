import { useState } from "react";

function Assets() {


    const employees =
        JSON.parse(localStorage.getItem("employees")) || [];



    const [assets, setAssets] = useState(

        JSON.parse(localStorage.getItem("assets")) ||

        [
            {
                id: 1,
                assetName: "Dell Latitude 5430",
                category: "Laptop",
                department: "IT",
                assignedTo: "Not Assigned",
                status: "Available"
            },

            {
                id: 2,
                assetName: "HP LaserJet Pro",
                category: "Printer",
                department: "HR",
                assignedTo: "Not Assigned",
                status: "Available"
            }
        ]

    );



    const [assetName, setAssetName] = useState("");
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");
    const [assignedTo, setAssignedTo] = useState("");



    const [search, setSearch] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const [editId, setEditId] = useState(null);





    const saveAssets = (data) => {

        setAssets(data);

        localStorage.setItem(
            "assets",
            JSON.stringify(data)
        );

    };






    const handleSubmit = (e) => {

        e.preventDefault();



        if (
            !assetName ||
            !category ||
            !department
        ) {

            alert("Please fill all fields");

            return;

        }





        let updatedAssets;



        if (isEditing) {


            updatedAssets = assets.map((asset) =>

                asset.id === editId

                    ?

                    {

                        ...asset,

                        assetName,

                        category,

                        department,

                        assignedTo:
                            assignedTo || "Not Assigned",

                        status:
                            assignedTo
                                ?
                                "Assigned"
                                :
                                "Available"

                    }

                    :

                    asset

            );



            setIsEditing(false);

            setEditId(null);



        }


        else {


            const newAsset = {

                id: Date.now(),

                assetName,

                category,

                department,

                assignedTo:
                    assignedTo || "Not Assigned",


                status:
                    assignedTo
                        ?
                        "Assigned"
                        :
                        "Available"

            };



            updatedAssets = [
                ...assets,
                newAsset
            ];

        }




        saveAssets(updatedAssets);



        setAssetName("");

        setCategory("");

        setDepartment("");

        setAssignedTo("");

    };









    const editAsset = (asset) => {


        setAssetName(asset.assetName);

        setCategory(asset.category);

        setDepartment(asset.department);

        setAssignedTo(asset.assignedTo);


        setEditId(asset.id);

        setIsEditing(true);


    };








    const deleteAsset = (id) => {


        const updatedAssets =
            assets.filter(
                (asset) =>
                    asset.id !== id
            );


        saveAssets(updatedAssets);


    };








    return (

        <div style={{ padding: "30px" }}>


            <h1>
                Asset Management
            </h1>



            <form onSubmit={handleSubmit}>


                <input

                    placeholder="Asset Name"

                    value={assetName}

                    onChange={(e) =>
                        setAssetName(e.target.value)
                    }

                />


                <br /><br />




                <input

                    placeholder="Category"

                    value={category}

                    onChange={(e) =>
                        setCategory(e.target.value)
                    }

                />


                <br /><br />




                <input

                    placeholder="Department"

                    value={department}

                    onChange={(e) =>
                        setDepartment(e.target.value)
                    }

                />



                <br /><br />




                <select

                    value={assignedTo}

                    onChange={(e) =>
                        setAssignedTo(e.target.value)
                    }

                >

                    <option value="">
                        Assign Employee
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



                <br /><br />




                <button type="submit">

                    {
                        isEditing
                            ?
                            "Update Asset"
                            :
                            "Add Asset"
                    }

                </button>



            </form>





            <hr />





            <input

                placeholder="Search Asset..."

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

                style={{
                    padding: "10px",
                    width: "300px"
                }}

            />






            <h2>
                Asset List
            </h2>







            <table border="1" cellPadding="10">


                <thead>

                    <tr>

                        <th>
                            Asset
                        </th>


                        <th>
                            Category
                        </th>


                        <th>
                            Department
                        </th>


                        <th>
                            Assigned To
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Actions
                        </th>


                    </tr>


                </thead>






                <tbody>


                    {

                        assets

                            .filter((asset) =>

                                asset.assetName
                                    .toLowerCase()
                                    .includes(
                                        search.toLowerCase()
                                    )

                            )

                            .map((asset) => (


                                <tr key={asset.id}>


                                    <td>
                                        {asset.assetName}
                                    </td>


                                    <td>
                                        {asset.category}
                                    </td>


                                    <td>
                                        {asset.department}
                                    </td>



                                    <td>
                                        {asset.assignedTo}
                                    </td>



                                    <td>
                                        {asset.status}
                                    </td>




                                    <td>


                                        <button

                                            onClick={() =>
                                                editAsset(asset)
                                            }

                                        >

                                            ✏ Edit

                                        </button>




                                        <button

                                            onClick={() =>
                                                deleteAsset(asset.id)
                                            }

                                            style={{
                                                marginLeft: "10px"
                                            }}

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


export default Assets;