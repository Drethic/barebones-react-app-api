const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

function getIngredients() 
{
    return db("ingredients").select("id", "name");
}

async function add(ingredient) {
    const [id] = await db("ingredients").insert(ingredient);
    return findById(id);
}

function findById(id) 
{
    return db("ingredients").select("id", "name").where({id}).first();
}

async function update(id, ingredient)
{
    await db("ingredients").update(ingredient).where({id});
    return findById(id);
}

function remove(id)
{
    return db("ingredients").where({id}).del();
}

async function checkIngredient(ingredient) 
{
    const {id, name} = ingredient;

    const query = db("ingredients").where({name})
    
    if(id) {
        query.whereNot({id})  // in case of update   
    } 
    return await query.first();
}

module.exports = {
    getIngredients,
    add,
    findById,
    update,
    remove,
    checkIngredient
}