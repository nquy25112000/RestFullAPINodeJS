var express = require('express');
var router = express.Router();
const modelCustomer = require("../Repository/customersRep");
const modelOrders = require("../models/orderMoldes");


//get all customer
router.get('/customers', (req, res) => {
    modelCustomer.fillAllCustomer((data) => {
        res.status(200).json({
            messager: data
        })
    })
}); 
router.get('/Orders/:id', (req, res) => {
    const id = req.params.id;
    modelCustomer.customerOrders(id, (data) => {
        res.status(200).json(data);
    })
})

router.post('/', (req, res) => {
    const name = req.body.name;
    modelCustomer.createCustomer(name);
    res.status(200).json({
        message: "thành công"
    })
})


router.put('/', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    modelCustomer.updateCustomer(id, name, () => {
        res.status(200).json({
            message: "thành công"
        })
    });

})

router.delete('/', async (req, res) => {
    const id = await req.body.id;
    modelCustomer.deleteCustomer(id, (result) => {
        res.json("đã xóa: " + result)
    })
})

router.get('/listOrders', (req, res) => {
    modelCustomer.customerOrders2((data) => {
        res.json(data);
    })
})

router.get('/fetch', (req, res) => {
    modelCustomer.fillAllCustomer2((result) => {
        res.json(result)
    })
})


module.exports = router;