const path = require('path'); 
const express = require('express'); 
// const router = require('express').Router(); 
const session = require('express-session');
 
const handlebars = require('express-handlebars'); 

// const routes = require('./controllers'); 
// app.use(require('./controllers/')); 
const helpers = require('./utils/helpers'); 

const sequelize = require('./config/connections'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store); 

const app = express(); 
const PORT = process.env.PORT || 3001; 
// const PORT = process.env.PORT || 3000;
// const PORT = 5550;  
const hbs = handlebars.create( { helpers } ); 

const sess = {
    secret: 'Super secret secret', 
    cookie: {}, 
    resave: false, 
    saveUninitialized: true, 
    store: new SequelizeStore( { 
        db: sequelize
    })
}; 

app.use( session(sess) );

// app.engine('handlebars', hbs.engine); 
app.set('view engine', 'hbs');
app.engine('hbs', handlebars( {
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials', 
    extname: 'hbs', 
}));  

app.use(express.json()); 
app.use(express.urlencoded( { extended: true })); 
// 
app.use(express.static('public'));
// app.use(routes); 
app.use(require('./controllers/')); 

//api 
// app.get('/', (req, res) => {
//     res.render('homepage', {layout: 'main'}); 
// }); 
// app.get('/login', (req, res) => res.render('login'));  

// app.get('/signup', (req, res) => res.render('signup'));  

// app.get('/createpost', (req, res) => res.render('createpost')); 

// app.get('/updatepost', (req, res) => res.render('updatepost')); 

// app.get('/dashboard', (req, res) => res.render('dashboard')); 

// app.get('/loggedinhome', (req, res) => res.render('loggedinhome')); 
 

// app.get('/', (req, res) => res.send('Let us do this thing!!!')); 

// app.listen(PORT, () => console.log(`App listening on ${PORT}`)); 

// router.get('/', (req, res) => res.render('/homepage')); 

sequelize.sync( {force: false }).then( () => {
    app.listen(PORT, () => console.log('Now Listening')); 
}); 
// sequelize.close(); 