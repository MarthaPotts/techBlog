//get required 
const router = require('express').Router(); 
// const { regexp } = require('sequelize/types/lib/operators');
//models 
// const { User, Post, Comment } = require('../models'); 
//utils: validation 
// const withAuth = require('../utils/auth'); 

//route to home 'if logged in', else redirect 'home'


// router.get('/loggedinhome', withAuth, (req, res) => {
//     res.render('loggedinhome', {
//         logged_in: req.session.loggedIn 
//     });
//     return;  
// }); 
//  //login 
// router.get('/login', (req, res) => {
//     res.render('login', {
//         logged_in: req.session.loggedIn
//     }); 
//     return; 
// }); 
// //sign up
// router.get('/signup', (req, res) => {
//     res.render('signup', {
//         logged_in: req.session.loggedIn
//     }); 
//     return; 
// })

// //if that doesn't work, try this: 
// // router.get('/login', (req, res) => {
// //     if(req.session.loggedIn){
// //         res.redirect('/loggedinhome');
// //         return; 
// //     }
// //     res.render('login'); 
// // }); 

// // router.get('/signup', (req, res) => {
// //     if(req.session.loggedIn) {
// //         res.redirect('/loggedinhome'); 
// //         return; 
// //     }
// //     res.render('signup'); 
// // })
// //get post titles for homepage

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [User], 
//         }); 
//         const posts = postData.map( (post) => post.get({plain: true}));
//         // res.render('/loggedinhome', {posts}); 
//         res.render(res.render('homepage', {layout: 'main'})
//         )
//     } catch (err) {
//         res.status(500).json(err);
//         console.log(err); 
//     }
// }); 

// //single post 
// router.get('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 User, 
//                 {
//                     model: Comment, 
//                     include: [User], 
//                 },
//             ],
//         });

//         if (postData) {
//             const post = postData.get({plain: true}); 
//             res.render('loggedinhome', {post}); 
//         } else {
//             res.status(404).end(); 
//         }
//     } catch (err) {
//         res.status(500).json(err); 
//         console.log(err); 
//     }
// }); 
router.get('/', (req, res) => {
    res.render('homepage'); 
    // console.log('You\'re pissing me off now buddy'); 
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


module.exports = router; 