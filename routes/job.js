const express = require('express');
const router = express.Router();

//controllers
const jobController = require('../controllers/jobController');

router.get('/jobsearch', jobController.getJobSearch);

router.post('/jobsearch', jobController.postJobSearch);

router.get('/jobs/:job_Id', jobController.getJobDetails); 

router.get('/deletejob/:job_Id', jobController.deleteJob);

router.get('/jobpostings', jobController.recruiterJobPostings);

router.get('/addjob', jobController.getAddJob);

router.post('/addjob', jobController.postAddJob);

module.exports = router;