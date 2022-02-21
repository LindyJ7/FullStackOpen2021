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
      <Statistics statInfo={{good: good, setGood: setGood, bad: bad, setBad: setBad, neutral: neutral, setNeutral: setNeutral}}/>
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

const Statistics = ({statInfo}) => {
  return (
    <div>
      <Header label="statistics" />
      <ListItem label="good" amount={statInfo.good} />
      <ListItem label="neutral" amount={statInfo.neutral} />
      <ListItem label="bad" amount={statInfo.bad} />
      <ListItem label="all" amount={statInfo.good+statInfo.neutral+statInfo.bad} />
      <StatGroup label="average" calc={() => {return (statInfo.good-statInfo.bad)/(statInfo.good+statInfo.bad+statInfo.neutral) || 0}}/>
      <StatGroup label="positive" calc={() => {return (statInfo.good)/(statInfo.good+statInfo.bad+statInfo.neutral) *100 || 0}} hasPct={true}/>
    </div>
  )
}

export default App