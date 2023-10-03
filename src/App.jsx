import Home from "./Home";
import Absents from "./Absents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AbsentsContext from "./contexts/AbsentsContext";
import { useEffect, useState } from "react";

export const routes = [
    {
        path: "/",
        element: <Home />,
        name: "Tirage au sort"
    },
    {
        path: "/absents",
        element: <Absents />,
        name: "Absent.e.s"
    }
]

const router = createBrowserRouter(routes);

export default function App() {

    const [absents, setAbsents] = useState([]);

    const addAbsent = (absent) => {
        setAbsents([...absents, absent]);
    }

    const removeAbsent = (absent) => {
        setAbsents(absents.filter((a) => a.name !== absent.name));
    }

    return (
        <AbsentsContext.Provider value={{ absents, addAbsent, removeAbsent }}>
            <RouterProvider router={router} />
        </AbsentsContext.Provider>
    )
}