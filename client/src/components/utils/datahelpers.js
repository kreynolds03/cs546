// const {ObjectId} = require('mongodb');

export const isAlpha = (str) => {  
	if(/^[A-Za-z0-9]*$/.test(str) == false) {

		alert("You can only enter alphanumeric characters in your username");
    return;
	
	}
}

export const isString = (val) => {
	if(typeof username !== 'string') {
		alert("Please supply only a string value for both username and password");
    return;
	  }
}


export const isValidDate = (dateString) =>
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)){
        alert ("Please enter a proper date format of mm/dd/yyyy");
        return;
    }

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(month == 0 || month > 12 || year > 2022 || year < 1000){
        alert ("Enter a proper date please!");
        return;
    }
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){

        monthLength[1] = 29;
    }
    // Check the range of the day
    if (day > 0 && day <= monthLength[month - 1]) {
        return dateString;
    }

    return(alert ("The day does not match the month"));
};

/*

function checkId(id, varName) {
    if (!id) alert `You must provide a ${varName}`;
    if (typeof id !== 'string') alert `${varName} must be a string`;
    id = id.trim();
    if (id.length === 0)
      alert `${varName} cannot be an empty string or just spaces`;

    if (!ObjectId.isValid(id)) alert `${varName} invalid object ID`;
    return id;
  };

  */



  export const checkEmail = (email) => {

    if(!email.includes("@")) {

       // alert "Please enter a valid email address!";

       return false;
        
    }

    let emailArr = email.split("@");
    if(emailArr[1] != "stevens.edu") {

        //alert "Invalid email. You must use your Stevens email!";

        return false;

    }




 


  }



// module.exports = { isAlpha, isValidDate, checkId, checkEmail, isString };
