const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.jobs;
const companyList = mongoCollections.companies;


const getAllJobs = async () => {
    const jobCollection = await jobListings();
  
    const jobList = await jobCollection.find({}).toArray();
  
    return jobList;
  };

  const getJobByCompany = async (company) => {
    if (!company) throw 'You must provide a company to search for';
    if (typeof company !== 'string') throw 'Company name must be a string';
    if (company.trim().length === 0)
      throw 'Company cannot be an empty string or just spaces';
    company = company.trim();
    
  
    const companyCollection = await companyList();
    const oneCo = await companyCollection.findOne({company:company});
    if (!oneCo) throw 'No company with that name';
  
    return oneCo.jobs;
  };




module.exports = {getAllJobs, getJobByCompany};