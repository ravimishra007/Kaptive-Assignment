require("dotenv").config();
const express = require("express");
const { getUsers, registration, login, logout } = require("../controllers/user.controller");
const userRouter = express.Router();

// Get users
userRouter.get("/users",getUsers );

// Register
userRouter.post("/register", registration);

// Login
userRouter.post("/login",login );

// Logout
userRouter.post("/logout", logout );



module.exports = { userRouter };
