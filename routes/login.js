const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');


//job seeker log-in
router.get('/', loginController.getLogin);

//job seeker sign-up
router.get('/signup', loginController.getSignup);

router.get('/r-signup', loginController.getRSignup);

router.post('/r-signup', loginController.postRSignup);


// //recruiter sign-up
//router.post('/recruiter-signup', loginController.postRSignup);
router.post('/signup', loginController.postSignup); 
 
// //recruiter log-in
// router.post('/recruiter-login', loginController.postRLogin);
router.post('/login', loginController.postLogin);

module.exports = router;