const mongoose = require("mongoose");
const mongodb = require("mongodb");


//Database
/*const database = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }


        const client = new mongodb.MongoClient('mongodb+srv://RaginiWadhwa:74gzN5HTfBMDr6a2@finalproject.iw2gnyl.mongodb.net/final_project_2022?retryWrites=true&w=majority')
        client.connect((error,db) => {
            if(error || !db) {
                throw `error with connection:${error}`;
            }

        })
        console.log("Database connected successfully!");
   
    

}*/


let _connection = undefined;
let _db = undefined;

module.exports = {
  dbConnection: async () => {
    console.log("hi");
    if (!_connection) {
      _connection = await mongodb.MongoClient.connect('mongodb+srv://RaginiWadhwa:74gzN5HTfBMDr6a2@finalproject.iw2gnyl.mongodb.net/final_project_2022?retryWrites=true&w=majority');
      //console.log(_connection);
      _db = await _connection.db('final_project_2022');
    }

    return _db;
  },
  closeConnection: () => {
    _connection.close();
  },
};


