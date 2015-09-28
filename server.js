var express = require("express");
var morgan  = require("morgan");

var server = express();
var port = process.env.PORT || 3001;
var host= process.env.HOST || "0.0.0.0";

server.use(morgan("dev"));
server.use("/", express.static(__dirname+"/public"));

server.listen(port, host, function(){
    console.log("Server running on " + host + ":" + port);
});
