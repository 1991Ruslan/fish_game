import express from 'express'
import path from 'path'
//import userRouter from 'routes/user.routes'

//const userRouter = require('./routes/user.routes')
const __dirname = path.resolve()
const PORT = 3000
const app = express()

//app.use('/api', userRouter)

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/auth', 'autorization.html'))
})

app.get('/game', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/game', 'game.html'))
})

app.get('/registration', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/auth', 'registration.html'))
})

app.listen(PORT, () => {
    console.log("Server has been started on port 3000, ", __dirname)
})
