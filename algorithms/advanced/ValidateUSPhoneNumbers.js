// Return true if the passed string is a valid US phone number.
// The user may fill out the form field any way they choose as long as it is a valid US number
// The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555
//For this challenge you will be presented with a string such as 800-692-7753
//or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
//based on any combination of the formats provided above. The area code is required.
//If the country code is provided, you must confirm that the country code is 1.
//Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
	// Any extra characters?
	if ((/[^-_ 0-9()]/g).test(str) || (/[^0-9()]/).test(str[0])) { 
		return false; }
	// Parentheses and numbers only
	str = str.replace(/[-_ ]/g, '');
	if (str.length > 13 || str.length < 9) { return false; }
	else {
		if (str.length == 13 || str.length == 11) {
			if (str[0] != 1) {
				return false;
			}
			else {
				return true;
			}
		}
		// if an 1 or 2 = open parentheses and 3 or 4 is closed (regex)
		if (str[0] == '(') { 
			if (str[4] == ')') {
				str = str.replace(/[()]/g, '');
				return true;
			}
			else { return false; }
		}
		else if (str[1] == '(') {
			if (str[5] == ')') {
				str = str.replace(/[()]/g, '');
				return true;
			}
			else { return false; }
		}
		else if ((/[^0-9]/).test(str)) { return false; }
	}
	return true;
}


console.log("555-555-5555", telephoneCheck("555-555-5555"));
// should return a boolean.
console.log("1 555-555-5555", telephoneCheck("1 555-555-5555"))
// should return true.
console.log("1 (555) 555-5555", telephoneCheck("1 (555) 555-5555"));
// should return true.
console.log("5555555555", telephoneCheck("5555555555"));
// should return true.
console.log("555-555-5555", telephoneCheck("555-555-5555"));
// should return true.
console.log("(555)555-5555", telephoneCheck("(555)555-5555"));
// should return true.
console.log("1(555)555-5555", telephoneCheck("1(555)555-5555"));
// should return true.
console.log("555-5555", telephoneCheck("555-5555"));
// should return false.
console.log("5555555", telephoneCheck("5555555"));
// should return false.
console.log("1 555)555-5555", telephoneCheck("1 555)555-5555"));
// should return false.
console.log("1 555 555 5555", telephoneCheck("1 555 555 5555"));
// should return true.
console.log("1 456 789 4444", telephoneCheck("1 456 789 4444"));
// should return true.
console.log("123**&!!asdf#", telephoneCheck("123**&!!asdf#"));
// should return false.
console.log("55555555", telephoneCheck("55555555"));
// should return false.
console.log("(6505552368)", telephoneCheck("(6505552368)"));
// should return false
console.log("2 (757) 622-7382", telephoneCheck("2 (757) 622-7382"));
// should return false.
console.log("0 (757) 622-7382", telephoneCheck("0 (757) 622-7382"));
// should return false.
console.log("-1 (757) 622-7382", telephoneCheck("-1 (757) 622-7382"));
// should return false
console.log("2 757 622-7382", telephoneCheck("2 757 622-7382"));
// should return false.
console.log("10 (757) 622-7382", telephoneCheck("10 (757) 622-7382"));
// should return false.
console.log("27576227382", telephoneCheck("27576227382"));
// should return false.
console.log("(275)76227382", telephoneCheck("(275)76227382"));
// should return false.
console.log("2(757)6227382", telephoneCheck("2(757)6227382"));
// should return false.
console.log("2(757)622-7382", telephoneCheck("2(757)622-7382"));
// should return false.
console.log("555)-555-5555", telephoneCheck("555)-555-5555"));
// should return false.
console.log("(555-555-5555", telephoneCheck("(555-555-5555"));
// should return false.
console.log("(555)5(55?)-5555", telephoneCheck("(555)5(55?)-5555"));
// should return false.
