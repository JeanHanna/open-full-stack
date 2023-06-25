import Note from './components/Note'
import {useState} from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(false)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length +1,
    }
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
          <Note key={note.id} note={note} />
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
