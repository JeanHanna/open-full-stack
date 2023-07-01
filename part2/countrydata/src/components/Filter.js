
const Filter = ({value,onChange}) => {
    return(
        <form>
        <div>
          Find countries: <input value={value} onChange={onChange}/>
        </div>
      </form>
    )
}

export default Filter