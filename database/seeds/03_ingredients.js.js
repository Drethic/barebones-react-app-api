
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name:"Salt"},
    {name:"Onion"},
    {name:"Garlic"},
    {name:"Potato"},
    {name:"Tomatoes"},
    {name: 'cheese'},    
    {name: 'garlic powder'},
    {name: 'red bell pepper'},
    {name: 'Green Bell Pepper'},
    {name: 'Ground Turkey'},
    {name: 'Italian Sausage'},
    {name: 'egg'}     
  ])
};
