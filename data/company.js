const mongoCollections = require("../MongoConnection/mongoCollection")
const companyList = mongoCollections.companies;

const createCompany = async (
    company,
    about
  ) => { 
  
      const companyCollection = await companyList();

      let companyName = company.toLowerCase();
      
  
      const newCompanyInfo = {
        company: companyName,
        about: about,
        people: [],
        jobs: []
        
      };
    const foundCompany = await companyCollection.findOne({companyName});
    console.log("foundCompany: ", foundCompany);
    if(foundCompany) {
    throw "Sorry. This Company exists. Please enter a distinct name.";
  }
  
      const insertInfo = await companyCollection.insertOne(newCompanyInfo);
      if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw 'Could not add post';
  
    console.log(newCompanyInfo);
      return newCompanyInfo;
  
  };


  const getCompanyByName = async (company) => {
    if (!company) throw 'You must provide a company to search for';
    if (typeof company !== 'string') throw 'Company name must be a string';
    if (company.trim().length === 0)
      throw 'Company cannot be an empty string or just spaces';
    //company = company.trim();
    console.log(company);
    
  
    const companyCollection = await companyList();
    const oneCo = await companyCollection.findOne({company:company});
    if (!oneCo) throw 'No company with that name';
  
    return oneCo;
  };





  module.exports = {createCompany, getCompanyByName};