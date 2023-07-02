
const Persons = ({persons,searchName,handleDelete}) => {
    return(
        <ul>
        {persons.filter(person => 
          person.name.toLowerCase().includes(searchName.toLowerCase()))
          .map((person) => 
          <li key={person.id}> {person.name} : {person.number}
          <button  onClick={() => handleDelete(person)}>Delete</button>
          </li>)}
      </ul>
    )
}
export default Persons