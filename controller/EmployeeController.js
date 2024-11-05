const employeeMast = require('../models').employeeMast;

const addEmployee = async (req,res)=>{
    const {name,email} = req.body;

    try{
        await employeeMast.create(req.body);
        res.send(`Employee added successfully`);
    }catch(err){
        res.send("Error while creating employee");
    }
}

module.exports = {addEmployee};