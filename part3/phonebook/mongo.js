const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nameInput = process.argv[3]
const numberInput = process.argv[4]

const url =
  `mongodb+srv://jianghuan913:${password}@cluster0.mtvajcr.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

// After establishing the connection to the database, we define the schema for a person and the matching model
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
//Models are so-called constructor functions that create new JavaScript objects based on the provided parameters
//In the Note model definition, the first "Person" parameter is the singular name of the model. The name of the collection will be the lowercase plural persons, because the Mongoose convention is to automatically name collections as the plural (e.g. persons) when the schema refers to them in the singular (e.g. Person).
const Person = mongoose.model('Person', personSchema)

// Next, the application creates a new person object with the help of the Person model:
const person = new Person({
  name: 'Huan',
  number: '123456',
})

const personInput = new Person({
    name:nameInput,
    number:numberInput
})

if ((nameInput != undefined) && (numberInput != undefined)){
    personInput.save().then(result => {
        console.log(`added ${personInput.name} ${personInput.number} to phonebook`)
        mongoose.connection.close()
      })
}else{
    Person.find({}).then(result => {
        result.forEach(person =>{
            console.log(person.name + " " + person.number)
        })
        mongoose.connection.close()
    })
}

