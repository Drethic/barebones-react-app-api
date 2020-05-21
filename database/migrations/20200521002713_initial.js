exports.up = async function(knex) {

    await knex.schema.createTable('users', (table) => {
         table.increments("id"),
         table.varchar("name", 120).notNull(),
         table.varchar("email", 150).notNull().unique(),
         table.varchar("password", 150).notNull()
    })  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
};
