const router = require('express').Router(); 
// const { Model } = require('sequelize/types');
const { Post } = require('../models/'); 
const withAuth = require('../utils/auth'); 

router.get('/loggedinhome', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId, 
            }, 
        }); 
        const posts = postData.map( (post) => post.get({plain: true})); 
        res.render('dashboard', { posts }); 
    } catch (err) {
        res.redirect('login'); 
    }
}); 
//?not sure I need this route
router.get('/createpost', withAuth, (req, res) => {
    res.render('createpost')
}); 

router.get('/updatepost', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id); 
        if(postData) {
            const post = postData.get({plain: true}); 
            res.render('/updatepost'); 
        } else {
            res.status(404).end(); 
        }
    } catch (err) {
        res.redirect('login'); 
    }
});

module.exports = router; 