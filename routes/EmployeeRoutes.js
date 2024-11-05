const employeeRoutes = require('express').Router();
const employController = require('../controller/EmployeeController');

employeeRoutes.post('/addEmployee',employController.addEmployee);

module.exports = employeeRoutes;


