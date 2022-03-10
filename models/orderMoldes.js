const knex = require('../FolderKnex/knex')
const bookshelf = require('bookshelf')(knex)

const Orders = bookshelf.model('Orders', {
  tableName: 'orders'
})

module.exports = Orders;