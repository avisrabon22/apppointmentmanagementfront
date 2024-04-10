import { NavLink } from "react-router-dom"

export const Nav = () => {
    const handleLogout = () => {
        // localStorage.removeItem('token');
        // window.location.href = '/';
    }

    return (
        <nav className="bg-gray-200 py-4 px-6">
            <p className="text-xl font-bold">Appointment Management System</p>
            <ul className="flex space-x-4 justify-center">
                <li>
                    <NavLink
                        to="/appointments"
                        className="text-blue-500 hover:text-blue-700"
                        activeClassName="text-blue-700 font-bold"
                    >
                        Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        className="text-blue-500 hover:text-blue-700"
                        activeClassName="text-blue-700 font-bold"
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/new_appointment"
                        className="text-blue-500 hover:text-blue-700"
                        activeClassName="text-blue-700 font-bold"
                    >
                        New Appointment
                    </NavLink>
                </li>
                <li className="flex justify-end">
                  <input type="button" 
                  name="logout" 
                  value="Logout" 
                  onClick={handleLogout}
                   className="border border-blue-300 p-2 m-2 hover:bg-blue-400 active:bg-blue-600 rounded-md" />
                </li>
            </ul>
        </nav>
    )
}