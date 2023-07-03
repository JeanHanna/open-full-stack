import Note from './components/Note'

// const Note = ({note}) =>{
//   return(
//     <li>{note.content}</li>
//   )
// }

const App = (props) => {
  const { notes } = props


const result = notes.map(note => note.id)
console.log(result)

  return (
    <div>
      <h1>Notes</h1>
      {/* have to be wrappeed in {} and must have key */}
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
            )}
      </ul>
    </div>
  )
}

export default App
