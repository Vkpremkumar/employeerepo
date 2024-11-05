module.exports = (sequelize,DataTypes)=>{
    const employeeMast = sequelize.define('employee_master',{
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING
        }

    })

    return employeeMast;
}