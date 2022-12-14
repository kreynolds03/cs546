require("dotenv").config();
const express = require("express");
const app = express();
const jobNetworkRoutes = require('../routes/jobNetworkRoutes');
var cors = require('cors')

const bodyParser = require("body-parser");

console.log(process.env.JWT_SECRET);


app.use(cors())

app.get("/", (req, res) =>{
  res.json({message: "Login page"});
});
app.listen(3001, () => {
  console.log("Server is up");
  console.log("http://localhost:3001")
});
app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', jobNetworkRoutes);



/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
