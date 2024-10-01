import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const route = express.Router()

route.get("/list-users", async(req, res, next) => {
    try {
        const users = await prisma.usersVsf.findMany()

        res.json(users)
    } catch (error) {
        res.json({message: "Erro: Falha na listagem dos usuarios", error})
    }
})

export default route