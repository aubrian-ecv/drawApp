import people from "../assets/people.json"
import { useContext } from "react"
import AbsentsContext from "../contexts/AbsentsContext"

export default function Select({ value, onChange }) {

    const { absents } = useContext(AbsentsContext);

    return (
        <div className="flex flex-col gap-5 w-full">
            <label htmlFor="absents" className="text-black font-bold text-2xl">Ajouter un.e absent.e</label>
            <select
                id="absents"
                name="absents"
                className="w-full p-5 rounded-lg font-bold outline-none border-r-[16px] border-transparent"
                value={value}
                onChange={onChange}
            >
                <option value="">Sélectionner une personne</option>
                {
                    people
                        .filter(p => !absents.find(a => a.name === p.name))
                        .map((p, index) => <option key={index} value={p.id}>{p.name}</option>)
                }
            </select>
        </div>
    )
}