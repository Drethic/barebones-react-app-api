module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'recipes_cookbook'
       // insecureAuth : true
      },
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' }
  },

  testing: {
    client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'recipes_cookbook'
      },
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' }
  },

  production: {
    client: 'mysql',
      connection: {
        host : 'us-cdbr-east-06.cleardb.net',
        user : 'bcd3a892affde9',
        password : 'be75ab66',
        database : 'heroku_43185ac3ba2fb6f'
      },
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' }
  },
   
};
