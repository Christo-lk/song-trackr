// Update with your config settings.
// const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/dev.sqlite3'
    },
    seeds: {
      directory: './server/seeds'
    },
    migrations: {
      directory: './server/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: './server/testSeeds'
    },
    migrations: {
      directory: './server/testmigrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
