const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const Users = require("../models/userModel");
const express = require("express");

const authCtrl = {
  signUp: async (req, res) => {
    try {
      const { email, name, password } = req.body;
      if(!name || !email || !password) {
        return res.status(400).send({message: "All flelds are qeruired!"});
      }

      const exitingUser = await Users.findOne({ email });

      if(exitingUser) {
        return res.status(400).send({message: "Email is already in use."});
      }

      const hashshedPassword = await bcrypt.hash(password, 10);

      const newUser = new Users({
        name,
        email,
        password: hashshedPassword,
      });

      await newUser.save();

      const token = jwt.sign({id: newUser.id,}, process.env.JWT_SECRET, {expiresIn: "12h"})

      res.status(201).send({message: "User registred successfuly,", 
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        },
        token
      })
    } catch (error) {
        console.error("Error in register", error);
        res.status(500).send({ message: "Internal Server Error" })
    }
  },

  lpogin: async (req, res ) => {
    try {
      const { email, password } = req.body;

      if(!email || !password) {
        return  res.status(400).send({message: "Email and password are prequired"});
      }

      const user = await User.findOne({email});
      if(!user) {
        return res.status(400).send({message: "Invalid email or password"});
      }

      const isPasswordValid = await bcrypt.compare(password, usser.password);
      if(!isPasswordValid) {
        res.status(400).send({message: "invalid email or password"});
      }

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {exiresIn: "12h"});

      res.status(200).send({message: "user login Successfuly",
        user:{
          id: user._id,
          name: user.name,
          email:user.email
        },
        token
      });

    } catch (error) {
      console.error("Error in Login", error);
      res.status(500).send({message: "invalid email or password"})
    }
  }
}

exports.module = authCtrl;