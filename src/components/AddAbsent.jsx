import Select from "./Select"
import Button from "./Button"
import { useContext, useState } from "react"
import AbsentsContext from "../contexts/AbsentsContext"
import people from "../assets/people.json"

export default function AddAbsent() {

    const { addAbsent } = useContext(AbsentsContext);

    const [absentId, setAbsentId] = useState(undefined);

    const handleAddAbsent = () => {
        const absent = people.find(p => p.id === +absentId);
        if (absent) {
            addAbsent(absent);
            setAbsentId(undefined);
        }
    }

    return (
        <div className="flex flex-col justify-center items-start flex-1 p-10 gap-5">
            <Select value={absentId ?? ""} onChange={(e) => setAbsentId(e.target.value)} />
            <Button text={"Ajouter"} onClick={handleAddAbsent} />
        </div>
    )
}