import {useState,useEffect } from "react"

const Countries = ({allCountries,searchCountry}) => {

  const [countries,setCountries] =useState([])

  useEffect(() => {
    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setCountries(filtered);
  }, [allCountries, searchCountry]);

  console.log('alldata',allCountries,searchCountry)
  const filtered = allCountries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))


  if (searchCountry.length===0) {
    return(
      <p>please input a country name</p>
    )
  }else if (countries.length === 1){
    const specificCountry = countries[0]
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
  }else if (1<countries.length && countries.length<=10 || countries.length===0){
    return(
      <ul>
         {countries.map(country => <li key={country.name.common}> 
         {country.name.common}
         <button onClick={()=>setCountries([country])}>show</button>
         </li>)}
      </ul>
    )
  }else if (countries.length > 10) {
    return(
      <p>Too many matches,please specify</p>
    )
  }
  
}
export default Countries