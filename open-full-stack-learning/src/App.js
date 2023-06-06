import {useState} from 'react'

const App = (props) => {
  const [counter,setCounter] = useState(0)

const handleClick = () => {
  console.log('clicked')
}


  return (
    <div>
        <div>{counter}</div>
        {/*  set the value of the button's onClick attribute to be a reference to the handleClick function */}
        <button onClick={() => setCounter(counter + 1)}>
          {/* button's name is plus */}
          plus
        </button>
        <button onClick={() => setCounter(0)}>
          zero
        </button>
    </div>

  )
}

export default App