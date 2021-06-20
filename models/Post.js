const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connections'); 

class Post extends Model {} 

Post.init(
    {
        title: DataTypes.STRING, 
        body: DataTypes.STRING,
    }, 
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'Post', 
    }, 
); 

module.exports = Post; 