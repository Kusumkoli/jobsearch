const express = require('express');
const router = express.Router();

//controllers
const jobController = require('../controllers/jobController');


function validateCookie(req,res,next) {
	const {cookies} = req;
	console.log(cookies);
	if(cookies.loggedin)
	{
		console.log('loggedin:', cookies.loggedin);	
		next();
	}

	else res.redirect('/');
}


router.get('/jobsearch', validateCookie, jobController.getJobSearch);

router.post('/jobsearch', jobController.postJobSearch);

router.get('/jobs/:job_Id', jobController.getJobDetails); 

router.get('/deletejob/:job_Id', jobController.deleteJob);

router.get('/jobpostings', jobController.recruiterJobPostings);

router.get('/addjob', jobController.getAddJob);

router.get('/womenjobs', jobController.getWomenJobs);

router.get('/coronajobs', jobController.getCoronaJobs);

router.post('/addjob', jobController.postAddJob);

router.get('/programs', jobController.getPrograms);


router.get('/programs/:program_Id', jobController.getProgramDetails);

module.exports = router;