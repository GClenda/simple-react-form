
import React, { useState } from "react";
import animalsImage from "../../Assets/Images/animals.jpg"
import "./Form.css"


export default function Form() {
    const initialState = {
        firstName: "",
        lastName: "",
        donationType: "",
        quantity: '',
        date: "",
    };
    const [values, setValues] = useState(initialState)

    const [submitted, setSubmitted] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        setSubmitted(true);
    }

    const resetForm = () => {
        setValues(initialState)
    };


    if (submitted) {
        return (
            <div className="thank-you-container">
                <img
                    src={animalsImage}
                    alt=""
                    className="thank-you-image"
                />
                <h1>Thank you for your donation!🎉</h1>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name* </label>
            <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChanges}
                required
            />

            <label htmlFor="lastName">Last Name* </label>
            <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChanges}
                required
            />

            <label htmlFor="donationType">Donation Type* </label>
            <input
                type="text"
                placeholder="Donation type"
                name="donationType"
                value={values.donationType}
                onChange={handleChanges}
                required
            />

            <label htmlFor="donationquantity">Enter amount/quantity you will be donating </label>
            <input
                type="text"
                placeholder="Quantity/Amount"
                name="quantity"
                value={values.quantity}
                onChange={handleChanges}
            />

            <label htmlFor="date">Today's date </label>
            <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChanges} />

            <button type="button" onClick={resetForm}>Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}