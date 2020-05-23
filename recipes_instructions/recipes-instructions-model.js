const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

function getRecipesInstrunctions() 
{
    return db("recipes_instructions").select("id", "recipe_id", "step_no", "instruction");
}

async function add(recipesInstrunction) {
    const [id] = await db("recipes_instructions").insert(recipesInstrunction);
    return findById(id);
}

function findById(id) 
{
    return db("recipes_instructions").select("id", "recipe_id", "step_no", "instruction").where({id}).first();
}

async function update(id, recipesInstrunction)
{
    await db("recipes_instructions").update(recipesInstrunction).where({id});
    return findById(id);
}

function remove(id)
{
    return db("recipes_instructions").where({id}).del();
}

module.exports = {
    getRecipesInstrunctions,
    add,
    findById,
    update,
    remove
}