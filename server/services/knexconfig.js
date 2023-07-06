require("dotenv").config();


const pass = process.env.PGPASSWORD
const user = process.env.PGUSER
const database = process.env.PGDATABASE


module.exports = {
    
    development: {
      client: 'pg',
      connection: {
        database: database,
        user: user,
        password: pass,
      },
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
  };
  