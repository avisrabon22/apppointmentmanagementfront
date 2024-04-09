<<<<<<< HEAD
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div >
            <h1 className="flex justify-center text-xl m-10">Appointment Management</h1>
            <div >
                <p className="flex justify-center text-xl m-5">Login</p>
                <form className="flex justify-center">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
              <Link className="flex justify-center m-5" to="/register">Register</Link>
=======
export const Home = () => {
    return (
        <div >
            <h1>Home</h1>

            <div>
                <p> Welcome to the Home page</p>

                <p>Login</p>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
>>>>>>> origin/main
                </form>
                
            </div>

<<<<<<< HEAD
=======
            <button onClick={() => { window.location.href = '/register' }}>Register</button>
>>>>>>> origin/main
        </div>
    )
    }
