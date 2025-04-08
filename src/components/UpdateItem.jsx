import React, { useState } from "react";

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    const [updateName, setUpdateName] = useState(item.name);
    const [message, setMessage] = useState("");

    // 2. Create a function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/${item.id}`;

        try{
            const response = await fetch(API_URI, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                },

                body: JSON.stringify({...item, name: updateName}),
            });

            if(response.ok){
                const data = await response.json();
                setMessage("Item updated successfully");
            } else {
                setMessage("Failed to update ")
            }
        }

        catch(error){
            console.error("Update failed", error);
            setMessage("Failed to Update the item.");
        }
    };
    // 3. Create a function to handle the form input changes
    const handleChange = (e) => {
        setUpdateName(e.target.value);
    };

    // your code here
    return(
        <div>
            <h2>Edit Door</h2>
            <p>Current Name: {item.name}</p>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={updateName}
                onChange={handleChange}
                placeholder="Enter new name"
                />

                <button type = "submit">Update</button>

            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateItem;

