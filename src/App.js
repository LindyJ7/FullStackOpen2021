const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
    <Header name={course.parts[0].name} exercises={course.parts[0].exercises} />
    <Header name={course.parts[1].name} exercises={course.parts[1].exercises} />
    <Header name={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  const name = props.name;
  return (
    <div>
      <p>
      {name} has {props.exercises} exercises
      </p>
    </div>
  )
}

export default App