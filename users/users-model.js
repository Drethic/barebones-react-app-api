const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

async function register(user) {
    user.password = await bcrypt.hashSync(user.password, 8);
    const [id] = await db("users").insert(user);
    return findById(id);
}

async function update(id, user)
{
    user.password = await bcrypt.hashSync(user.password, 8);
    await db("users").update(user).where({id});
    return findById(id);
}

function remove(id)
{
    return db("users").where({id}).del();
}

function findById(id) 
{
    return db("users").select("id", "name", "email").where({id}).first();
}

function findBy(filter) 
{
    return db("users").where(filter).first();
}

function getUsers() 
{
    return db("users").select("id", "name", "email");
}

async function checkUser(user) 
{
    const {id, email} = user;

    const query = db("users").where({email})
    
    if(id) {
        query.whereNot({id})  // in case of update   
    } 
    
    return await query.first();
}

module.exports = {
    register,
    findById,
    findBy,
    getUsers,
    checkUser,
    update,
    remove
}