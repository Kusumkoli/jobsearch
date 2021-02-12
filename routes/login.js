const express = require('express');
const router = express.Router();

//controllers
const loginController = require('../controllers/loginController');


// function validateCookie(req,res,next) {
// 	const {cookies} = req;
// 	if(cookies.loggedin)
// 	{
// 		return res.redirect('/jobsearch');		
// 	}
// }

//job seeker log-in get request
router.get('/', loginController.getLogin);

//job seeker sign-up get request
router.get('/signup', loginController.getSignup);

//job seeker sign-up post request
router.post('/signup', loginController.postSignup); 

// recruiter sign-up get request
router.get('/r-signup', loginController.getRSignup);

//recruiter sign up post request
router.post('/r-signup', loginController.postRSignup);


// log-in post request for both 
router.post('/login', loginController.postLogin);

router.get('/logout', (res,req) => {
	return req.redirect('/');
})

module.exports = router;