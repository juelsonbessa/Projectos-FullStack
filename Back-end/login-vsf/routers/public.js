import { PrismaClient } from "@prisma/client";
import express from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.get("/login", async (req, res) => {
  try {
    const dataUsers = req.body;

    const user = await prisma.usersVsf.findUnique({
      where: { email: dataUsers.email },
    });

    !user && res.json({ message: "Usuario não encontrado na base de dados" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

    res.json(token);
  } catch (error) {
    res.json({ message: "Erro ao efetuar login", error });
  }
});

export default router;
