const jwt = require("jsonwebtoken");

const encode = async (username) => { 
    const payload = {username};


    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'14d'});
}


const decode = async (token) => {
    return jwt.decode(token);
}

const validateToken = async (token) => { 
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.JWT_SECRET,(error) => {
            if(error) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    }) 
}

module.exports = { encode, decode, validateToken}


