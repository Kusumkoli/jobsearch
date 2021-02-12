const User = require('../models/user');
const Job = require('../models/job');


exports.getJobSearch = (req, res, next) => {
    Job.find()
        .then(jobs => {
            res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));
};

exports.getJobDetails = (req, res, next) => {
    const job_Id = req.params.job_Id;

    Job.findById(job_Id)
        .then(job => {
            res.render('job-details', {job: job, pageTitle: 'Job Details', user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));
};

exports.postJobSearch = (req, res, next) => {
    
    // Job.find({"job_title": req.body.title,$or:[{"type":"smartreply"},{"category":"small_talk"}]})
    Job.find({ "$or": [
            {"job_title": req.body.title},
            {"location": req.body.location},
            {"womenstart": true},
            {"wfh": true},
            {"lostjob": true}
        ]})
        .then(jobs => {
            res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));
};


exports.recruiterJobPostings = (req, res, next) => {
    const recruiter_Id = req.cookies.userdetails._id;
    Job.find({recruiter_Id: recruiter_Id})
        .then(jobs => {
            res.render('dashboard', {jobs: jobs, pageTitle: 'Your Job Postings', user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));
};

exports.deleteJob = (req, res, next) => {
    const job_Id = req.params.job_Id;

    Job.findByIdAndRemove(job_Id)
        .then(() => {
            console.log('Job Deleted');
            res.redirect('/jobpostings');
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getAddJob = (req, res, next) => {
    res.render('addnewjob', {pageTitle: 'Add New Job', user: req.cookies.userdetails});
};

exports.postAddJob = (req, res, next) => {
    const job_title = req.body.job_title;
    const company_name = req.body.company_name;
    const location = req.body.location;
    const min_salary = req.body.min_salary;
    const max_salary = req.body.max_salary;
    const job_desc = req.body.job_desc;
    const skills_needed = req.body.skills_needed;
    const eligibility = req.body.eligibility;
    const perks = req.body.perks;
    const num_of_openings = req.body.num_of_openings;
    const recruiter_Id = req.body.recruiter_Id;

    const job = new Job({ 
        job_title: job_title,
        company_name: company_name,
        location: location,
        min_salary: min_salary,
        max_salary: max_salary,
        job_desc: job_desc,
        skills_needed: skills_needed,
        eligibility: eligibility,
        perks: perks,
        num_of_openings: num_of_openings,
        recruiter_Id: recruiter_Id
    });

    job.save()
        .then(() => {
            console.log('Added new JOb');
            res.redirect('/jobpostings');
        })
        .catch(err => {
            console.log(err);
        });
};