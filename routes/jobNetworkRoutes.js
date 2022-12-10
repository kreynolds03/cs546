const express = require("express");

const bcrypt = require("bcrypt");
const { checkUser } = require("../data/users");

const { createUser } = require("../data/users");

//const path = require("path");



const router = express.Router();



function authMiddleware(req, res, next){
  if(!req.session.username) {
    res.render("forbiddenAccess",403);
  } else {
    next();
  }
}


router.route("/").get(async (req, res) => {
  //code here for GET
  //res.sendFile(path.join(__dirname,"./userLogin))
  //console.log("hello world");
  res.render("userLogin");
  if(!req.session.username) {

    console.log(new Date().toUTCString() + ": GET / (Non-Authenticated User)");
  }

  else {

    console.log(new Date().toUTCString() + ": GET / (Authenticated User)");


  }
  // res.send("<h1>hello world</h1>");
});

router
  .route("/register")
  .get(async (req, res) => {
    //code here for GET

    res.render("userRegister");

    if(!req.session.username) {

      console.log(new Date().toUTCString() + ": GET /register (Non-Authenticated User)");
    }
  
    else {
  
      console.log(new Date().toUTCString() + ": GET /register (Authenticated User)");
  
  
    }

   

  })
  .post(async (req, res) => {
    //code here for POST

    try {
      let username = req.body.usernameInput;
      let password = req.body.passwordInput;
      await createUser(username, password);
      //req.session.username = username;
  
      res.redirect("/");
  
     
    } catch (e) {
      res.render("userRegister", { message: e });
    }

    if(!req.session.username) {

      console.log(new Date().toUTCString() + ": POST /register (Non-Authenticated User)");
    }
  
    else {
  
      console.log(new Date().toUTCString() + ": POST /register (Authenticated User)");
  
  
    }
  });

router.route("/login").post(async (req, res) => {
  //code here for POST

  try {
    let username = req.body.usernameInput;
    let password = req.body.passwordInput;
    await checkUser(username, password);
    req.session.username = username;

    res.redirect("/protected");

   
  } catch (e) {
    res.render("userLogin", { message: e });
  }

  if(!req.session.username) {

    console.log(new Date().toUTCString() + ": POST /login (Non-Authenticated User)");
  }

  else {

    console.log(new Date().toUTCString() + ": POST /login (Authenticated User)");


  }
});

router.route("/protected").get(authMiddleware, async (req, res) => {
  //code here for GET

  res.render("private", {
    username: req.session.username,
    date: new Date().toUTCString(),
  })

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

  res.render("logout")



});

module.exports = router;
