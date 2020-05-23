const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

function getCategories() 
{
    return db("categories").select("id", "name", "description");
}

async function add(category) {
    const [id] = await db("categories").insert(category);
    return findById(id);
}

function findById(id) 
{
    return db("categories").select("id", "name", "description").where({id}).first();
}

async function update(id, category)
{
    await db("categories").update(category).where({id});
    return findById(id);
}

function remove(id)
{
    return db("categories").where({id}).del();
}

async function checkCategory(category) 
{
    const {id, name} = category;

    const query = db("categories").where({name})
    
    if(id) {
        query.whereNot({id})  // in case of update   
    } 
    return await query.first();
}

module.exports = {
    getCategories,
    add,
    findById,
    update,
    remove,
    checkCategory
}