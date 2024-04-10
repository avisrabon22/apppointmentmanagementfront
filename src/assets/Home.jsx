import { useState } from "react";
import { Link } from "react-router-dom"
import { LoginApi } from "./Api";
import { notifyError, notifySuccess } from "./Tools/Notification";

export const Home = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
try {
        const response = await LoginApi(formData); 
        if( response.status === 200)
        {
            <Link to="/appointment"></Link>
            notifySuccess(response);    
        }
    }catch (error) {
        notifyError("Login failed! Please try again.");
        console.log(error);
    }
}
    return (
        <div >
            <h1 className="flex justify-center text-xl m-10">Welcome to Appointment Management</h1>
            <div >
                <p className="flex justify-center text-xl m-5">Login Portal</p>
                <form className="flex justify-center flex-col items-center">
                    <input className=" border border-blue-300 p-2 m-2" type="text" placeholder="Username" />
                    <input className="border border-blue-300 p-2 m-2" type="password" placeholder="Password" />
                    <button className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500" type="submit">Login</button>
                    <Link className="flex justify-center m-5" to="/register">Register(Create your profile)</Link>
                </form>
            </div>
        </div>
    )
}
