var express = require("express")
var app = express();


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productmgr");
mongoose.connection.on("Mongoose Connected", function () {
    console.log("**********Mongoose Connected")
})


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
var path = require("path");


// THIS IS FOR ANGULAR WATCH
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require('./server/config/routes.js')(app)

const port = 8000
app.listen(port,function(){
    console.log("****************PORT IS LISTENING " + port)
})