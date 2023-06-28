import { useEffect,useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName,setSearchName] = useState('')

  const hook = () =>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook,[])

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
      <Filter value={searchName} onChange={handleSearchName}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName}/>
    </div>
  )
}
export default App