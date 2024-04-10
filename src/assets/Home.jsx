import { useState } from "react";
import { Link } from "react-router-dom"
import { LoginApi } from "./Api";
import { notifyError, notifySuccess } from "./Tools/Notification";

export const Home = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Handle the form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle the form submission 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await LoginApi(formData);
            if (response.status === 200) {
                notifySuccess(response);
            }
        } catch (error) {
            notifyError("Login failed! Please try again.");
            console.log(error);
        }
        // Reset form fields
        setFormData({
            username: '',
            password: ''
        });
    }
    return (
        <div >
            <h1 className="flex justify-center text-xl m-10">Welcome to Appointment Management</h1>
            <div >
                <p className="flex justify-center text-xl m-5">Login Portal</p>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center">
                    <input name="username" onChange={handleChange} value={formData.username} className=" border border-blue-300 p-2 m-2" type="text" placeholder="Username" />
                    <input name="password" onChange={handleChange} value={formData.password} className="border border-blue-300 p-2 m-2" type="password" placeholder="Password" />
                    <button className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500" type="submit">Login</button>
                    <Link className="flex justify-center m-5" to="/register">Register(Create your profile)</Link>
                </form>
            </div>
        </div>
    )
}
