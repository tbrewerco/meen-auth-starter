// Dependencies
const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// New (reg. page)

// Create (reg. route)

// User Schema
const userSchema = Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required, true }
});

// User Model
const User = mongoose.model("User", userSchema);

// Export User Router
module.exports = userRouter;

// Export User Model
module.exports = User;