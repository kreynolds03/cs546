function isAlpha(str) {  
	if(/^[A-Za-z0-9]*$/.test(str) == false) {

		throw "You can only enter alphanumeric characters in your username";
	
	}
}

function isString(val) {
	if(typeof username !== 'string') {
		throw "Please supply only a string value for both username and password";
	  }
}






module.exports = { isAlpha };