const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connections'); 

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
    }, 
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'Comment', 
    }, 
); 

module.exports = Comment; 