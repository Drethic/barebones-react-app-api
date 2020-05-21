const express = require("express");
const Users = require("../users/users-model.js");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


router.post("/register", validateUserData('register'), async (req, res, next) => {
    
    try {
        const {email} = req.body
        const user = await Users.findBy({email}).first()
    
        if(user) {
          res.status(409).json({"message": "Email is already taken"})
        } else {
            const payload = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }          
            const user = await Users.register(payload);
            return res.status(201).json(user);
        }
       
      } catch(err) {
        next(err);
    }
})

router.post("/login", validateUserData('login'), async (req, res, next) => {

    const authError = {
        message: "Incorrect credentials"
    }
    
    try {

        const {email, password} = req.body;
        const user = await Users.findBy({email});
       
        if(!user) {
           return res.status(401).json(authError);
        }

        const passwordValid = await bcrypt.compareSync(password, user.password);

        if(!passwordValid) {
            return res.status(401).json(authError);
        }

        const payload = { 
            id: user.id,
            name: user.name
        }
       
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        //set Cookie
        res.cookie("token", token);

        return res.status(200).json( {
            message: `Welcome ${user.name}`,
            token: token
        });

    } catch(err) {
        next(err);
    }
 
})

function validateUserData(action) {

    return async (req, res, next) => {
 
        if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
 
            res.status(404).json({message: "missing user data"})
 
        } else if(action === 'register' && (!req.body.name || !req.body.email || !req.body.password )) {
 
            res.status(404).json({message: "missing name, email or password field"})
 
        } 
        else if(action === 'login' && (!req.body.email || !req.body.password )) {
 
            res.status(404).json({message: "missing email or password field"})
 
        } else {
            next()
        }        
 
    }
 }

module.exports = router;