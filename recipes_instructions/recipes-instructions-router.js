const express = require("express");
const RecipesInstrunctions = require("./recipes-instructions-model.js");
const restrict = require("../auth/restricted-middleware.js");
const {validateRecipesInstrunctionData, validateRecipesInstrunctionId} = require("../middleware/recipe-instruction.js");
const router = express.Router();

// Get all recipes insturctions.
router.get("/", restrict(), async (req, res, next) => {
    
    try {
        const recipesInstrunctionsRes = await RecipesInstrunctions.getRecipesInstrunctions(); 
        return res.status(200).json(recipesInstrunctionsRes);  
    } catch(err) {
        next(err);
    }
} )


// Add recipe insturction.
router.post("/", restrict(), validateRecipesInstrunctionData(), async (req, res, next) => {
    
    try {
        const payload = {
            recipe_id :req.body.recipe_id,
            step_no :req.body.step_no,
            instruction :req.body.instruction,
        }          
        const recipesInstrunction = await RecipesInstrunctions.add(payload);
        return res.status(201).json(recipesInstrunction);
       
      } catch(err) {
        next(err);
    }
})

// Get recipe instruction by id.
router.get("/:id", restrict(), validateRecipesInstrunctionId(), async (req, res, next) => {
    return res.status(200).json(req.recipesInstrunction);
} )

// Update recipe instrunction.
router.put("/:id", restrict(), validateRecipesInstrunctionData(), validateRecipesInstrunctionId(), async (req, res, next) => {    
    
    try {
        const payload = {
            recipe_id :req.body.recipe_id,
            step_no :req.body.step_no,
            instruction :req.body.instruction,
        }

        const recipesInstrunction = await RecipesInstrunctions.update(req.params.id, payload);
        return res.status(201).json(recipesInstrunction);

    } catch(err) {
          next(err);
    }
})

// Delete recipe instrunction.
router.delete("/:id",  validateRecipesInstrunctionId(), async (req, res, next) => {

    try {
        await RecipesInstrunctions.remove(req.params.id);
        return res.status(204).end();  // may be we can use 202 code as well we dont want to sent any message/response in this case 
    } catch(err) {
        next(err);
    }
 
 })

module.exports = router;