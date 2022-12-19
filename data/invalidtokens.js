const mongoCollections = require("../MongoConnection/mongoCollection")
const invalidTokens = mongoCollections.invalidtokens;
const { validateToken } = require("../utils/jwt");

const insertToken = async (token) => {
    const isValid = await validateToken(token);
    console.log(isValid);
    if(!isValid) {
        return;
    }

    const tokensCollection = await invalidTokens();


   return await tokensCollection.insertOne({token});

}




const checkTokenIsBlacklisted = async (token) => {

    console.log("hello world one");
    const tokensCollection = await invalidTokens();

 
    const retrievedToken = await tokensCollection.findOne({token});

    console.log("Retrieved Token ", retrievedToken);


    const isValid = await validateToken(token);
    console.log("Is Valid ", isValid);
    const isExpiredRetrievedToken = await validateToken(retrievedToken);
    console.log("Is expired ", isExpiredRetrievedToken);


    if(!isExpiredRetrievedToken) {
        await tokensCollection.deleteOne({token:retrievedToken})
    }

    if(!isValid) {
        return false;
    }


    return retrievedToken == undefined;
}


module.exports = { insertToken , checkTokenIsBlacklisted }