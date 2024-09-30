import express from 'express';
import allRouters from './routes/route.js'

const app = express()
app.use(express.json())

app.use('/', allRouters)

app.listen(3000, () => console.log("Servidor rodando🚀"))

//junior
//9HKZ7mKeGmV0cJAX