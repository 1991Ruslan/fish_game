const express = require('express')
const path = require('path')

const userRouter = require('./routes/user.routes')


const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api', userRouter)

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/auth', 'autorization.html'))
})

app.get('/game', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/game', 'game.html'))
})

app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/auth', 'registration.html'))
})

app.listen(PORT, () => {
    console.log("Server has been started on port 3000, ", __dirname)
})