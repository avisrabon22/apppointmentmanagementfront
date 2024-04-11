import { useState } from "react";
import { Link } from "react-router-dom";
import {Api} from "./Tools/Api";
import { notifyError, notifySuccess } from "./Tools/Notification";

export const Register = () => {
  
    const [formData, setFormData] = useState({
        name:``,
        email:``,
        password:``
    });
        
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       try {
            const response = await Api(formData);
            notifySuccess(response);
        }
        catch (error) {
          notifyError("Registration failed! Please try again.");
            console.log(error);
        }
       
        // Reset form fields
        setFormData({
            name:"",
            email:"",
            password:""
        });
    };

    
    return (
        <div>
            <h1 className="flex justify-center text-xl m-10">Create your profile</h1>
            <form className="flex justify-center flex-col items-center" onSubmit={handleSubmit}>
                <input
                    className="border border-blue-300 p-2 m-2"
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    
                />
                <input
                    className="border border-blue-300 p-2 m-2"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="border border-blue-300 p-2 m-2"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button  className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500 active:bg-blue-800" type="submit">
                    Register
                </button>
                <Link className="flex justify-center m-5" to="/">
                    Login (Have you profile?)
                </Link>
            </form>
        </div>
    );
};
    