import { NavLink } from "react-router-dom"

export const Nav = () => {

    return (
        <nav className="bg-gray-200 py-4 px-6">
            <p className="text-xl font-bold">Appointment Management</p>
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
            </ul>
        </nav>
    )
}