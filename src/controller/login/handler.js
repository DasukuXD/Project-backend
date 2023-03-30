const conection = require("../../connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv/config");

const secret = process.env.SECRET_KEY;
const handlerLogin = (req, res) => {
  const { email, password } = req.body;
  try {
    conection.query(
      `SELECT * FROM USER_INFO WHERE email='${email}';`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }
        if (result.length === 0) {
          return res.status(404).json({ message: "No user found" });
        }

        bcrypt.compare(password, result[0].password, (err, isLogin) => {
          if (isLogin) {
            const tokens = jwt.sign(
              {
                email: result[0].email,
                role_id: result[0].role_id,
                login_id: result[0].login_id,
              },
              secret,
              {
                expiresIn: "1h",
              }
            );
            return res.status(201).json({ message: "Login success", tokens });
          } else {
            return res.status(400).json({ message: "Login failed" });
          }
        });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerLogin;