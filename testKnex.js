const Customer = require("./models/customerMoldels");
const Orders = require("./models/orderMoldes");
const Modelsknex = require('./test');




let ctmId = null;
new Customer({ name: "QuyNguyen" })
    .save()
    .then((customer) => {
        ctmId = customer.id;
        return new Orders({ total: 45, customer_idd: ctmId }).save();
    })
    .then((order) => {
        return new Orders({ total: 55, customer_idd: ctmId }).save();
    })
    .then((order) => {
        return Customer.where({ id: ctmId }).fetch({
            withRelated: ['orders'], require: true
        });
    })
    .then(result => {
        console.clear();
        console.log("Result is : ", result.toJSON());
    })

Customer.fetchAll()
    .then((customer) => {
        console.log(customer.toJSON())
    })

Modelsknex.findById(35);


