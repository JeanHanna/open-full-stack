import SpecificCountryInfo from "./SpecificCountryInfo"
import {useState } from "react"

const Countries = ({allCountries,searchCountry}) => {

  const [specificCountry,setSpecificCountry] =useState([])
  console.log('alldata',allCountries,searchCountry)
  const filtered = allCountries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
  if (searchCountry.length===0) {
    return(
      <p>please input a country name</p>
    )
  }else if (filtered.length === 1){
    // const specificCountry = filtered[0]
    setSpecificCountry(filtered[0])
    const languageArray = Object.values(specificCountry.languages)
    return(
      <div>
        <h1>{specificCountry.name.common}</h1>
        <p>capital: {specificCountry.capital}</p>
        <p>area: {specificCountry.area}</p>
        <h2>languages</h2>
        <ul>
        {languageArray.map((language,index) => <li key={index}>{language}</li>)}
        </ul>
        <img src={specificCountry.flags.png} alt="Country Flag"></img>
      </div>
    )
  }else if (1<filtered.length && filtered.length<=10 || filtered.length===0){
    return(
      <ul>
         {filtered.map(country => <li key={country.name.common}> 
         {country.name.common}
         <button onClick={setSpecificCountry([country])}>show</button></li>)}
      </ul>
    )
  }else if (filtered.length > 10) {
    return(
      <p>Too many matches,please specify</p>
    )
  }
  
}
export default Countries