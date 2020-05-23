const express = require("express")
const recipeModel = require("./recipes-model")
const restrict = require("../auth/restricted-middleware.js");
const {validateRecipeData, validateRecipeId, isUserRecipe, validateRecipeIngredData, isRecipeIngredUnique} = require("../middleware/recipe.js");

const router = express.Router()


// Get All Recipes
router.get("/", restrict(), async (req, res, next) => {
  
   try { 

         const recipes = await recipeModel.getRecipes()
         res.json(recipes)

   } catch(err) {
         next(err)
   }

})

// Get Recipe By ID
router.get("/:id", restrict(), validateRecipeId(), async (req, res, next) => {
  
   try { 
         const  id  = req.params.id
         const recipe = await recipeModel.findById(id)
         const recipe_ingredients  = await recipeModel.getRecipeIngredients(id)
         const recipe_instructions = await recipeModel.getRecipeInstrunctions(id)
         const recipe_obj = {...recipe, ingredients:recipe_ingredients,instructions:recipe_instructions}
         res.json(recipe_obj)

   } catch(err) {
         next(err)
   }

})


// Add Recipe
router.post("/", restrict(), validateRecipeData(), async (req, res, next) => {
  
   try { 
         
         const {category_id, title, source, description, image_link} = req.body
         const payload = {
            user_id: req.id,   //logged in user id
            category_id: category_id,
            title: title,
            source: source,
            description: description,
            image_link: image_link           
         }
        
         const recipe = await recipeModel.add(payload) 
         res.json(recipe)

   } catch(err) {
         next(err)
   }

})


// Update Recipe
router.put("/:id", restrict(), validateRecipeData(), isUserRecipe(), async (req, res, next) => {
  
   try { 
         const id = req.params.id
         const {category_id, title, source, description, image_link} = req.body
         const payload = {
            user_id: req.id,   //logged in user id
            category_id: category_id,
            title: title,
            source: source,
            description: description,
            image_link: image_link           
         }
        
         const recipe = await recipeModel.update(payload,id)

       
         res.json(recipe)

   } catch(err) {
         next(err)
   }

})

// Delete Recipe
router.delete('/:id', restrict(), isUserRecipe(), async (req, res, next) => {  
   
   try { 
         const id = req.params.id    
         await recipeModel.remove(id)      
         res.status(204).end()

   } catch(err) {
         next(err)
   }
 
 })


 
// Get Recipe Ingredients
router.get("/:id/ingredients", restrict(), isUserRecipe(), async (req, res, next) => {
  
      try { 
            const  {id:recipe_id}  = req.params
            const recipe_ingredients = await recipeModel.getRecipeIngredients(recipe_id)
            res.json(recipe_ingredients)
   
      } catch(err) {
            next(err)
      }
   
})


// Add Recipe Ingredients
router.post("/:id/ingredients", restrict(), validateRecipeIngredData(), isUserRecipe(), isRecipeIngredUnique(), async (req, res, next) => {

      try {             
            const {id:recipe_id} = req.params
            const {ingredient_id, unit_id, quantity} = req.body
            const payload = {
               recipe_id: recipe_id,
               ingredient_id: ingredient_id,
               unit_id: unit_id,
               quantity: quantity                   
            }
           
            await recipeModel.addRecipeIngredient(payload)  
            const recipe_ingredient = await recipeModel.getRecipeIngredients(recipe_id,ingredient_id)     
        
            res.json(recipe_ingredient)
   
      } catch(err) {
            next(err)
      }
   
})

// Update Recipe Ingredients
router.put("/:id/ingredients/:ingred_id", restrict(), validateRecipeIngredData(), isUserRecipe(), isRecipeIngredUnique(), async (req, res, next) => {

      try {             
            const {id:recipe_id,ingred_id:old_ingredient_id} = req.params
            const {ingredient_id, unit_id, quantity} = req.body
            const payload = {
               recipe_id: recipe_id,
               ingredient_id: ingredient_id,
               unit_id: unit_id,
               quantity: quantity                   
            }
           
            await recipeModel.updateRecipeIngredient(payload,recipe_id,old_ingredient_id)  
            const recipe_ingredient = await recipeModel.getRecipeIngredients(recipe_id,ingredient_id)     
        
            res.json(recipe_ingredient)
   
      } catch(err) {
            next(err)
      }
   
})

// Delete Recipe Ingredient By ID
router.delete('/:id/ingredients/:ingred_id', restrict(), isUserRecipe(), async (req, res, next) => {  
   
      try { 
            const {id:recipe_id, ingred_id:ingredient_id} = req.params   
            await recipeModel.removeRecipeIngredients(recipe_id,ingredient_id)      
            res.status(204).end()
   
      } catch(err) {
            next(err)
      }
    
 })
   


module.exports = router