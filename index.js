import express from 'express'
import bodyParser from 'body-parser'
import usersRouter from './routes/users.js'

const app = express()
const Port = 3000;

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('Rest')

    res.send('Hellwo from homepage')
})

app.use('/users',usersRouter)

app.listen(Port,()=>
    console.log('server running on port :${Port}')
)
