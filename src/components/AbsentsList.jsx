import { useContext } from "react"
import AbsentsContext from "../contexts/AbsentsContext"
import Cross from "../assets/cross.svg"

export default function AbsentsList() {

    const { absents } = useContext(AbsentsContext)

    return (
        <div className="flex-1">
            <p className="font-bold">Liste des absents</p>
            <ul>
                {
                    absents
                        .filter(absent => absent.gender === "man")
                        .map((absent, index) => (<Absent key={index} absent={absent} />))
                }
            </ul>
            <p className="font-bold">Liste des absentes</p>
            <ul>
                {
                    absents
                        .filter(absent => absent.gender === "woman")
                        .map((absent, index) => (<Absent key={index} absent={absent} />))
                }
            </ul>
        </div>
    )
}

function Absent({ absent }) {

    const { removeAbsent } = useContext(AbsentsContext)

    return (
        <li className="flex flex-row items-center gap-2">
            <span>{absent.name}</span>
            <button
                className="w-6 h-6 bg-dark-gray rounded-full flex items-center justify-center"
                onClick={() => removeAbsent(absent)}
            >
                <img src={Cross} className="w-2 h-2" />
            </button>
        </li>
    )
}