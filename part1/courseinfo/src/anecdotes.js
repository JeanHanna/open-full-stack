import { useState } from 'react'

const Button =({handleClick,text}) =>{
  return(
    <button onClick={handleClick} >
      {text}
    </button>
  )   
}

const mostVotes = ({anecdotes,votes}) => {
  
}

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const points=Array(anecdotes.length).fill(0)
  const [votes,setClick] = useState(points)
  const handleVoteClick = () =>{
     const copy = [...votes]
     copy[selected] +=1
    setClick(copy)
  }

  
  const [selected, setSelected] = useState(0)
  const handleNextClick = () =>{
    const randomNum = Math.floor(Math.random()*(anecdotes.length))
    setSelected(randomNum)
  }
  const max = Math.max(...votes)
  const maxIndex = votes.indexOf(max)
  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleNextClick} text='next anecdote'/>  

      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {max} points</p>

    </div>
  )
}

export default Anecdotes