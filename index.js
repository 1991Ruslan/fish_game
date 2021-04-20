import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))


app.get('/game', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'static', 'autorization.html'))
})

// app.get('/registration', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, 'static', 'registration.html'))
// })

app.listen(PORT, () => {
    console.log("Server has been started on port 3000, ", __dirname)
})
