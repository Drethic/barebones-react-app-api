const express = require("express");
const Users = require("./users-model.js");
const recipes = require("../recipes/recipes-model.js");
const restrict = require("../auth/restricted-middleware.js");
const {validateUserData, validateUserId, isUserUnique} = require("../middleware/user.js");
const router = express.Router();

// Get all users.
router.get("/", restrict(), async (req, res, next) => {
    
    try {
        const usersRes = await Users.getUsers(); 
        return res.status(200).json(usersRes);  
    } catch(err) {
        next(err);
    }
} )

// Get user by id.
router.get("/:id", restrict(), validateUserId(), async (req, res, next) => {
    return res.status(200).json(req.user);
} )

// Update user.
router.put("/:id", restrict(), validateUserData(), validateUserId(), isUserUnique(), async (req, res, next) => {    
    
    try {
        const payload = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }

        const user = await Users.update(req.params.id, payload);
        return res.status(201).json(user);

    } catch(err) {
          next(err)
    }
})

// Delete user.
router.delete("/:id",  validateUserId(), async (req, res, next) => {

    try {
          await Users.remove(req.params.id);
          return res.status(204).end()  // may be we can use 202 code as well we dont want to sent any message/response in this case 
    } catch(err) {
         next(err)
    }
 
 })

 // Get Recipes By User ID
router.get("/:id/recipes", restrict(), validateUserId(), async (req, res, next) => {

    try {
          const recipesRes = await recipes.findBy({user_id:req.params.id});
          return res.json(recipesRes)  
    } catch(err) {
       next(err)
    }    

})

module.exports = router;