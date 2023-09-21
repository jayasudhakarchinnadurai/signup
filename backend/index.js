const express= require("express");

const App_server=express();
App_server.get("login",(req, res)=>{
    res.send("login successful")

})

App_server.listen(9000, ()=>console.log("your server start 9000"));