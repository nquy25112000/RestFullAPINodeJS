// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'knex',
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex)

// bookshelf.plugin('registry');
// bookshelf.plugin('visibility');

module.exports = bookshelf;
