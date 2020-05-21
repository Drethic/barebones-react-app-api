exports.up = async function(knex) {

   await knex.schema.createTable('users', (table) => {
         table.increments("id"),
         table.varchar("name", 120).notNull(),
         table.varchar("email", 150).notNull().unique(),
         table.varchar("password", 150).notNull()
    }) 
    
   await knex.schema.createTable('categories', (table) => {
         table.increments("id"),
         table.varchar("name", 120).notNull().unique(),
         table.varchar("description", 250)
   })

   await knex.schema.createTable('ingredients', (table) => {
         table.increments("id"),
         table.varchar("name", 120).notNull().unique()        
   })

   await knex.schema.createTable("units", (table) => {
         table.increments("id"),
         table.varchar("name", 120).notNull().unique()
   })

   await knex.schema.createTable("recipes", (table) => {
         table.increments("id"),              
         table.integer("user_id")
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'),
         table.integer("category_id")
                .references("id")
                .inTable("categories")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'),        
         table.varchar("title", 120).notNull(),
         table.varchar("source", 150),
         table.varchar("description", 250).notNull()       
   }) 

   await knex.schema.createTable("recipes_ingredients", (table) => {                     
         table.integer("recipe_id")
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'),
         table.integer("ingredient_id")
                .references("id")
                .inTable("ingredients")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'), 
         table.integer("unit_id")
                .references("id")
                .inTable("units")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'),  
         table.float("quantity").notNull()
         table.primary(["recipe_id","ingredient_id","unit_id"])                      
             
    }) 

   await knex.schema.createTable("recipes_instructions", (table) => {      
         table.increments("id")               
         table.integer("recipe_id")
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate('CASCADE'),
         table.integer("step_no").notNull(),              
         table.varchar("instruction", 250).notNull()            
    }) 



};

exports.down = async function(knex) {    
    await knex.schema.dropTableIfExists("recipes_instructions")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("units")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("categories")
    await knex.schema.dropTableIfExists("users")
};
