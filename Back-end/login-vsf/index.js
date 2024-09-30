import express from "express";
import publicRoute from "./routers/public.js"

const app = express()

app.use(express.json())
app.use('/', publicRoute)

app.listen(3000, () => console.log("Servidor rodando na porta 3000🚀"))

//FwXRFszyI5uiX2sX
//juelsonjunior27