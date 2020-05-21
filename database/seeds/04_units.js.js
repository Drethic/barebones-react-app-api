
exports.seed = async function(knex) {
  await knex("units").insert([
    {name: "Count"},
    {name: "cup"},
    {name: "ounce"},
    {name: "pound"}, 
    {name: "tablespoons"},
    {name: "teaspoons"}       
  ])
};
