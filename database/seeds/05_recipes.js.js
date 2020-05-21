

exports.seed = async function(knex) {
  await knex("recipes").insert([
    { user_id: 1, category_id: 1, title: "Fried Chicken", source: "Grandma", description:"Awsome Tast"},
    { user_id: 2, category_id: 2, title: "Fried Fish ", description:"Lovely Tast"}
  ])
};

