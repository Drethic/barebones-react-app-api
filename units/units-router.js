const express = require("express");
const Units = require("./units-model.js");
const restrict = require("../auth/restricted-middleware.js");
const {validateUnitData, validateUnitId, isUnitUnique} = require("../middleware/unit.js")
const router = express.Router();

// Get all units.
router.get("/", restrict(), async (req, res, next) => {
    
    try {
        const unitsRes = await Units.getUnits(); 
        return res.status(200).json(unitsRes);  
    } catch(err) {
        next(err);
    }
} )


// Add unit.
router.post("/", restrict(), validateUnitData(), isUnitUnique(), async (req, res, next) => {
    
    try {
        const payload = {
            name:req.body.name
        }          
        const unit = await Units.add(payload);
        return res.status(201).json(unit);
       
      } catch(err) {
        next(err);
    }
})

// Get unit by id.
router.get("/:id", restrict(), validateUnitId(), async (req, res, next) => {
    return res.status(200).json(req.unit);
} )

// Update unit.
router.put("/:id", restrict(), validateUnitData(), validateUnitId(), isUnitUnique(), async (req, res, next) => {    
    
    try {
        const payload = {
            name:req.body.name
        }

        const unit = await Units.update(req.params.id, payload);
        return res.status(201).json(unit);

    } catch(err) {
        next(err);
    }
})

// Delete unit.
router.delete("/:id",  validateUnitId(), async (req, res, next) => {

    try {
        await Units.remove(req.params.id);
        return res.status(204).end();  // may be we can use 202 code as well we dont want to sent any message/response in this case 
    } catch(err) {
        next(err);
    }
 
 })

module.exports = router;