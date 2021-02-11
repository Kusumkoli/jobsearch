const express = require('express');
const router = express.Router();

//controllers
const jobController = require('../controllers/jobController');

router.get('/jobsearch', jobController.getJobSearch);

router.post('/jobsearch', jobController.postJobSearch);

router.get('/jobs/:job_Id', jobController.getJobDetails); 

module.exports = router;