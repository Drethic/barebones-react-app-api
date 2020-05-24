
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    
    {name: "Salt"},
    {name: "Pepper"},  
    {name: "Onion"},
    {name: "Garlic"},
    {name: "Potato"},
    {name: "Tomatoes"},
    {name: "cheese"},    
    {name: "garlic powder"},
    {name: "red bell pepper"},
    {name: "Green Bell Pepper"},
    {name: "Ground Turkey"},
    {name: "Italian Sausage"},
    {name: "egg"},
    {name: "Chicken Legs"},
    {name: "BBQ Sauce"},    
    {name: "red pepper flakes"}

  ])
};

