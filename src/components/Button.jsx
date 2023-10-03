export default function Button({ text, onClick }) {
    return (
        <button className="bg-red rounded-full text-white font-bold px-10 py-5" onClick={onClick}>
            <span>{text}</span>
        </button>
    )
}