import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    !token && res.json({ message: "Você não tem acesso a essa area" });

    const verifyToken = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    console.log(verifyToken);
  } catch (error) {
    res.json({ message: "Erro: Token invalido", error });
  }

  next();
};

export default auth;
