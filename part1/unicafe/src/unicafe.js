import {useState} from 'react'

const Button = ({handleClick,text}) =>{
    return (
        <button onClick = {handleClick}>
            {text}
        </button>
    )
}

const StatisticsLine = ({text,value}) => {
    return(
        <>
        <p>{text} {value}</p>
        </>
    )
}

const Statistics = ({good,neutral,bad}) => {
    const all = good + neutral + bad
    const avergae = (good - bad)/all
    const positive = (good/all) * 100 
    if (all === 0 ){
        return (
            <>
            <p>No feedback given</p>
            </>
        )
    }
    return(
        <>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={good}/>
        <StatisticsLine text='all' value={good+neutral+bad}/>
            <p>average {avergae}</p>
            <p>positive {positive}%</p>
        </>
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
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )

}

export default Unicafe