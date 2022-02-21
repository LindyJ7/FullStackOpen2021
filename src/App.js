import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header label="give feedback" />
      <Button label="good" onClick={setState(setGood, good)} />
      <Button label="neutral" onClick={setState(setNeutral, neutral)} />
      <Button label="bad" onClick={setState(setBad, bad)} />
      <Header label="statistics" />
      <ListItem label="good" amount={good} />
      <ListItem label="neutral" amount={neutral} />
      <ListItem label="bad" amount={bad} />
      <ListItem label="all" amount={good+neutral+bad} />
      <StatGroup label="average" calc={() => {return (good-bad)/(good+bad+neutral) || 0}} hasPct={false}/>
      <StatGroup label="positive" calc={() => {return (good)/(good+bad+neutral) *100 || 0}} hasPct={true}/>
    </div>
  )
}

function setState(stateFunc, currAmt)
{
  return () => {stateFunc(currAmt + 1)};
}

const Header = ({label}) => {
  return (
    <div>
      <h1>
        {label}
      </h1>
    </div>
  )
}

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

const ListItem = ({label, amount}) => {
  return (
    <div>
      {label} {amount}
    </div>
  )
}

const StatGroup = ({label, calc, hasPct}) => {
  return (
    <div>
      {label} {calc()} {hasPct ? "%" : ""}
    </div>
  )
}

export default App