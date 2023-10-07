    import React, { useState } from 'react';


    const KycLogin = () => {
    const [aadhaarNo, setAadhaarNo] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleAadhaarChange = (e) => {
        setAadhaarNo(e.target.value);
    };

    const handleGetOtp = () => {
        // Here you can implement the logic to fetch OTP for the entered Aadhaar number
        // You can use APIs or any other method to get the OTP
        // Once the OTP is received, you can show the OTP input field
        setShowOtpInput(true);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerifyOtp = () => {
        // Here you can implement the logic to verify the entered OTP
        // Once the OTP is verified, you can proceed with the manual KYC process
        // You can navigate to the manual KYC page or perform any other required actions
        console.log('OTP Verified!');
    };
       

    return (
        <div className='adhaar-details'>
        <h1>Become a Member</h1>
        <label htmlFor="aadhaarNo">Enter Aadhaar No:</label>
        <input
            type="text"
            id="aadhaarNo"
            value={aadhaarNo}
            onChange={handleAadhaarChange}
        />
        <br />
        <button className='btn-otp' onClick={handleGetOtp}>Get OTP</button>

        {showOtpInput && (
            <div>
            <label htmlFor="otp">Enter OTP:</label>
            <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
            />
            <br />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
            </div>
        )}

        </div>
    );
    };

    export default KycLogin;
