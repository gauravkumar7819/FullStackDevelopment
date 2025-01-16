
const express=require('express');
   const router = express.Router();//router is a middleware

    //PRODUCT API
router.get("/product/showAll",(req, res) => {   
    res.send("All products are displayed here");  
});

//this is create method to create the product
router.post("/product/create", (req, res) => { 
    res.send("You are requested for product creation");  
});

// patch method is used to update the product

//this is update method to update the product
router.put("/product/:id", (req, res) => {   
    res.send(`You are requested for product id: ${req.params.id}`);  
});

router.patch("/product/:id", (req, res) => {               
    res.send(`You are requested for product id: ${req.params.id}`);            
});       

//this is delete method to delete the product
router.delete("/product/:id", (req, res) => {   
    res.send(`You are requested for product id: ${req.params.id}`);  
});


module.exports = router;  //exporting the router middleware