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
    location: {
        type: String,
        required: true
    },

    min_salary: Number,
    max_salary: Number,

    apply_before: {
        type: String,
    },
    start_date: {
        type: String,
    },
    job_desc: {
        type: String,
        required: true
    },
    skills_needed: {
        type: Array,
        required: true
    },
    eligibility: {
        type: String
    },
    perks: {
        type: Array
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
    // jobs for women wanting to (re)start their career
    womenrestart: {
        type: Boolean
    },
    //jobs seeking people who losts their jobs due to the pandemic
    lostjob: {
        type: Boolean
    },
    recruiter_Id : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Job', jobSchema);