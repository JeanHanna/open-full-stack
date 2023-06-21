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

const Course = ({course}) =>{
    console.log({course})
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}

export default Course