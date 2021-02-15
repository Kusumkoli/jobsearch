const User = require('../models/user');
const Job = require('../models/job');
const Program = require('../models/program');


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
    console.log(req.body);
    
    Job.find({ "$and": [
            {"job_title": {$regex: req.body.title, $options: "$i"}},
            {
                "$or": [
                    {"location": {$regex: req.body.location, $options: "$i"}},
                ]
            },
            { "min_salary" : {$lte : req.body.expected_salary }},
            { "max_salary" : {$gte : req.body.expected_salary }},
            { "start_date" : {$gte :{"$dateFromString" : req.body.startdate }}}
            
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
            console.log('Added new Job');
            res.redirect('/jobpostings');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPrograms = (req, res, next) => {
    Program.find({for: "corona"})
        .then(programs_women => {
            Program.find({for: "women"})
                .then(programs_corona => {
                    // console.log(programs_women);
                    // console.log(programs_corona);
                    res.render('programs', {pageTitle: 'Programs', 
                                            user: req.cookies.userdetails,
                                            programs_women: programs_women,
                                            programs_corona: programs_corona });
                })
                .catch(err => console.log(err));
            
        })
        .catch(err => console.log(err));
}

exports.getProgramDetails = (req, res, next) => {
    const program_Id = req.params.program_Id;

    Program.findById(program_Id)
        .then(program => {
            // console.log(program);
            res.render('job-details', {program: program, pageTitle: 'Program Details', user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));
}

exports.getWomenJobs = (req, res, next) => {
    Job.find({womenrestart: true})
        .then(jobs => {
            res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));   
}

exports.getCoronaJobs = (req, res, next) => {
    Job.find({lostjob: true})
        .then(jobs => {
            res.render('dashboard', {pageTitle:'Job Openings', jobs: jobs, user: req.cookies.userdetails});
        })
        .catch(err => console.log(err));   
}