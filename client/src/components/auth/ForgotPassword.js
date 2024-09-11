import React, {useState} from "react";
import axios from 'axios';

const ForgotPassword = ()=> {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpsent, setOtpSent] = useState(false);   // to check the OTP is sent or not 

    const handleForgotPassword = async (e)=> {
        e.preventDefault();
        try{
            const response = await axios.post('/api/forgot-password', {email});
            setMessage(response.data.message);
            setOtpSent(true); 
        }catch(error){
            setMessage(error.response.data.message)
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/reset-password', {
                email,
                otp,
                newPassword,
            });
            setMessage(response.data.message);
        }catch(error){
            setMessage(error.response.data.message);
        }
    };

    return(
        <>
        <form onSubmit={handleForgotPassword}>
            <label className="text-[14px]">Email:</label>
            <br></br>
            <input className="rounded-md w-[250px] border border-gray-400 mt-2 text-sm text-left bg-white"
            type="text"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button className="text-white bg-slate-800 text-[12px] rounded-xl ml-24 mt-11 w-[90px] h-[24px]" type="submit"> Send OTP</button>
        </form>
        {otpsent && (
            <form onSubmit={handleResetPassword}>
                <h2>Reset Password</h2>
                <label>OTP:</label>
                <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                />

                <label className="text-[14px]">NewPassword:</label>
                <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />

                <button type="submit">Reset Password</button>
            </form>

        )}
        </>
    )
}

export default ForgotPassword;