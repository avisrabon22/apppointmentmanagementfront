import { Nav } from "./NavBar/Nav"

export const Profile = () => {

    return (<>
        <Nav/>
        <div>
        <h1 className="flex justify-center text-xl m-10">Profile</h1>
        <form className="flex justify-center ">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Edit</button>
        </form>
        </div>
    </>
    )
    }