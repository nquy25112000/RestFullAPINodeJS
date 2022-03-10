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


const Order = bookshelf.model('Order', {
    tableName: 'orders'
})

const Customer = bookshelf.model('Customer', {
    tableName: 'customers',
    orders() {
        return this.hasMany("Order", "customer_idd")
    }
});


const customerOrders = (idd) => {
    //fetch join
    new Customer({ id: idd }).fetch({ withRelated: ['orders'] })
        .then((customer) => {
            console.log(customer.toJSON())
        }).catch((error) => {
            console.error(error)
        })
}
customerOrders(49);
// // //----------------------------------------------------------------
// exports.findByIdOrder = (id) => {
//     //select * orders where id = 46
//     Order.where({ id: id }).fetch()
//         .then(order => {
//             console.log(order.toJSON())
//         })
// }
// //----------------------------------------------------------------
// exports.createCustomer = (customer) => {
//     //insert customers values ('','QuyDepTrai')
//     new Customer({ name: customer }).save()
//         .then((result) => { console.log(JSON.stringify(result)) })
// }
// //---------------------------------------------------------------
// exports.fillAllCustomer = () => {
//     //select * from customers
//     knex.select().table('customers')
//         .then(result => {
//             console.log(JSON.stringify(result))
//         })
// }
// //----------------------------------------------------------------
// exports.findById = (id) => {
//     //select * from customers where id = 35
//     knex('customers').where('id', id)
//         .then(result => {
//             console.log(JSON.stringify(result))
//         })
// }
//  //-----------------------------------------------------------------


