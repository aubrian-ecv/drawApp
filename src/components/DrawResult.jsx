const genderPhrases = {
    "man": "Tu es le grand gagnant !",
    "woman": "Tu es la grande gagnante !",
}

export default function DrawResult({ winner }) {
    return (
        <div className="bg-white flex flex-col items-center justify-center text-center md:text-right w-11/12 md:w-2/3 py-44 text-lg">
            {
                winner ? (
                    <>
                        <span className="font-bold">{winner.name} 🌸</span>
                        <span>{genderPhrases[winner.gender]}</span>
                    </>
                ) : (
                    <span>Personne n'a encore été sélectionné actuellement 👀</span>
                )
            }
        </div>
    )
}