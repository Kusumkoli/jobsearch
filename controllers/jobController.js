const User = require('../models/user');
const Job = require('../models/job');

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