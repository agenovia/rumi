const getNotes = () => {
    const items = localStorage.getItem("rishi")
    if (!items) {
        localStorage.setItem("rishi", JSON.stringify([]))
        return []
    }

    return JSON.parse(items)
}


const addNote = (note, tag) => {
    const now = (new Date()).toLocaleString()
    const items = [{time: now, note: note, tag: tag},...getNotes()]
    localStorage.setItem("rishi", JSON.stringify(items))
}


export default addNote