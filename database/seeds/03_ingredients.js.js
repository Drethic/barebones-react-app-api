
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name:"Salt"},
    {name:"Onion"},
    {name:"Garlic"},
    {name:"Potato"},
    {name:"Tomatoes"}       
  ])
};
