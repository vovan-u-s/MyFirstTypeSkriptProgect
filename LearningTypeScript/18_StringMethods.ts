// // // let myLoverCaseString: string = 'vova love sally'
// // // let myUpperCaseString: string = myLoverCaseString.toUpperCase()
// // // console.log(myUpperCaseString)

// // // let theNameOfCompany: string = 'big company    '
// // // let fixThisName: string = theNameOfCompany.trim()
// // // console.log(fixThisName)

// // // let myPassword: string = 'love drifting'
// // // let myKey: string = 'drift'
// // // console.log(myPassword.includes(myKey))

// // // let todayLesson: string = 'good my pants are wet '
// // // let smallMessage: string = 'good day for wet '

// // // console.log(todayLesson.trim())
// // // console.log(todayLesson.startsWith('good'))
// // // console.log(todayLesson.endsWith('wet '))

// // // let tvName: string = 'Philips TV'
// // // if (tvName.includes('TV')) {
// // //     console.log('We have a match')
// // // } else {
// // //     console.log('There was no match')
// // // }

// // // let flightNumber: string = 'UA345'
// // // let airlineCode: string = "UA"
// // // if (flightNumber.startsWith(airlineCode)) {
// // //     console.log('This is a United Airlines flight ')
// // // } else {
// // //     console.log("This is a different airline")
// // // }



// // // let theDocumentsName: string = 'pdf'
// // // if (theDocumentsName.endsWith('pdf')) {
// // //     console.log('this is a PDF file')
// // //     }else if (theDocumentsName.endsWith(('.docx') || ('.doc'))) {
// // //         console.log('this is a Word document')
// // //     } else if (theDocumentsName.endsWith('.xlsx' || ".doc")) {
// // //         console.log('then this is an Excel file')
// // //     } else if (theDocumentsName.endsWith('.txt')) {
// // //         console.log('this is a Text file')
// // //     } else if (theDocumentsName.endsWith('.csv')) {
// // //         console.log(' then this is a CSV file')
// // //     } else if (theDocumentsName.endsWith('.json')) {
// // //         console.log('this is a JSON file')

// // //     } else {
// // //     console.log('unsupported file type')
// // // }



// // // let passwordLenght:string= 'hayabusa'
// // //  if((passwordLenght.length)>= 8){
// // //     console.log ( 'Strong password')
// // //  }else{
// // //     console.log('Weak password')
// // //  }


// // let myName: string = 'Volodymyr Srorokhod'
// // let myFirstname = myName.slice(0, 9)
// // console.log(myFirstname)
// // console.log(myName.charAt(10))


// // let userInput: string = 'HeLLo WoRLd'
// // let lowerCase = userInput.toUpperCase()
// // let uperCase = userInput.toLowerCase()
// // console.log(lowerCase)
// // console.log(uperCase)

// // let messyInput: string = '   user data entry   ';
// // let normalMessyinput = messyInput.trim()
// // console.log(normalMessyinput,)

// // if (normalMessyinput.length >= 10) {
// //     console.log('Valid data entry - sufficient length')
// // } else if (normalMessyinput.length >= 5) {
// //     console.log('Acceptable data entry - minimum requirement met')
// // } else if (normalMessyinput.length >= 1) {
// //     console.log('Data too short - please provide more information')
// // } else {
// //     console.log('Empty data entry - input required')
// // }


// // let productCode: string = 'PRD-2024-XL';

// // let firstChar = productCode.charAt(0)
// // let fiftChar = productCode.charAt(4)
// // let tenthChar = productCode.charAt(9)

// // if ((firstChar === 'p') && (fiftChar === '2')) {
// //     console.log('Valid product code format - Current year product')
// // } else if ((firstChar === 'P') && (tenthChar === 'X')) {
// //     console.log('Valid product code - Extra Large size detected')
// // } else if (fiftChar === 'P') {
// //     console.log('Valid product prefix - Standard product format')
// // } else if (productCode.length >= 10) {
// //     console.log('Product code meets minimum length requirements')
// // } else {
// //     console.log('Invalid product code format')
// // }

// // let logEntry: string = '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout';
// // let firstError: number = logEntry.indexOf('[ERROR]');
// // let secondError: number = logEntry.lastIndexOf('[ERROR]');
// // let firstPosittionInfo: number =logEntry.indexOf('[INFO]');


// // let productCode: string = 'PROD-ELEC-2024-SMART-XL';

// // // Your tasks:
// // // 1. Find the position of the first '-' character
// // // 2. Find the position of the last '-' character
// // // 3. Extract the category (between first and second '-')
// // // 4. Extract the size (after the last '-')
// // // 5. Print the extracted information
            
// // let firstPosition:number=productCode.indexOf('-')
// // let secondPosition:number=productCode.lastIndexOf('-')



// // // Your tasks:
// // // 1. Remove all 'test_' prefixes using replaceAll()
// // // 2. Replace all commas with ' | ' separators
// // // 3. Replace all colons with ': ' for better readability
// // // 4. Print the original and cleaned data
// // 5. Count how many replacements were made


//  let productCode: string = 'PROD-ELEC-2024-SMART-XL';


// let firstDash: number = productCode.indexOf('-');


// let lastDash: number = productCode.lastIndexOf('-');


// let secondDash: number = productCode.indexOf('-', firstDash + 1);
// let category: string = productCode.slice(firstDash + 1, secondDash);


// let size: string = productCode.slice(lastDash + 1);


// console.log('First dash position: ' + firstDash); 
// console.log('Last dash position: ' + lastDash);
// console.log('Category: ' + category);
// console.log('Size: ' + size);



// let messyData: string = 'test_id:001,test_name:login,test_status:pass,test_result:success';

// // Your tasks:
// // 1. Remove all 'test_' prefixes using replaceAll()
// // 2. Replace all commas with ' | ' separators
// // 3. Replace all colons with ': ' for better readability
// // 4. Print the original and cleaned data
// // 5. Count how many replacements were made




// let myMessage:string= 'My dream mattress is &Purple Matterss&'
// let indexOfFirst:number=myMessage.indexOf('&')
// let indexOfSecond:number=myMessage.lastIndexOf('&')
// console.log(myMessage.slice(indexOfFirst+1, indexOfSecond))

// let myCity:string= 'Welcome to [New York City]!'
// let firstInd:number=myCity.indexOf('[')
// let secondInd:number=myCity.indexOf(']')
// let myCountOf:string=(myCity.slice(firstInd +1 ,secondInd))
// console.log(myCountOf.length)

// let myEmail: string = 'Contact me at <hello@example.com>'

// let firstIndex:number= myEmail.indexOf('<')
// let secondIndex:number=myEmail.indexOf('>')
// console.log(myEmail.slice(firstInd+1,secondInd))
// let length1:string=myEmail.slice(firstInd+1,secondInd)
// console.log(length1.length)



// let carCom:string='This car is (Mercedes)'
// let possitionNumber1:number=carCom.indexOf('(')
// let possitionNumber2:number=carCom.indexOf(')')
// let importantMessage:string=carCom.slice(possitionNumber1+1,possitionNumber2)
// if(importantMessage=== 'Mercedes'){
//   console.log('we are going to dealer')
// }else{
//   console.log('This car is Mercedes')
// }



// let expediaCom:string=  'This vacation is at -Jamaica-'
// let letterOne:number=expediaCom.indexOf('-')
// let letterTwo:number=expediaCom.lastIndexOf('-')
// let ourvacationPlace:string=expediaCom.slice(letterOne+1,letterTwo)
// if(ourvacationPlace==='Jamaica' ||  ourvacationPlace=== 'Singapore' ){
//     console.log( 'we are going to travel')
// }else{
//      console.log(  'we keep browsing')
// }

let websiteMessage: string = 'Fresh apples at |$3.49| per lb'
let message1:number=websiteMessage.indexOf('$')
let message2:number=websiteMessage.lastIndexOf('|')
let price:string=websiteMessage.slice(message1+1,message2)
let numberPrice:number =parseFloat(price)
 if(numberPrice<=5 ){
   console.log( 'buy the item')
 }else{
    console.log('skip it')
 }


