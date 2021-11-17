const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(CLEARDB_DATABASE_URL);



exports.getEx = async function(){
    var record = await sequelize.query('select * from tb_extincao');
    return JSON.stringify(record[0], null, 2);
}