import { useState } from "react"
import Button from "./Button"
import DrawResult from "./DrawResult"
import people from "../assets/people.json"

export default function Draw() {

    const [winner, setWinner] = useState(undefined);

    const handleDrawWinner = () => {
        const randomIndex = Math.floor(Math.random() * people.length);
        setWinner(people[randomIndex]);
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-10">
            <Button text={"🎰 Sélectionner une personne 🎰"} onClick={handleDrawWinner} />
            <DrawResult winner={winner} />
        </div>
    )
}