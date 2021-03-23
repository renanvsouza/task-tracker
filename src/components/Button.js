export function Button({ text, color, showAdd}) {
    return (
        <button 
        style={{ backgroundColor: color }} className="btn" onClick={showAdd}>
        {text}
        </button>
    )
}
