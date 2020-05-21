const bcrypt = require('bcryptjs');
const db = require("../database/db-config.js");

async function register(user) {
    user.password = await bcrypt.hashSync(user.password, 8);
    const [id] = await db("users").insert(user);
    return findById(id);
}

function findById(id) 
{
    return db("users").select('name', 'email').where({id}).first();
}

function findBy(filter) 
{
    return db("users").where(filter).first();
}

module.exports = {
    register,
    findById,
    findBy
}