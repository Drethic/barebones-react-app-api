const recipes = require("../recipes/recipes-model.js");

module.exports = {

    validateRecipeData() {

        return async (req, res, next) => {
     
            if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
     
                res.status(404).json({message: "missing recipe data"});
     
            } else if(!req.body.category_id || !req.body.title || !req.body.description) {
     
                res.status(404).json({message: "missing category_id, title and description field"});
     
            } 
            else {
                next();
            }        
     
        }
    },

    validateRecipeId: () => { 
    
        return async (req, res, next) => {
           try {
              const recipe = await recipes.findById(req.params.id);
              if(!recipe) { 
                 res.status(404).json({message: "Record not exist"});
              } else {
                 req.recipe = recipe;            
                 next();
              }
     
           } catch(err) {
              next(err);
           }
        }
     },

     isUserRecipe : () => { 
    
        return async (req, res, next) => {
           try {
              const user_id = req.id //logged in user id
              const recipe_id = req.params.id 
              const recipe = await recipes.isUserRecipe(recipe_id,user_id);
              if(!recipe) { 
                 res.status(404).json({message: "Recipe not related to this user"});
              } else {
                 req.recipe = recipe;            
                 next();
              }
     
           } catch(err) {
              next(err);
           }
        }
     },

     validateRecipeIngredData() {

        return async (req, res, next) => {
     
            if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
     
                res.status(404).json({message: "missing ingredient data"});
     
            } else if(!req.body.ingredient_id || !req.body.unit_id || !req.body.quantity) {
     
                res.status(404).json({message: "missing ingredient_id, unit_id and quantity field"});
            
            } 
            else {
                next();
            }        
     
        }
    },

     isRecipeIngredUnique: (action) =>  {

        return async (req, res, next) => {
            
            try {  
                    const {id:recipe_id,ingred_id:old_ingredient_id} = req.params    
                    const payload = {
                        recipe_id: recipe_id,
                        ingredient_id: req.body.ingredient_id,
                        old_ingredient_id: old_ingredient_id || ""
                    }
                    
                    const recipe = await recipes.checkRecipeIngredUnique(payload);                    

                    if(recipe) {
                        return res.status(404).json({message: "Ingredient  is already exist in recipe."});    
                    } else {
                        next();             
                    }
     
            } catch (err) {
                  next(err)
            }
        }
     }
}