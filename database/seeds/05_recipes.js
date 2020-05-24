

exports.seed = async function(knex) {
  await knex("recipes").insert([
    { user_id: 1, category_id: 1, title: "Fried Chicken", source: "Grandma", description:"Nice Tast"},
    { user_id: 1, category_id: 1, title: "Mom's Best Chicken", source: "Momma", description:"Sweet BBQ Chicken"},
    { user_id: 1, category_id: 2, title: "Italian Sausage Meat Balls", source: "Grandma", description:"Delicious with Garlic Bread"},
    { user_id: 2, category_id: 2, title: "Pasta", description:"Lovely Tast"}
  ])
};

