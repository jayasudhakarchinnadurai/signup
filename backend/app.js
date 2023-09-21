const express=require("express");
const useRouter = require("./controller/user.js");
const App_server=express()
App_server.use("/api",useRouter);
module.exports=App_server
