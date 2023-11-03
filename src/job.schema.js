import mongoose from 'mongoose'; 
const blogSchema = new mongoose.Schema({
    job_title:String,
    company:String,
    job_description:String,
    // salary:{
    //     type: Number,
    //     required: true
    // },
    location:String
  });

  export const jobModel = mongoose.model('Job', blogSchema);