import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default App