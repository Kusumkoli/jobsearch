const Bcrypt = require('bcryptjs');

const User = require('../models/user');
const Job = require('../models/job');


exports.getLogin = (req, res, next) => {
    res.render('login', {pageTitle: 'Log In', email:false, pw:false});
};

exports.getSignup = (req, res, next) => {
    res.render('login', {pageTitle: 'Sign Up', email:false, pw:false});
};

exports.getRSignup = (req, res, next) => {
    res.render('login', {pageTitle: 'Recruiter Sign Up', email:false, pw:false});
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = Bcrypt.hashSync(req.body.password, 10);
    const username = req.body.username;
    const role = "jobseeker";
    
    const newUser = new User({ 
        username: username,
        email: email, 
        password: password,
        role: role
    });
    newUser.save();
    console.log('New User Added!');

    console.log(newUser);
    // res.render('login', {pageTitle:'Log In', email:false, pw:false });
    res.redirect('/');
};


exports.postRSignup = (req, res, next) => {
    const email = req.body.email;
    const password = Bcrypt.hashSync(req.body.password, 10);
    const username = req.body.username;
    const role = "recruiter";
    
    const newUser = new User({ 
        username: username,
        email: email, 
        password: password,
        role: role
    });
    newUser.save();
    console.log('New User Added!');
    console.log(newUser);
    // res.render('login', {pageTitle:'Log In', email:false, pw:false });
    res.redirect('/');
};

exports.postLogin = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email})
        .then(result => {
            if(!result) {
                //console.log(result.password);
                return res.render('login', {pageTitle: 'Log In', email:true, pw:false});
            }
            console.log(result);
            if(!Bcrypt.compareSync(password, result.password)) {
                return res.render('login', {pageTitle: 'Log In', email:false, pw:true});
            }

            const user = result;
            const loggedin = true;
            // res.clearCookie('userdetails');
            res.cookie('userdetails', user);
            res.cookie('loggedin', loggedin);
            console.log('Cookie details',req.cookies.userdetails);
            console.log('Logged in:', req.cookies.loggedin);
            console.log("The email and password combination is correct!");
            Job.find()
                .then(jobs => {
                    res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: req.cookies.userdetails});
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};


exports.getLogout = (req, res, next) => {
    
    const loggedout = false;
    res.cookie('loggedin', loggedout);
    console.log('loggedin:', req.cookies.loggedin);
    res.clearCookie('userdetails');
    console.log('userdetails', req.cookies.userdetails);

    return res.redirect('/');
};