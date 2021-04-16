import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.get('/game', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.get('/', (req, res) =>{
    res.send(('<h1>Hello Express</h1>'))
})

app.use(express.static(__dirname + '/src')) 

app.listen(PORT, () => {
    console.log("Privet, ", __dirname)
})
