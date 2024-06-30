const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes/routes");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use("/", routes);



module.exports = app