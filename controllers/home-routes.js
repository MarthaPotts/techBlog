//get required 
const router = require('express').Router(); 
const { regexp } = require('sequelize/types/lib/operators');
//models 
const { User, Post, Comment } = require('../models'); 
//utils: validation 
const withAuth = require('../utils/auth'); 

//route to home 'if logged in', else redirect 'home'
router.get('/', withAuth, (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
    }); 
}); 
//login 
router.get('/login', (req, res) => {
    res.render('login', {
        logged_in: req.session.loggedin
    }); 
}); 
//get post titles for homepage 
