import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, "foodzone_secret", (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Invalid token" });

    req.user_id = decoded.id;
    next();
  });
};
