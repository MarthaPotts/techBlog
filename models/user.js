const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connections'); 

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync( loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
        }, 
        username: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                length: [6], 
                }, 
            }, 
        },  
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10); 
                return newUserData; 
            }, 
        }, 
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'user', 
    } 
); 

module.exports = User; 