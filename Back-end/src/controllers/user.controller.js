const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { blackListModel } = require("../models/blackList");
const { userModel } = require("../models/user.schema");


// get
const getUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      return res.status(200).json({ error: false, items: users });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: true, msg: "Unable to get the data." });
    }
  }



//   registration

  const registration = async (req, res) => {
    const { name, email, password, role } = req.body;
    const saltRounds = 10;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        console.log("You are already registered, please log in.");
        return res.status(401).send({ msg: "You are already registered" });
      } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ error: true, msg: "Unable to register" });
          }
          const newUser = new userModel({ name, email, role, password: hash });
          await newUser.save();
          return res
            .status(200)
            .json({ error: false, msg: "Registered successfully" });
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: true, msg: "Unable to register" });
    }
  }


//   login
  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email:email });
      if (!user) {
        console.log("User not found! Please register first.");
        return res
          .status(404)
          .json({ error: true, msg: "User not found! Please register first." });
      }
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: true, msg: "Error comparing passwords" });
        }
        if (result) {
          const accessToken = jwt.sign(
            { userId: user._id },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          return res
            .status(200)
            .json({ error: false, msg: "Login successful", accessToken });
        } else {
          return res
            .status(401)
            .json({
              error: true,
              msg: "Password does not match. Please enter the correct password.",
            });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: true, msg: "Unable to login" });
    }
  }


//   logout

  const logout = async (req, res) => {
    try {
      const header = req.headers.authorization;
      if (!header || !header.startsWith("Bearer ")) {
        console.log("No token found in the Authorization header");
        return res.status(401).json({ error: true, msg: "Unauthorized" });
      }
      const token = header.split(" ")[1];
      if (!token) {
        console.log("No token found");
        return res.status(400).json({ error: true, msg: "No token found" });
      }
      const userToken = new blackListModel({ token });
      await userToken.save();
      return res
        .status(200)
        .json({ error: false, msg: "Logged out successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: true, msg: "Unable to logout" });
    }
  }

  module.exports = {getUsers,registration,login ,logout}