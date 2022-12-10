const mongoose = require("mongoose");

//Database
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect('mongodb+srv://RaginiWadhwa:74gzN5HTfBMDr6a2@finalproject.iw2gnyl.mongodb.net/final_project_2022?retryWrites=true&w=majority')
    } catch (error) {

    }


}