const showAllusers = (req, res) => {     
    res.send("All users are displayed here");  
};
const createuser = (req, res) => { 
    res.send("You are requested for user creation");  
};  
const updateuser = (req, res) => {   
    res.send(`You are requested for user id: ${req.params.id}`);  
};
const deleteuser = (req, res) => {   
    res.send(`You are requested for user id: ${req.params.id}`);  
}; 
module.exports = {showAllusers, createuser, updateuser, deleteuser};