const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) =>{
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content =({course}) =>{
    return(
        <>{course.parts.map(part => <Part key={part.id} part={part}/> )}</>
    )
}

const Total =({parts}) =>{
    const total = parts.reduce((sum,part) => sum + part.exercises , 0)
    return(
        <p>Total of {total} exercises</p>
    )
}
const Course = ({course}) =>{
    console.log({course})
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total parts={course.parts}/>
            
        </div>
    )
}

export default Course