
import React, { useState } from "react";
import "./Student.css";

function Student() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(
            "Student Details Submitted Successfully!\n" +
            "Name: " + name +
            "\nDepartment: " + department +
            "\nAge: " + age
        );
    }

    return (
        <div className="container">
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />

                <label>Department:</label>
                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter department"
                    required
                />

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Student;
