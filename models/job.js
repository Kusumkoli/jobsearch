const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    job_title: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    company_website: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    apply_before: {
        type: String,
        required: true
    },
    job_desc: {
        type: String,
        required: true
    },
    skills_needed: {
        type: String,
        required: true
    },
    eligibility: {
        type: String
    },
    perks: {
        type: String
    },
    num_of_openings: {
        type: Number
    },
    internship: {
        type: Boolean
    },
    parttime: {
        type: Boolean
    },
    wfh: {
        type: Boolean
    },
    // jobs for women willing to (re)start their career
    womenrestart: {
        type: Boolean
    },
    //jobs seeking people who losts their jobs due to the pandemic
    lostjob: {
        type: Boolean
    }
});

module.exports = mongoose.model('Job', jobSchema);