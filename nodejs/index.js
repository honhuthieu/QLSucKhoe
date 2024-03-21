const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const infoCustomerRoute = require('./routes/product')
// Tạo server kết nối csdl
// CONNECT DATABASE
mongoose.connect(("mongodb+srv://honhuthieu872:nhuthieu@cluster0.cgvwldt.mongodb.net/?retryWrites=true&w=majority"), ()=> {
    console.log("Connect to mongodb")
})

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

//PUBLIC
app.use(express.static('public'))
//ROUTES
app.use("/json_info", infoCustomerRoute)

app.listen(4000, ()=> {
    console.log('Server is running.......')
})