// It should be 16 digits long.
// It should start with either two digits numbers which goes from from 51 to 55 or four digits numbers ranging from 2221 to 2720.
// If it starts with 51 to 55, the next fourteen digits should be any number between 0-9.
// Else, if it starts with 2221 to 2720, the next twelve digits should be any number between 0-9.
// It should not contain any alphabet or special characters.


// main code to accept and run the input check 
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const CardNumber = readline.createInterface({ input, output });

CardNumber.question('Input a card number to check ', (answer) => {

  console.log(MasterCardCheck(answer));

  CardNumber.close();
});









// Function to validate the number 
function MasterCardCheck(number) {

    // i'll input my regexes  to check for valid numbers
	let regex = new RegExp(/^5[1-5][0-9]{14}$/); //This checks for the condition stated on line three
    let regex2 = new RegExp(/^222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720[0-9]{12}$/); //This checks for the condition stated on line four

	// if the number is empty return false and end the function
	if (number == null||" ") {
		return "There was no number given";
	}


	// Return true if the number is follows any of the two regex rules
	if (regex.test(number) || regex2.test(number) ) {
		return "It is a valid MasterCard";
	}
	else {
		return "It is not a valid MasterCard";
	}
}


