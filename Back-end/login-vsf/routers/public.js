import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const dataUsers = await prisma.usersVsf.findMany();

    res.json(dataUsers);
  } catch (error) {
    res.json({ message: "Erro: Falha ao listar os usuarios", error });
  }
});

export default router;
