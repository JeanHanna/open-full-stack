import {useState} from 'react'

const Button = ({handleClick,text}) =>{
    return (
        <button onClick = {handleClick}>
            {text}
        </button>
    )
}

const Unicafe = () =>{
    const [good, setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad, setBad] =useState(0)


    const handleGoodClick = () =>{
        setGood(good+1)
    }
    const handleNeturalClick = () =>{
        setNeutral(neutral+1)
    }
    const handleBadClick = () =>{
        setBad(bad+1)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} text={'Good'}/>
            <Button handleClick={handleNeturalClick} text='Netural'/>
            <Button handleClick={handleBadClick } text='Bad'/>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral{neutral}</p>
            <p>bad{bad}</p>

        </div>
    )

}

export default Unicafe