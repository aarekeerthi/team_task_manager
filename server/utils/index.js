import jwt from "jsonwebtoken";

const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };
};

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    ...getCookieOptions(),
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

export default createJWT;
export { getCookieOptions };
