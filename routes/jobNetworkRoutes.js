const express = require("express");

const bcrypt = require("bcrypt");
const { checkUser } = require("../data/users");

const { createUser } = require("../data/users");

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
  /*.get(async (req, res) => {
    //code here for GET


    if(!req.session.username) {

      console.log(new Date().toUTCString() + ": GET /register (Non-Authenticated User)");
    }
  
    else {
  
      console.log(new Date().toUTCString() + ": GET /register (Authenticated User)");
  
  
    }

   

  })*/
  .post(async (req, res) => {
    //code here for POST

    try {
      console.log(req.body);
      let username = req.body.username;
      let password = req.body.password;
      let birthday = req.body.birthday;
      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      await createUser(username, password, birthday, firstName, lastName);
      //req.session.username = username;
  
      //res.redirect("/");
  
     
    } catch (e) {
      return res.status(500).send({message: e});
    }

    if(!req.session?.username) {

      console.log(new Date().toUTCString() + ": POST /register (Non-Authenticated User)");
      return res.sendStatus(200);

    }
  
    else {
  
      console.log(new Date().toUTCString() + ": POST /register (Authenticated User)");
      return res.sendStatus(200);
  
  
    }
  });

router.route("/login").post(async (req, res) => {
  //code here for POST

  try {
    let username = req.body.username; //might change depending on how we do our input in react
    let password = req.body.password;
    await checkUser(username, password);
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

router
  .route("/joblistings")

module.exports = router;
