const express = require('express');
const router = express.Router();

//controllers
const jobController = require('../controllers/jobController');


router.get('/jobs/:job_Id', jobController.getJobDetails); 

module.exports = router;