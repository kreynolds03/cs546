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


function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        throw "Please enter a proper date format of mm/dd/yyyy";

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(month == 0 || month > 12 || year > 2022 || year < 1000)
        throw "Enter a proper date please!";

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    if (day > 0 && day <= monthLength[month - 1]) {
        return dateString;
    }

    throw "The day does not match the month"
};





module.exports = { isAlpha, isValidDate };