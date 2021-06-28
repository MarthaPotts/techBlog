const router = require('express').Router(); 
const { User } = require('../../models'); 
//signup
//new user 
router.post('/', async (req, res) => {
    try{
        const dbUserData = await User.create({
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password, 
        }); 
        //express-session cookie
        req.session.save( () => {
            req.session.loggedIn = true; 
            req.session.userId = dbUserData.id; 
            req.session.username = dbUserData.username;  

            res.status(200).json(dbUserData); 
        });
    } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
    }
});  

//Login, existing User 
router.post('/login', async (req, res) => {
    try{
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
                username: req.body.username, 
            }, 
        }); 

        if (!dbUserData) {
            res 
            .status(400)
            .json( { message: 'Incorrect email or password. Please try again'}); 
            return; 
        }

        const validPassword = await dbUserData. checkPassword(req.body.password); 
            
            if (!validPassword) {
                res
                .status(400)
                .json( { message: 'Incorrect email or password. Please try again'}); 
                return; 
            }

            req.session.save( () => {
                req.session.loggedIn = true; 
                req.session.userId = user.id; 
                req.session.username = user.username; 

                res
                .status(200)
                .json( { user: dbUserData, message: 'You are now logged in!'});
            }); 
    } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
    }
}); 

//logOut 
router.post('/logout', (req, res) => {
    console.log(req.session); 
    if (req.session.loggedIn) {
        req.session.destroy( () => {
            res.status(204).end(); 
        }); 
    } else {
        res.status(404).end(); 
    }
}); 

module.exports = router; 