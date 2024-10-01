import express from "express";
import publicRoute from "./routers/public.js";
import privateRoute from "./routers/private.js";
import auth from "./middleware/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", publicRoute);
app.use("/", auth, privateRoute);

app.listen(3000, () => console.log("Servidor rodando na porta 3000🚀"));

//FwXRFszyI5uiX2sX
//juelsonjunior27
