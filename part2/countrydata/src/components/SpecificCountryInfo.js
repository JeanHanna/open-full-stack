const SpecificCountryInfo = ({specificCountry}) => {
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
}
export default SpecificCountryInfo