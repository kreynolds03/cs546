const express = require("express");

const bcrypt = require("bcrypt");
const { checkUser } = require("../data/users");
const { createUser } = require("../data/users");
//const { getAllJobs } = require("../data/jobListings");
const jobs = require("../data/jobListings");
const companyList = require("../data/company");
const posts =  require("../data/posts");
const helper =  require("../data/datahelpers");




//const path = require("path");



const router = express.Router();



function authMiddleware(req, res, next){
  if(!req.session.username) {
    res.status(403).send({message: e});
  } else {
    next();
  }
}


router.route("/").get(async (req, res) => {
  //code here for GET
  //res.sendFile(path.join(__dirname,"./userLogin))
  //console.log("hello world");
  //res.render("userLogin");
  if(!req.session?.username) {

    console.log(new Date().toUTCString() + ": GET / (Non-Authenticated User)");
  }

  else {

    console.log(new Date().toUTCString() + ": GET / (Authenticated User)");


  }
  // res.send("<h1>hello world</h1>");
});

router
  .route("/register")
  .post(async (req, res) => {
    //code here for POST
    console.log("hello");

    try {
      console.log(req.body);
      let email = req.body.email;
      let password = req.body.password;
      let birthday = req.body.birthday;
      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      await createUser(email, password, birthday, firstName, lastName);
  
      res.redirect("/");
  
     
    } catch (e) {
      return res.status(500).send({message: e});
    }

  });

router.route("/login").post(async (req, res) => {
  //code here for POST

  try {
    let email = req.body.email; //might change depending on how we do our input in react
    let password = req.body.password;
    await checkUser(email, password);
    //req.session.username = username;

    //res.redirect("/protected");

   
  } catch (e) {
    res.status(500).send({message: e});
  }

  if(!req.session?.username) {

    console.log(new Date().toUTCString() + ": POST /login (Non-Authenticated User)");
    return res.sendStatus(200);

  }

  else {

    console.log(new Date().toUTCString() + ": POST /login (Authenticated User)");
    return res.sendStatus(200);



  }
});

router.route("/protected").get(authMiddleware, async (req, res) => {
  //code here for GET

  /*res.render("private", {
    username: req.session.username,
    date: new Date().toUTCString(),
  })*/

  if(!req.session.username) {

    console.log(new Date().toUTCString() + ": GET /protected (Non-Authenticated User)");
  }

  else {

    console.log(new Date().toUTCString() + ": GET /protected (Authenticated User)");


  }
});

router.route("/logout").get(async (req, res) => {
  //code here for GET
  //res.render("logout");

  if(!req.session.username) {

    console.log(new Date().toUTCString() + ": GET /logout (Non-Authenticated User)");
  }

  else {

    console.log(new Date().toUTCString() + ": GET /logout (Authenticated User)");


  }

  req.session.destroy();
  //res.redirect("/");

  //res.render("logout")



});

/*router
  .route("/jobs").get(async (req,res) => {
    try {
      const jobList = await getAllJobs();
      res.json(jobList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  })*/

  router
  .route('/jobs')
  .get(async (req, res) => {
    //code here for GET
    try {
      const allJobs = await jobs.getAllJobs();
      res.json(allJobs);
     
    } 
    catch(e) {
      res.status(500).json({error: "We did not find the jobs you were looking for"});

    }
  })


  router
  .route('/:company')
  .get(async(req, res) =>{
    try{
      let company = req.params.company;
      const oneCompany = await companyList.getCompanyByName(company);
      return res.json(oneCompany);
    }
    catch(e) {
      res.status(500).json({error: "Something is going wrong!"});
    }
  })

  router
  .route('/createcompany')
  .post(async (req, res) => {
    

    try {
      console.log(req.body);
      let company = req.body.company;
      let about = req.body.about;
      
      await companyList.createCompany(company, about);
      return res.sendStatus(200);

      
  
     
    } catch (e) {
      return res.status(500).send({message: e});
    }
  })

  router
  .route('/:company/jobs')
  .get(async (req, res) =>{
    try {
      const jobsofCompany = await jobs.getJobByCompany(req.params.company);
      res.status(200).json(jobsofCompany);
    } catch (e) {
      console.log(e);
      res.status(404).json({error: e});
    }
  })

  router
  .route('/createjob')
  .post(async (req, res) => {
    

    try {
      console.log(req.body);
      //need to validate the input still 
      let jobTitle = req.body.jobTitle;
      let education = req.body.education;
      let yearsofExp = req.body.yearsofExp;
      let description = req.body.description;
      let company = req.body.company;
      let postDate = req.body.postDate;
      let username = req.body.username;
      
      await jobs.createJob(jobTitle, education, yearsofExp, description, company, postDate, username);
      return res.sendStatus(200);

      
  
     
    } catch (e) {
      return res.status(500).send({message: e});
    }
  })

  router
  .route('/createpost')
  .post(async (req, res) => {
    

    try {
      console.log(req.body);
      let title = req.body.title;
      let content = req.body.content;
      
      await posts.createPost(title, content);

      return res.sendStatus(200);
     
    } catch (e) {
      return res.status(500).send({message: e});
    }
  })


  router.delete('/:id', async (req, res) => {
    //code here for deleting a post
    try {
      req.params.id = helper.checkId(req.params.id, 'Id URL Param');
     
    } catch (e) {
      console.log({error: e});
      return res.status(400).json({error: e});
    }
    try {
      await posts.getPostById(req.params.id);
    } catch (e) {
      return res.status(404).json({error: 'Post not found'});
    }
    try {
      await posts.removePost(req.params.id);
      res.status(200).json({deleted: true});
    } catch (e) {
      res.status(500).json({error: e});
    }


  })



module.exports = router;
