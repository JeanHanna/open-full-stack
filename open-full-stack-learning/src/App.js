import {useState} from 'react'
const History = (props) => {
  // conditional rendering
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  console.log(allClicks)
  return (
    <div>
      {left}
      <button handleClick={handleLeftClick}> text = 'left'</button>
      <button handleClick={handleRightClick}> text = 'right'</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
export default App