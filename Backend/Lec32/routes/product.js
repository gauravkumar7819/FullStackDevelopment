const {showAllProducts, createProduct, updateProduct, deleteProduct} = require('../controller/productController');
const express=require('express');
   const router = express.Router();//router is a middleware

    //PRODUCT API
router.get("/product/showAll",showAllProducts);


//this is create method to create the product
router.post("/product/create", createProduct);

// patch method is used to update the product

//this is update method to update the product
router.put("/product/:id", updateProduct);

router.patch("/product/:id", updateProduct);       

//this is delete method to delete the product
router.delete("/product/:id", deleteProduct);


module.exports = router;  //exporting the router middleware