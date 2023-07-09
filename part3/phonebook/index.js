require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

app.get('/info',(request,response)=>{
  response.send(`<p>Phonebook has info for ${phonebook.length} people</p> 
  <p>${new Date()}<\p>`)
})

app.get('/api/persons',(request,response) => {
    Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
})

app.get('/api/persons/:id',(request,response,next)=>{
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      }else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id',(request,response,next) =>{
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


// const generateId = () => {
//   const maxId = phonebook.length > 0
//     ? Math.max(...phonebook.map(n => n.id))
//     : 0
//   return maxId + 1
// }

app.post('/api/persons', (request,response,next) =>{
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'please input name and number' 
    })
  }
  // const foundPerson = phonebook.find(person => person.name === body.name)
  // if (foundPerson){
  //   return response.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }
  const person = new Person( {
    id: Person.length + 1,
    name: body.name,
    date: new Date(),
    number: body.number
  })
  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})


const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})