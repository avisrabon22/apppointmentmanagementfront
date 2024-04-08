import { NavLink } from "react-router-dom"

export const Nav = () => {

    return (
        <nav>
            <ul>

                <li>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li>

                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>

                    <NavLink to="/appointments">Appointments</NavLink>
                </li>

            </ul>
        </nav>

    )
}