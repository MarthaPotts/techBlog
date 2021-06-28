const Sequelize = require('sequelize'); 
require('dotenv').config(); 

let sequelize; 

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL); 
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASSWORD, 
        {
            host: 'localhost', 
            dialect: 'mysql', 
            port: 3306
        }
    ); 
}
async function testConnection() {
    try {
       const auth = await sequelize.authenticate(); 
       console.log('Connection to db established successfully'); 
    } catch (err) {
        console.error('Unable to connect to db', err); 
    }; 
}
testConnection(); 
module.exports = sequelize; 