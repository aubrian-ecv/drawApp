import { useState, useContext, useEffect } from "react"
import Button from "./Button"
import DrawResult from "./DrawResult"
import people from "../assets/people.json"
import AbsentsContext from "../contexts/AbsentsContext"

export default function Draw() {

    const { absents } = useContext(AbsentsContext)

    const [winner, setWinner] = useState(undefined);
    const [winners, setWinners] = useState([]);

    const handleDrawWinner = () => {
        const partiticipants = people.filter(person => !absents.includes(person)).filter(person => !winners.includes(person));
        const randomIndex = Math.floor(Math.random() * partiticipants.length);
        setWinner(partiticipants[randomIndex]);
        setWinners(prev => [...prev, partiticipants[randomIndex]]);
    }

    useEffect(() => {
        if (winners.length === people.length - absents.length) {
            setWinners([]);
        }
    }, [winners])

    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-10 p-5">
            <Button text={"🎰 Sélectionner une personne 🎰"} onClick={handleDrawWinner} />
            <DrawResult winner={winner} />
        </div>
    )
}