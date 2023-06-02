const Courseinfo = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name:'Fundamentals of React',
                exercises:10
            },
            {
                name:'Using props to pass data',
                exercises:7
            },
            {
                name:'State of a component',
                exercises: 14
            }
        ]
    }

    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        {/* <Total exercises1={parts[0].exercises} exercises2={parts[2].exercises} exercises3={parts[3].exercises}/> */}
        <Total parts={course.parts} />
      </div>
    )
  }

const Header = (props) => {
    console.log(props)
    return(
            <h1>
                {props.course}
            </h1>
    )
}

const Content = (props) =>{
    return(
        <div>
            <Part parts={props.parts} />
            {/* <Part part1 = {props.part1} part2 = {props.part2} part3 = {props.part3} exercises1={props.exercises1} exercises2={props.exercises2} exercises3={props.exercises3}/> */}
        </div>
    )
}

const Part = (props) => {
    return(
        <>
            <p>
                {props.parts[0].name} : {props.parts[0].exercises}
            </p>
            <p>
                {props.parts[1].name} : {props.parts[1].exercises}
            </p>
            <p>
                {props.parts[2].name} : {props.parts[2].exercises}
            </p>
        </>

    )
}

const Total = (props) => { 
    return(
        <>
        <p>
            Number of excercises : {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </p>
        </>
    )
}
  export default Courseinfo