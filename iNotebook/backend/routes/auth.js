const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const { genSalt } = require("bcryptjs");
var jwt = require('jsonwebtoken');


const JWT_SECRET="Tusharisagoodb$oy"
//create a User using :POST "/api/auth/createuser".No login required
router.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Password should be at least 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //    If there are errors ,return bad req and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check wheather user with the email exists already
   const salt=await genSalt(10);
   const secPas=await bcrypt.hash(req.body.password,salt) 

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists." });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:secPas,
      });
      // .then(user=>res.json(user))
      // .catch(error=>{console.log(error)
      // res.json({error:"Pls enter unique value for email",message:error.message})})
      const data={
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET)
      res.json({authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
