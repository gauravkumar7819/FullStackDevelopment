const {showAllusers, createuser, updateuser, deleteuser}=require("../controller/userController");
const express = require("express");
const router = express.Router();
//USER API
//this is read method to read the user  
router.get("/user/showAll",showAllusers);
    //this is create  method to create the user
    router.post("/user/create",createuser);
    
    // patch method is used to update the user
    
    //this is update method to update the user
    router.put("/user/:id",updateuser); 
    
    router.patch("/user/:id",updateuser)         

    
    //this is delete method to delete the user
    router.delete("/user/:id",deleteuser);
    module.exports=router;  