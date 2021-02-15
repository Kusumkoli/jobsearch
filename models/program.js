const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
    program_title : {
        type: String,
        required: true
    },
    company_name : {
        type: String,
        required: true
    },
    for : {
        type: String,
        required: true
    },
    about : {
        type: String,
        required: true
    },
    eligibility : {
        type: String,
        required: true
    },
    register_link : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Program', programSchema);