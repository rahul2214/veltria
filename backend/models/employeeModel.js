import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    
    companyname: {
        type: String,
        required: true,
    },
    jobrole: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // required: true,
        
    },
    noofvacancies: {
        type: Number,
        // required: true,
    },
    location: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        // required: true,
    },
   
    domain: {
        type: String,
        required: true,
        enum: ['IT','Software','Hardware','Pharma','Business','Others','Govt'],
    },
    jobdescription: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        // required: true,
    },
    joburl: {
        type: String,
        // required: true,
    },
    jobtype: {
        type: String,
        required: true,
        enum: ['Refferal', 'Open for All'],
    },
  
  
}, { timestamps: true });
const Job = mongoose.model("Job", jobSchema);
export default Job;