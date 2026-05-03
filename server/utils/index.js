import jwt from "jsonwebtoken";

const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: true,        // 🔥 FORCE TRUE
    sameSite: "none",    // 🔥 FORCE NONE
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
