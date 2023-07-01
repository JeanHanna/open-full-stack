import Note from './components/Note'
import {useState, useEffect} from 'react'
import axios from 'axios'


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(false)

// useEffect to get the notes from db.json
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length +1,
    }

    axios
    .post('http://localhost:3001/notes',noteObject)
    .then(response => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
    
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange=(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // conditional operator : showALL True-> notes; False-> notes.filter
  const notesToShow = showAll 
    ? notes 
    : notes.filter(note => note.important)
  console.log(notesToShow)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'import' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note 
          key={note.id} 
          note={note}
          toggleImportance={()=> toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default App
