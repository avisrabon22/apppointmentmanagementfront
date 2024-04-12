import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { LoginApi } from "./Tools/Api";
import { notifyError, notifySuccess } from "./Tools/Notification";

//  Home component
export const Home = () => {
    const navigate = useNavigate();
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
            if (!formData.username.trim() || !formData.password.trim()) {
                return notifyError("Please fill all fields!");
            }
            const response = await LoginApi(formData);
            console.log(document.cookie);
            if (response.status === 200) {
                notifySuccess(response.data);
                // return navigate('/appointments');
            }
        } catch (error) {
            notifyError("Login failed! Please try again.)");
            // console.log(error);
            // Reset form fields
            setFormData({
                username: '',
                password: ''
            });
        }
    }
    return (
        <div >
            <h1 className="flex justify-center text-xl m-10">Welcome to Appointment Management</h1>
            <div >
                <p className="flex justify-center text-xl m-5">Login Portal</p>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center">
                    <input name="username" onChange={handleChange} value={formData.username} className=" border border-blue-300 p-2 m-2" type="text" placeholder="Username" />
                    <input name="password" onChange={handleChange} value={formData.password} className="border border-blue-300 p-2 m-2" type="password" placeholder="Password" />
                    <button className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500 active:bg-blue-600" type="submit">Login</button>
                    <Link className="flex justify-center m-5" to="/register">Register(Create your profile)</Link>
                </form>
            </div>
        </div>
    )
}
