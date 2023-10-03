import { NavLink } from "react-router-dom";

export default function Link({ to, name }) {
    return (
        <NavLink
            to={to}
            className={
                ({ isActive }) => isActive ? "font-bold text-white" : "text-white"
            }
        >
            {name}
        </NavLink>
    )
}