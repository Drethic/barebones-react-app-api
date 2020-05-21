exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    {recipe_id: 1, ingredient_id: 1, quantity:0.5, unit_id:5},
    {recipe_id: 1, ingredient_id: 2, quantity:2, unit_id:1},

    {recipe_id: 2, ingredient_id: 2, quantity:2.5, unit_id:4},
    {recipe_id: 2, ingredient_id: 3, quantity:1.5, unit_id:4}
  ])
};