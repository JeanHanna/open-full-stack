const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      {/* have to be wrappeed in {} and must have key */}
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
            </li>
            )}
      </ul>
    </div>
  )
}

export default App