const { Employee } = require("../models");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await Employee.findOne({
        where: { email: email },
      });
  
      if (user) {
        const passwordMatch = await user.comparePassword(password);
  
        if (!passwordMatch) {
          res.status(401).json({
            message: "Authentication Failed. Wrong Password",
          });
        } else {
          req.session.user = user;
          res.status(200).json({ message: "Login Successful" });
        }
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  

//middleware to validate user is login or not
const loginRequired = (req, res, next) => {
  const user = req.session.user || "";
  if (user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized Access" });
  }
};

module.exports = {
  login,
  loginRequired,
};
