const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connections'); 

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        content: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        post_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'post', 
                key: 'id',
            }, 
        },
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'user', 
                key: 'id',
            }
        } 
    }, 
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'comment', 
    }, 
); 

module.exports = Comment; 