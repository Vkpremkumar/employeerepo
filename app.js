const express = require('express');
const app =  express();

app.use(express.json());

port = 3000;

const employeeRoutes = require('./routes/EmployeeRoutes');
app.use('/employee',employeeRoutes)



app.listen(port,()=>{
    console.log(`App listening on the port ${port}`);
});

