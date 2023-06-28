// show searched country
const Countries = ({allCountries,searchCountry}) => {
  console.log('alldata',allCountries,searchCountry)
  const filtered = allCountries.filter(country => country.name.common.includes(searchCountry.toLowerCase()))
  console.log(filtered)
  // Rember! Don't render object! use an array instead!
    return(
        <ul>
        {filtered.map(country => country.name.common)}
      </ul>
    )
}
export default Countries