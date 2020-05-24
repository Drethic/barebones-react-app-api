exports.seed = async function(knex) { 
  await knex("recipes_instructions").truncate()
  await knex("recipes_ingredients").truncate()  
  await knex("recipes").truncate()
  await knex("units").truncate()  

  await knex("ingredients").truncate()  
  await knex("categories").truncate()
  await knex("users").truncate()   
};

