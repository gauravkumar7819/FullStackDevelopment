const showAllProducts = (req, res) => {     
    res.send("All products are displayed here");  
};
const createProduct = (req, res) => { 
    res.send("You are requested for product creation");  
};  
const updateProduct = (req, res) => {   
    res.send(`You are requested for product id: ${req.params.id}`);  
};
const deleteProduct = (req, res) => {   
    res.send(`You are requested for product id: ${req.params.id}`);  
};  
module.exports = {showAllProducts, createProduct, updateProduct, deleteProduct};