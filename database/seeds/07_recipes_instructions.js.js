
exports.seed = async function(knex) {
  await knex("recipes_instructions").insert([
     {recipe_id: 1, step_no: 1, instruction: "Preheated Oven 350F",},
     {recipe_id: 1, step_no: 2, instruction:"Put Chicken in the Oven"},
    

     {recipe_id: 2, step_no: 1, instruction: "Preheated Oven 350F"},
     {recipe_id: 2, step_no: 2, instruction: "Put the Fish in the Oven"},     
     
  ])
};
