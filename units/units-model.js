const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

function getUnits() 
{
    return db("units").select("id", "name");
}

async function add(unit) {
    const [id] = await db("units").insert(unit);
    return findById(id);
}

function findById(id) 
{
    return db("units").select("id", "name").where({id}).first();
}

async function update(id, unit)
{
    await db("units").update(unit).where({id});
    return findById(id);
}

function remove(id)
{
    return db("units").where({id}).del();
}

async function checkUnit(unit) 
{
    const {id, name} = unit;

    const query = db("units").where({name});
    
    if(id) {
        query.whereNot({id})  // in case of update   
    } 
    return await query.first();
}

module.exports = {
    getUnits,
    add,
    findById,
    update,
    remove,
    checkUnit
}