const express = require('express')
const router = express.Router();
const data = require('../data');
const jobData = data.jobListings;
//const helper = require('../helpers')
/*
Need to finish the data folder and create the job collection
*/

router
  .route('/jobs')
  .get(async (req,res) => {
    try {
      const jobList = await jobData.jobs();
      res.json(jobList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  })





module.exports = router;