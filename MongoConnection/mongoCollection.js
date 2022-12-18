const dbConnection = require('./database');

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection.dbConnection();
      //console.log(db);
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: 
NOTE: YOU WILL NEED TO CHANGE THE CODE BELOW TO HAVE THE COLLECTION(S) REQUIRED BY THE ASSIGNMENT */
module.exports = {
  users: getCollectionFn('users'),
  jobs: getCollectionFn("job_listings"),
  companies: getCollectionFn("Companies"),
  posts: getCollectionFn("posts"),
  comments: getCollectionFn("comments"),
  likes: getCollectionFn("likes"),
  jobhistory: getCollectionFn("jobs"),
  files: getCollectionFn("files")

 
};