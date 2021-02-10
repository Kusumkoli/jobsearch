const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
};


exports.postRSignup = (req, res, next) => {
    const email = req.body.email;
    const password = Bcrypt.hashSync(req.body.password, 10);
    const username = req.body.username;
    const role = "recruiter";
    
    const newUser = new User({ 
        name: username,
        email: email, 
        password: password,
        role: role
    });
    newUser.save();
    console.log('New User Added!');
};

// exports.postLogin = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     User.findOne({email: email})
//         .then(result => {
//             if(!result) {
//                 //console.log(result.password);
//                 return res.render('login', {pageTitle: 'Log In', email:true, pw:false});
//             }
//             console.log(result);
//             if(!Bcrypt.compareSync(password, result.password)) {
//                 return res.render('login', {pageTitle: 'Log In', email:false, pw:true});
//             }

//             req.user = result;
//             console.log("User details :" + req.user);
//             console.log("The email and password combination is correct!");
//             // res.render('dashboard', {pageTitle:'Dashboard', user:req.user });
//         })
//         .catch(err => console.log(err));
// };


exports.postLogin = (req, res, next) => {
    const user= {
        name: "Kusum Koli",
        email: "kusumkoli372@gmail.com",
        role: "recruiter"
    };

    Job.find()
        .then(jobs => {
            res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: user});
        })
        .catch(err => console.log(err));

};
        