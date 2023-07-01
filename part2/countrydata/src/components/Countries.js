import {useState,useEffect } from "react"
import axios from "axios";


const Countries = ({allCountries,searchCountry}) => {
  const apiKey = process.env.API_KEY;
  const [countries,setCountries] =useState([]);
  const [capitalWeather,setCapitalWeather] = useState(null);

  const getWeatherIconUrl = (iconCode) =>`https://openweathermap.org/img/wn/${iconCode}.png`;

  const fetchCapitalWeather = async (capital) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
      );
      setCapitalWeather(response.data);
    } catch (error) {
      console.error("Error fetching capital weather:", error);
    }
  };

  console.log(capitalWeather)



  useEffect(() => {
    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setCountries(filtered);
  }, [allCountries, searchCountry]);

  useEffect(() => {
    if (countries.length === 1) {
      const capital = countries[0].capital[0]
      fetchCapitalWeather(capital)
    }
  },[countries])

  if (searchCountry.length===0) {
    return <p>please input a country name</p>  
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
        {capitalWeather && (
          <div>
            <h2>Capital Weather</h2>
            <p>Temperature: {(capitalWeather.main.temp - 273.15).toFixed(2)}°C</p>
            <img
              src={getWeatherIconUrl(capitalWeather.weather[0].icon)}
              alt="Weather Icon"
            />
            <p>Wind: {capitalWeather.wind.speed} m/s</p>
          </div>
        )}
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