const express= require("express");
const App_server = require("./app.js");
const Node_server=express();
Node_server.use("/",App_server)


Node_server.listen( process.env.PORT, ()=>console.log("your server start 9000"));