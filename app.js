// Assignment # 06

// Chapter 21-25
// Task 01
fname = prompt("Enter First Name: ")
lname = prompt("Enter Last Name: ")
fullName = fname + " " + lname;
alert(fullName);

// Task 02
mobile = prompt("Enter favourite mobile phone model: ")
alert("My favourite phone is: "+mobile+ "Lenght of string is: " +mobile.length);

// Task 03
word = "Pakistani";
alert("String: "+word +"\nLength of string: "+word.indexOf('n'));

// Task 04
hello = "Hello World";
alert("String: "+hello+"\nLast index of: "+hello.lastIndexOf('l'));

// Task 05
third = "Pakistani";
alert("String: "+third +"\nCharacter at 3rd index: "+third.charAt(3));


// Task 06
fname = prompt("Enter First Name: ")
lname = prompt("Enter Last Name: ")
fullName = fname.concat(" "+ lname)
alert(fullName);

// Task 07
city = "Hyderabad";
alert("City: "+city+"\nAfter replacement: "+city.replace("Hyder", "Islam"));

// Task 08
message = "Ali and Sami are best friends. They play cricket and football together";
alert(message.replace(/and/g, "&"));

// Task 09
value = "472";
document.write("Value: " + value + "\nType: " + typeof(value))
value = parseInt(value);
document.write("<br>Value: " + value + "\nType: " +typeof(value))

// Task 10
userInput = prompt("Enter any word: ")
alert("User Input: " + userInput + "\nUpperCase: " + userInput.toUpperCase())

// Task 11
userInput = prompt("Enter any word: ")
alert("User Input: " + userInput + "\nTitle Case: " + userInput.charAt(0).toUpperCase() + userInput.substring(1))

// Task 12
num = 35.36;
num = num.toString();
alert("Number: " + num + "\nResult: " + num.split('.').join(''))

// Task 13
userName = prompt("Enter username (only alphabets allowed): ")
if (!/^[a-zA-Z]+$/.test(userName)) { 
    alert("Invalid Username!")
}else{
	alert("Valid Username!")
}

// Task 14
A = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput = prompt("Enter item to search: ")
if(A.includes(userInput.toLowerCase())){
	alert(userInput + ' is available at index '+ A.indexOf(userInput.toLowerCase()) + ' in our bakery');
}else{
	alert('We are sorry, ' + userInput + ' is not available in our bakery!')
}

// Task 15
password = prompt("Enter password: ")
var letter = /[a-zA-Z]/;
var number = /[0-9]/;

if (password.length < 6 ) {
    alert('Password must be at least of six characters!')
}else if(!letter.test(password)){
	alert('Password must contain alphabet!')
}else if(!number.test(password)){
	alert('Password must contain number!')
}else if(/^\d/.test(password)){
	alert('Password can not begin with number!')
}else{
	alert('You have entered a valid password!')
}

// Task 16
var str = 'University of Karachi';
var ar = str.split(''); 
ar.forEach(function(entry) {
  document.write(entry+'<br>');
});

// Task 17
userInput = prompt('Enter any word: ');
alert("User input: "+userInput +"\nLast Character of input: "+userInput.substr(userInput.length - 1));

// Task 18
str = "“The quick brown fox jumps over the lazy dog";
var count = (str.toLowerCase().match(/the/g) || []).length;
alert('There are '+ count + ' occurence of the word "the"')

// Chapter 26-30
// Task 01
userInput = Number(prompt("Enter number: "));
alert(typeof(userInput)+"\nNumber: " + userInput + "\nRound of value: " + Math.round(userInput) + "\nFloor value: " +  Math.floor(userInput) + "\nCiel value: " + Math.ceil(userInput));

// Task 02
userInput = Number(prompt("Enter number: "));
alert(typeof(userInput)+"\nNumber: " + userInput + "\nRound of value: " + Math.round(userInput) + "\nFloor value: " +  Math.floor(userInput) + "\nCiel value: " + Math.ceil(userInput));

// Task 03
userInput = Number(prompt("Enter number: "));
alert('Absolute value of '+ userInput + ' is ' + Math.abs(userInput))

// Task 04
alert('Random dice value: ' + Math.floor((Math.random() * 6) + 1))

// Task 05
var value = '';
if(Math.floor((Math.random() * 2) + 1) == 1){
	value = 'Heads'
}else{
	value = 'Tails';
}
alert('Random coin value: ' + value  )

// Task 06
alert('Random number between 1 & 100: ' + Math.floor((Math.random() * 100) + 1))

// Task 07
userInput = prompt("Enter your weight: ");
alert('Your weight is ' + userInput.replace(/[^\d.]/g, '') + ' Kilograms')

// Task 08
secret = 7;
userInput = Number(prompt("Enter number between 1 & 10: "));
if (userInput == secret){
	alert('Congratulations!')
}else{
	alert('Invalid number!')
}

// Chapters 31-34
// Task 01
alert(new Date());

// Task 02
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
alert(months[new Date().getMonth()])

// Task 03
daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert(daylist[new Date().getDay()])

// Task 04
if(new Date().getDay() == 0 || new Date().getDay() == 6){
	alert('Its Fun day!')
}else{
	alert('Its not Fun Day.')
}

// Task 05
if(new Date().getDate() <= 16){
	alert('First fifteen days of month')
}else{
	alert('Last days of month')
}

// Task 07
var dt = new Date();
var h =  dt.getHours(), m = dt.getMinutes();
var result = (h > 12) ? 'PM' : 'AM';
alert(result)

// Task 08
laterDate = new Date(new Date().getFullYear(), 11, 31)
alert('Later Date: '+ laterDate)

// Task 09
Ramadan_ = new Date(new Date().getFullYear(), 3, 24);
to_day = new Date(new Date().toLocaleString());
timeDiff  =  to_day.getTime() - Ramadan_.getTime();
days      = timeDiff / (1000 * 3600 * 24); 
alert(Math.round(days) +' days have passed since 1st Ramadan, 2020' )

// Task 10
ref = new Date(new Date().getFullYear(), 11, 5, 2015);
beg = new Date(new Date().getFullYear(), 0, 1, 2015);
timeDiff  =  ref.getTime() - beg.getTime();
sec      = timeDiff / 1000; 
alert(Math.round(sec) +' seconds had passed since begning of 2015' )

// Task 11
date = new Date(new Date().toLocaleString());
reset = new Date(date - 1*60*60*1000); 
newdate = new Date(reset);
alert('Current Date: '+ date + '\n1 hour ago, it was '+ newdate.toString());

// Task 12
current = new Date(new Date().toLocaleString());
newdate = current.setFullYear(current.getFullYear() -100);
alert('Current Date: '+ new Date(new Date().toLocaleString()) + '\n100 years back, it was '+ new Date(newdate).toString());

// Task 13
age = prompt("Enter your age: ")
current = new Date(new Date().toLocaleString());
newdate = current.setFullYear(current.getFullYear() - age);
alert('Your age is: '+ age + '\nYour birth year is: '+ new Date(newdate).getFullYear());

// Task 14
consumerName = 'Muhammad Ahmad';
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
no_units = 410;
charges_unit = 16;
late_fee = 350;

document.write('<h1>K-Electric Bill</h1>')
document.write('<p>Consumer Name: <b>'+ consumerName +'</b></p>')
document.write('<p>Month: <b>'+ months[new Date().getMonth()] +'</b></p>')
document.write('<p>Number of Units: <b>'+ no_units +'</b></p>')
document.write('<p>Charges per Unit: <b>'+ charges_unit +'</b></p><br>')

document.write('<p>Net Amount Payable (Within due date): <b>'+ no_units * charges_unit  +'</b></p>')
document.write('<p>Late payment surcharge: <b>'+ late_fee +'</b></p>')
document.write('<p>Gross Amount Payable (after due date): <b>'+ (no_units * charges_unit + late_fee) +'</b></p>')

// Chapter 35-38
// Task 01
function getCurrentDate(){
	alert(new Date());
}
getCurrentDate()

// Task 02
function greetUser(firstname, lastname){
	alert('Welcome '+firstname +' '+ lastname + ' !');
}
greetUser('Ahmad','Mujtaba')

// Task 03
function sumTwoNumbers(){
	num1 = parseInt(prompt('Enter first number: '))
	num2 = parseInt(prompt('Enter second number: '))
	alert('Sum is: '+ (num1 + num2))
}
sumTwoNumbers()

// Task 04
function calculator(num1,num2,opr){
	if(opr == '*'){
		result = num1 * num2;
	}else if(opr == '/'){
		result = num1 / num2;
	}else if(opr == '+'){
		result = num1 + num2;
	}else if(opr == '-'){
		result = num1 - num2;
	}else{
		result = 'Error in calculating values!';
	}
	alert('Result: '+ result)
}
calculator(2,5,'*')

// Task 05
function squareIt(number) {
  alert(number ** 2)
}
squareIt(5)

// Task 06
function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    alert(rval)
}
sFact(2)


// Task 07
function counting(num1,num2)
{
	for(i=num1; i<=num2; i++){
		document.write(i + '<br>')
	}
}
counting(2,10)

// Task 10
function isPalindrome(str) {
 alert('Enter word is Palindrome: '+ (str == str.split('').reverse().join('')));
}
isPalindrome('racecar');

// Task 11
function toTitleCase(str) {
	sentence = '';
    str.replace(/\w\S*/g, function(str){
    	sentence +=  (str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()) + ' ';
    });
    alert(sentence)
}
toTitleCase('the quick brown fox')

// Task 12
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    alert('Entered Sentence: ' + string + '\nLongest word: ' + word);
}
longestWord('Web Development Tutorial')

// Task 13
function findletter(str,letter){

	alert(str.toLowerCase().split(letter.toLowerCase()).length-1);

}
findletter('JSResourceS.com','J')