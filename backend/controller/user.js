const useRouter=require("express").Router();
useRouter.get("/user",(req,res)=>{
    res.send("you data server is ready")
})


module.exports=useRouter;