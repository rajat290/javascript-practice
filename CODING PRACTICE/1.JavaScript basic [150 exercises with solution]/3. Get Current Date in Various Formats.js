// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// This JavaScript program retrieves the current date and formats it in multiple ways (mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy). It uses the Date object to get the current day, month, and year, and then adds leading zeros if necessary to ensure proper formatting. Finally, it logs the formatted date strings to the console.


//get the current date
var today = new Date();
// get the day of month 
var dd = today.getDate();
//get the month (addig 1 because months are zero -based)
var mm = today.getMonth() + 1;
//get the year (four digits)
var yyyy = today.getFullYear();


//add leading zero if the day is less than 1 
if (dd < 10) {
    dd = '0'+ dd;
}
//add leading zero if the month is less than 10
if (mm < 10) {
    mm = '0'+ mm;
}

//format the date as mm--dd-yyyy and log it 
today = mm + '-' + dd + '-'+ yyyy ;
console.log(today);
//format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/'+ yyyy;
console.log(today);
//format the date as dd--mm-yyyy and log it
today = dd + '-' + mm + '-'+ yyyy ;
console.log(today);
//format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/'+ yyyy;
console.log(today);






