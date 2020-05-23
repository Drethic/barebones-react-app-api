const RecipesInstrunctions = require("../recipes_instructions/recipes-instructions-model.js");

module.exports = {

    validateRecipesInstrunctionData(action) {

        return async (req, res, next) => {
     
            if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
     
                res.status(404).json({message: "missing recipe instrunction data"});
     
            } else if(action === 'add' && (!req.body.recipe_id || !req.body.step_no || !req.body.instruction)) {
     
                res.status(404).json({message: "missing recipie id, step no or instruction field"});
     
            } 
            else  if(action === 'update' && (!req.body.recipe_id || !req.body.step_no || !req.body.instruction)) {
     
                res.status(404).json({message: "missing recipie id, step no or instruction field"});
     
            } else {
                next();
            }        
     
        }
    },

    validateRecipesInstrunctionId: () => { 
    
        return async (req, res, next) => {
           try {
              const recipesInstrunction = await RecipesInstrunctions.findById(req.params.id);
              if(!recipesInstrunction) { 
                 res.status(404).json({message: "Record not exist"});
              } else {
                 req.recipesInstrunction = recipesInstrunction;            
                 next();
              }
     
           } catch(err) {
              next(err);
           }
        }
     }
    
}