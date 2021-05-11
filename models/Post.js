const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connections'); 

class Post extends Model {} 

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        title: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        contents: {
            type: DataTypes.STRING, 
            allowNull: false,
    
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'user', 
                key: 'id', 
            },
        }
    }, 
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'post', 
    }, 
); 

module.exports = Post; 