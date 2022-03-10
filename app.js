const express = require("express");
const bodyParser = require('body-parser')
const customersRouters = require('./Router/customersRouter')

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //middleware cho phép dùng req.body


app.use('/customers', customersRouters);




app.listen(3000, () => {
    console.log("server is running at port 3000");
})