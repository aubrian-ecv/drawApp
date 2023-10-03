import { routes } from "../App";
import Link from "./Link";

export default function Header() {
    return (
        <header className="bg-red py-5 lg:px-20 px-5">
            <nav className="flex flex-row gap-5 justify-end items-center">
                {
                    routes.map((route, index) => <Link key={index} to={route.path} name={route.name} />)
                }
            </nav>
        </header>
    )
}