// "The quick brown fox"
// Your task: Use split() to create an array of words
// let sentence = "The quick brown fox";
// let words = sentence.split("___");  // Replace "___" with something right
// console.log(words);
// I want to have this -> ['The','quick','brown','fox']



let sentence = "The quick brown fox"
let words = sentence.split(" ")
console.log(words)


let userData = "Alice,30,QA Engineer,Premium";
let userDetails = userData.split(","); 
console.log(userDetails);

let urlPath = "home-products-electronics-laptops";
let navigationPages = urlPath.split("-");
console.log(navigationPages);

// "testuser@gmail.com"
// Your task: Separate the username from the domain
// let email = "testuser@gmail.com";
// let emailParts = email.split("___");  // What separator?
// print 'username = testuser'
// print 'domain = gmail.com'

let email="testuser@gmail.com"
let message=email.split("@")
console.log(message)
console.log('username-'+message[0] )
console.log('domain-'+message[1])




// my name is Salih
// I am 25 years old
// My favorite car is Aston Martin Vantage


let me = 'Salih,25,Aston Martin Vantage'
let message2=me.split(",")
console.log('I am '+message2[1]+'years old ')
console.log('my name is '+ message2[0])
console.log('My favorite car is '+ message2[2])




