
exports.seed = async function(knex) {

  await knex("categories").insert([
    {
      name: 'Lunch',         
      description: 'For Your MidDay Meal'
    },
    {
        name: 'Dinner',
        description: 'That Last Meal of the Day'
    },
    {
        name: 'Supper',
        description: 'That Last Meal of the Day'
    },
    {
        name: 'Side',
        description: 'Add On To Any Meal'
    },
    {
        name: 'Main',
        description: 'The Major Part of the Meal'
    },
    {
        name: 'Drink',
        description: 'Something refreshing for Your Meal or Any Time'
    },
    {
        name: 'Dessert',
        description: 'A treat, sweet or savory'
    },
    {
        name: 'Bread',
        description: 'Loaves, Rolls, and everything else'
    },
    {
        name: 'Soups',
        description: 'Loaves, Rolls, and everything else'
    }
  ])
  
};
