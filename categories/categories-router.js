const express = require("express");
const Categories = require("./categories-model.js");
const recipes = require("../recipes/recipes-model.js");
const restrict = require("../auth/restricted-middleware.js");
const {validateCategoryData, validateCategoryId, isCategoryUnique} = require("../middleware/category.js")
const router = express.Router();

// Get all categories.
router.get("/", restrict(), async (req, res, next) => {
    
    try {
        const categoriesRes = await Categories.getCategories(); 
        return res.status(200).json(categoriesRes);  
    } catch(err) {
        next(err);
    }
} )


// Add category.
router.post("/", restrict(), validateCategoryData('add'), isCategoryUnique(), async (req, res, next) => {
    
    try {
        const payload = {
            name:req.body.name,
            description:req.body.description,
        }          
        const category = await Categories.add(payload);
        return res.status(201).json(category);
       
      } catch(err) {
        next(err);
    }
})

// Get category by id.
router.get("/:id", restrict(), validateCategoryId(), async (req, res, next) => {
    return res.status(200).json(req.category);
} )

// Update category.
router.put("/:id", restrict(), validateCategoryData('update'), validateCategoryId(), isCategoryUnique(), async (req, res, next) => {    
    
    try {
        const payload = {
            name:req.body.name,
            description:req.body.description,
        }

        const category = await Categories.update(req.params.id, payload);
        return res.status(201).json(category);

    } catch(err) {
          next(err);
    }
})

// Delete category.
router.delete("/:id",  validateCategoryId(), async (req, res, next) => {

    try {
          await Categories.remove(req.params.id);
          return res.status(204).end();  // may be we can use 202 code as well we dont want to sent any message/response in this case 
    } catch(err) {
         next(err);
    }
 
 })

// Get Recipes By Category ID
router.get("/:id/recipes", restrict(), validateCategoryId(), async (req, res, next) => {

    try {
          const recipesRes = await recipes.findBy({category_id:req.params.id});
          return res.json(recipesRes)  
    } catch(err) {
       next(err)
    }    

})

module.exports = router;