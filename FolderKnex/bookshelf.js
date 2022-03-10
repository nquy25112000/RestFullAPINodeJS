const knex = require('./knex')
const bookshelf = require('bookshelf')(knex)

const Order = bookshelf.model('Order', {
    tableName: 'orders'
})

const Customer = bookshelf.model('Customer', {
    tableName: 'customers',
    orders() {
        return this.hasMany("Order", "customer_idd")
    }
});

// Customer.fetchAll().then(result =>{
//     console.log(JSON.stringify(result))
// })

const fillAllCustomer = () => {
    //select * from customers
    knex.select().table('customers')
        .then(result => {
            console.log( "result :" + JSON.stringify(result))
        })
}
fillAllCustomer();