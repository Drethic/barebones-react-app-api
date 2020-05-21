
exports.seed = async function(knex) {

  await knex("categories").insert([
    {name: "Chicken", description:"chicken description"},
    {name: "Fish", description:"fish description"}
  ])
  
};
