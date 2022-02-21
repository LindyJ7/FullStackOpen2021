import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good+bad+neutral !== 0)
  {
    return (
      <div>
        <Header label="give feedback" />
        <Button label="good" onClick={setState(setGood, good)} />
        <Button label="neutral" onClick={setState(setNeutral, neutral)} />
        <Button label="bad" onClick={setState(setBad, bad)} />
        <Header label="statistics" />
        <Statistics statInfo={{good: good, setGood: setGood, bad: bad, setBad: setBad, neutral: neutral, setNeutral: setNeutral}}/>
      </div>
    )
  }
  return (
    <div>
      <Header label="give feedback" />
      <Button label="good" onClick={setState(setGood, good)} />
      <Button label="neutral" onClick={setState(setNeutral, neutral)} />
      <Button label="bad" onClick={setState(setBad, bad)} />
      <Header label="statistics" />
      <p>No feedback given</p>
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

const StatisticLine = ({label, amount, hasPct}) => {
  return (
    <div>
      {label} {amount} {hasPct ? "%" : ""}
    </div>
  )
}

const Statistics = ({statInfo}) => {
  return (
    <div>
      <StatisticLine label="good" amount={statInfo.good} />
      <StatisticLine label="neutral" amount={statInfo.neutral} />
      <StatisticLine label="bad" amount={statInfo.bad} />
      <StatisticLine label="all" amount={statInfo.good+statInfo.neutral+statInfo.bad} />
      <StatisticLine label="average" amount={ (statInfo.good-statInfo.bad)/(statInfo.good+statInfo.bad+statInfo.neutral) || 0}/>
      <StatisticLine label="positive" amount={(statInfo.good)/(statInfo.good+statInfo.bad+statInfo.neutral) *100 || 0} hasPct={true}/>
    </div>
  )
}

export default App