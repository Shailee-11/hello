    import React, { useState } from 'react';

    const Status = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [aadhaarNo, setAadhaarNo] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [mPin, setMPin] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleAadhaarChange = (e) => {
        setAadhaarNo(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobileNo(e.target.value);
    };

    const handleMPinChange = (e) => {
        setMPin(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any logic with the form data, like validating and submitting it.
        console.log('Form submitted!');
    };

    return (
        <div className="status">
        <h1>Status</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            />

            <label htmlFor="surname">Surname:</label>
            <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleSurnameChange}
            />

            <label htmlFor="aadhaarNo">Aadhaar No:</label>
            <input
            type="text"
            id="aadhaarNo"
            value={aadhaarNo}
            onChange={handleAadhaarChange}
            />

            <label htmlFor="mobileNo">Mobile No:</label>
            <input
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={handleMobileChange}
            />

            <label htmlFor="mPin">M-PIN:</label>
            <input
            type="password"
            id="mPin"
            value={mPin}
            onChange={handleMPinChange}
            />

            <button className='Status-btn' type="submit">Login</button>
        </form>
        </div>
    );
    };

    export default Status;
