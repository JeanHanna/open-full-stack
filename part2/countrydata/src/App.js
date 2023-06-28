import { useEffect,useState } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [allCountries,setAllCountries] = useState([])
  const [searchCountry,setSearchCountry] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setAllCountries(response.data)
    })
    
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
    console.log(searchCountry)
  }


  return (
    
    <div>
      <h2>Search Country </h2>
      <Filter value={searchCountry} onChange={handleSearchCountry}/>
      
      <h2>Country Data</h2>
      <Countries allCountries={allCountries} searchCountry={searchCountry}/>
    </div>
  )
}
export default App