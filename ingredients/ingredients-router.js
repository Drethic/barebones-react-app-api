const express = require("express");
const Ingredients = require("./ingredients-model.js");
const restrict = require("../auth/restricted-middleware.js");
const {validateIngredientData, validateIngredientId, isIngredientUnique} = require("../middleware/ingredient.js")
const router = express.Router();

// Get all ingredients.
router.get("/", restrict(), async (req, res, next) => {
    
    try {
        const ingredientsRes = await Ingredients.getIngredients(); 
        return res.status(200).json(ingredientsRes);  
    } catch(err) {
        next(err);
    }
} )


// Add ingredient.
router.post("/", restrict(), validateIngredientData('add'), isIngredientUnique(), async (req, res, next) => {
    
    try {
        const payload = {
            name:req.body.name,
        }          
        const ingredient = await Ingredients.add(payload);
        return res.status(201).json(ingredient);
       
      } catch(err) {
        next(err);
    }
})

// Get ingredient by id.
router.get("/:id", restrict(), validateIngredientId(), async (req, res, next) => {
    return res.status(200).json(req.ingredient);
} )

// Update ingredient.
router.put("/:id", restrict(), validateIngredientData('update'), validateIngredientId(), isIngredientUnique(), async (req, res, next) => {    
    
    try {
        const payload = {
            name:req.body.name,
        }

        const ingredient = await Ingredients.update(req.params.id, payload);
        return res.status(201).json(ingredient);

    } catch(err) {
          next(err)
    }
})

// Delete ingredient.
router.delete("/:id",  validateIngredientId(), async (req, res, next) => {

    try {
          await Ingredients.remove(req.params.id);
          return res.status(204).end()  // may be we can use 202 code as well we dont want to sent any message/response in this case 
    } catch(err) {
         next(err)
    }
 
 })

module.exports = router;