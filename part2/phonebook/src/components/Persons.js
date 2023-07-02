// show searched person
const Persons = ({persons,searchName,deletePerson}) => {
    return(
        <ul>
        {persons.filter(person => 
          person.name.toLowerCase().includes(searchName.toLowerCase()))
          .map((person) => 
          <li key={person.name}> {person.name} : {person.number}
          </li>)}
      </ul>
    )
}
export default Persons