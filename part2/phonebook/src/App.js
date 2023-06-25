import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName,setSearchName] = useState('')

  const addName = (event)=>{
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(names => names.name)
    if (!names.includes(newName)){
      setPersons(persons.concat(nameObject))
    }else{
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={searchName} onChange={handleSearchName}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())).map((person) => <li key={person.name}> {person.name} : {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App