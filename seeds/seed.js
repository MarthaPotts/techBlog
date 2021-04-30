const sequelize = require('../config/connections'); 
const { User } = require('../models'); 

const userData = require('./userData.json'); 

const seedDatabase = async () => {
    await sequelize.sync( { force: true }); 

    await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true, 
    });
    
    process.exit(0); 
}; 

seedDatabase(); 

//modify this as the models are developed for the db 