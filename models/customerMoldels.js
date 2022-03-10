const knex = require('../FolderKnex/knex');

const bookshelf = require('bookshelf')(knex);
const Orders = require('./orderMoldes')


const Customer = bookshelf.model('Customer', {
  tableName: 'customers',
  orders() {
    return this.hasMany(Orders, "customer_idd")
  }
});
//-------------------------------------------
module.exports = Customer;



