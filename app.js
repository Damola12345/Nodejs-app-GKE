const express = require('express')
const bodyParser = require('body-parser')
const reverseVowels = require('./reverseVowels')

const app = express()
app.use(bodyParser.json())

const port = 8080

app.get('/hello', (req, res) => {
  res.send('world')
})

app.post('/vowel-service', (req, res) => {
    console.log(req.body)
    const message = req.body.message 
    const reversedVowels = reverseVowels(message)
  res.send(reversedVowels)
}) 

app.get('/vowel-service', (req, res) => {
  res.sendStatus(405)
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})