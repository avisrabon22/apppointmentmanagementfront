import { Link } from "react-router-dom"
export const Register = () => {

    return (
        <div>
            <h1 className="flex justify-center text-xl m-10">Create your profile</h1>
            <form className="flex justify-center flex-col items-center ">
                <input className="border border-blue-300 p-2 m-2" type="text" placeholder="Your Full Name" />
                <input className="border border-blue-300 p-2 m-2" type="text" placeholder="Email" />
                <input className="border border-blue-300 p-2 m-2" type="text" placeholder="Username" />
                <input className="border border-blue-300 p-2 m-2" type="password" placeholder="Password" />
                <button className=" border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500" type="submit">Register</button>
                <Link className="flex justify-center m-5" to="/">Login (Have you profile?)</Link>
            </form>
        </div>
    )
}
