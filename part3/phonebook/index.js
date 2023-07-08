const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
//cors 
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

let phonebook = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request,response) => {
    response.json(phonebook)
})

app.get('/info',(request,response)=>{
  response.send(`<p>Phonebook has info for ${phonebook.length} people</p> 
  <p>${new Date()}<\p>`)
})

app.get('/api/persons/:id',(request,response)=>{
  const id = Number(request.params.id)
  const person = phonebook.find(person => person.id === id)
  if (person) {
    response.json(person)
  }else{
    response.status(400).end()
  }
})

app.delete('/api/persons/:id',(request,response) =>{
  const id = Number(request.params.id)
  phonebook = phonebook.filter(person => person.id !== id)
  response.json(phonebook)
  response.status(204).end()
})

const generateId = () => {
  const maxId = phonebook.length > 0
    ? Math.max(...phonebook.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request,response) =>{
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'please input name and number' 
    })
  }
  const foundPerson = phonebook.find(person => person.name === body.name)
  if (foundPerson){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = {
    id: phonebook.length + 1,
    name: body.name,
    date: new Date(),
    number: body.number
  }
  phonebook = phonebook.concat(person)
  response.json(person)
})


const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})