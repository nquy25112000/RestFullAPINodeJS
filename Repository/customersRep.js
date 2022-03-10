const knex = require('../FolderKnex/knex')
const Customer = require('../models/customerMoldels')
const Order = require('../models/orderMoldes')

exports.fillAllCustomer = (callback) => {
    //select * from customers
    knex.select().table('customers')
        .then(result => {
            callback(result);
        })
}

exports.fillAllCustomer2 = (callback) => {
    Customer.fetchAll()
        .then(reslult => {
            callback(reslult)
        })
}

exports.createCustomer = (customer) => {
    new Customer({ name: customer }).save()
}




exports.updateCustomer = (idCustomer, customerName, callback) => {
    knex('customers')
        .where('id', '=', idCustomer)
        .update({
            name: customerName,
            thisKeyIsSkipped: undefined
        })
        .then(result => {
            callback(result)
        })
}



exports.deleteCustomer = (idCustomer, callback) => {
    knex.where({ 'id': idCustomer }).delete().table("customers").then((result) => {
        callback(result);
    })
}

exports.customerOrders = (customerId, callback) => {
    //fetch join
    new Customer({ id: customerId }).fetch({ withRelated: ['orders'] })
        .then((customer) => {
            callback(customer)
        })
}

exports.customerOrders2 = (callback) => {
    knex('customers')
        .join('orders', 'customers.id', '=', 'orders.customer_idd')
        .select('customers.name', 'orders.total')
        .then(result => {
            callback(result);
        })
}