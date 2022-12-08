const express = require("express");
const app = express();

app.get("/", (req, res) =>{
  res.json({message: "Login page"});
});
app.listen(3000, () => {
  console.log("Server is up");
  console.log("http://localhost:3000")
});