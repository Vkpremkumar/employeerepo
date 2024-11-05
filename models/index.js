const dbConfig = require('../config/databaseconfig');

const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');


const { host, user, password, database, dialect, port } = dbConfig;

async function initializeDbConnection() {
    const connection = await mysql.createConnection({ host: host, user: user, password: password, port: port });
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
    await connection.end();
}

const sequelize = new Sequelize(database,user,password,{
    host:host,
    dialect:dialect,
    port:port
})

sequelize.authenticate()
.then(()=>{
    console.log(`DB Connected successfully`)
})
.catch(()=>{
    console.log(`Error while connecting DB`)
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employeeMast = require('./EmployeeMaster')(sequelize,DataTypes);

(async ()=>{
    await initializeDbConnection()
    await sequelize.sync({force:false})
    console.log(`Database & Tables created`)

})();

module.exports = db;