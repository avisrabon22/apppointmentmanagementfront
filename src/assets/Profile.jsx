import { Nav } from "./NavBar/Nav"

export const Profile = () => {

    return (<>
        <Nav />
        <div>
            <h1 className="flex justify-center text-xl m-10">Profile</h1>
            <form className="flex justify-center flex-col items-center ">
                <input className="border border-blue-300 p-2 m-2" type="text" placeholder="Name" />
                <input className="border border-blue-300 p-2 m-2" type="text" placeholder="Email" />
                <input className="border border-blue-300 p-2 m-2" type="password" placeholder="Password" />
                <button className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500" type="button">Edit</button>
            </form>
        </div>
    </>
    )
}