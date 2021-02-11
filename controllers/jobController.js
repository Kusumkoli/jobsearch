const User = require('../models/user');
const Job = require('../models/job');


exports.getJobSearch = (req, res, next) => {
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

exports.getJobDetails = (req, res, next) => {
    const job_Id = req.params.job_Id;

    const user= {
        name: "Kusum Koli",
        email: "kusumkoli372@gmail.com",
        role: "recruiter"
    };

    Job.findById(job_Id)
        .then(job => {
            res.render('job-details', {job: job, pageTitle: 'Job Details', user: user});
        })
        .catch(err => console.log(err));
};

exports.postJobSearch = (req, res, next) => {
    console.log(req);
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