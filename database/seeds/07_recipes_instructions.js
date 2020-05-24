
exports.seed = async function(knex) {
  await knex("recipes_instructions").insert([
     {recipe_id: 1, step_no: 1, instruction: "Preheated Oven 350F"},
     {recipe_id: 1, step_no: 2, instruction:"Put Chicken in the Oven"},

     {recipe_id: 2, step_no: 1, instruction: "coat in bbq sauce"},
     {recipe_id: 2, step_no: 2, instruction:"sprinkle with salt and pepper"},
     {recipe_id: 2, step_no: 3, instruction: "cook for 45 minutes on 350 degreesF"},
  

     {recipe_id: 3, step_no: 1, instruction: "combine all ingredients"},
     {recipe_id: 3, step_no: 2, instruction:"pinch off about 1 oz of mixture"},
     {recipe_id: 3, step_no: 3, instruction: "roll in ball"},
     {recipe_id: 3, step_no: 4, instruction:"place on sheet pan coated with baking spray"},
     {recipe_id: 3, step_no: 5, instruction:"cook for 45 minutes at 425 degrees"},
    

     {recipe_id: 4, step_no: 1, instruction: "Preheated Oven 350F"},
     {recipe_id: 4, step_no: 2, instruction: "Put the Fish in the Oven"},     
     
  ])
};
