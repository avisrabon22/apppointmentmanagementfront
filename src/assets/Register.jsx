import { Link } from "react-router-dom"
export const Register = () => {

    return (
        <div>
        <h1 className="flex justify-center text-xl m-10">Create your profile</h1>
        <form className="flex justify-center ">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
<Link className="flex justify-center m-5" to="/">Login(Have you profile?)</Link>
        </form>
        </div>
    )
    }
