    import React, { useState } from 'react';

    const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        mobileNumber: '',
        aadharNumber: '',
        email: '',
        address: '',
        pinCode: '',
        country: '',
        state: '',
        gender: '',
        dob: '',
        nomineeName: '',
        nomineeSurname: '',
        nomineeRelation: '',
        panNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <h2>Personal Details</h2>
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
            <label>Surname:</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </div>
        <div>
            <label>Mobile Number:</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div>
            <label>Aadhar Number:</label>
            <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
            <label>Pin Code:</label>
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
        </div>
        <div>
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
            <label>State:</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div>
            <label>Gender:</label>
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div>
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <h2>Nominee Details</h2>
        <div>
            <label>Nominee Name:</label>
            <input type="text" name="nomineeName" value={formData.nomineeName} onChange={handleChange} />
        </div>
        <div>
            <label>Nominee Surname:</label>
            <input type="text" name="nomineeSurname" value={formData.nomineeSurname} onChange={handleChange} />
        </div>
        <div>
            <label>Nominee Relation:</label>
            <input type="text" name="nomineeRelation" value={formData.nomineeRelation} onChange={handleChange} />
        </div>
        <div>
            <label>PAN Number:</label>
            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
    };

    export default ContactForm;
