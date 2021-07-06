//get required 
const router = require('express').Router();
const { Post, Comment, User } = require('../models'); 
 
router.get('/', (req, res) => {
    res.render('homepage');  
});  

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/loggedinhome'); 
        return; 
    }
    res.render('login'); 
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/'); 
        return; 
    }
    res.render('signup'); 
}); 

router.get('/', (req, res) => {
    if (req.session.loggedIn){
        res.render('/'); 
    } else {
        res.status(404); 
    }
});
router.get('/loggedinhome', (req, res) => {
    res.render('loggedinhome'); 
}); 
router.get('/dashboard', (req, res) => {
    res.render('dashboard'); 
})
module.exports = router; 