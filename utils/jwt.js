const jwt = require("jsonwebtoken");

const encode = async (username) => { 
    const payload = {username};
    console.log(process.env.JWT_SECRET,"hello world");

    console.log(jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'14d'}));

    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'14d'});
}


const decode = async (token) => {
    return jwt.decode(token);
}

const validateToken = async (token) => { 
    return jwt.verify(token,process.env.JWT_SECRET);
}

module.exports = { encode, decode, validateToken}


