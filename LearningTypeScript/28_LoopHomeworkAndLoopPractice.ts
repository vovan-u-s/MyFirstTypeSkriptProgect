



// Your mission:
// 1. Split the items string into an array
// 2. Create a new empty array: let healthyFound = []
// 3. Use a fori loop to go through each item
// 4. If item is in healthyItems → add it to healthyFound
// 5. After loop, display the healthyFound array

import test from "node:test";

// Think about:
// - How do you add items to a new array?
// - How do you check if an item is healthy?
// - How do you display the final array?

let items = 'apple,chips,carrot,ice cream,spinach';
let healthyItems = ['apple', 'carrot', 'spinach'];
let healthyFound: string[] = []
let itemsArray = items.split(',')
for (let i = 0; i < itemsArray.length; i++) {
  if (healthyItems.includes(itemsArray[i])) {
    healthyFound.push(itemsArray[i])
  }
}
console.log(healthyFound)


let allStudents = ['vova', 'dima', 'anna', 'tania', 'art', 'katya', 'arty']
let onlineStudents = ['anna', 'tania', 'art', 'katya', 'arty', 'alina']
let checkingOline: string[] = []
// for (let i = 0; i < allStudents.length; i++) {
//   if (onlineStudents.includes(allStudents.length[i])) {
//     checkingOline.push(allStudents[i])
//   }

// }
// 

// let i:number=0
// while(onlineStudents.length>0){
// let currentStudent=onlineStudents.pop()!
//  if(onlineStudents.includes(allStudents.length[])){
//   i++
//   checkingOline.push(allStudents[])
// }
//  }
// console.log(checkingOline)


// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks
// if it is a reliable truck then we are saving
let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']

let savedTrucks: string[] = []
// for(let i=0;i<truckInventory.length;i++){
//   if(reliableTruck.includes(truckInventory[i])){
//   savedTrucks.push(truckInventory[i])
//   }
// }

while (truckInventory.length > 0) {
  let currentTruckInvertory = truckInventory.pop()!
  if (reliableTruck.includes(currentTruckInvertory)) {
    savedTrucks.push(currentTruckInvertory)
  }

}
console.log(savedTrucks)




// Your mission:
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"

// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?


let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons = ['sword', 'bow'];
let defenseItems = ['shield', 'armor'];
for (let i = 0; i < gameItems.length; i++) {
  if (weapons.includes(gameItems[i])) {
    console.log("WEAPON: " + gameItems[i])

  } else if (defenseItems.includes(gameItems[i])) {
    console.log("DEFENSE: " + gameItems[i])
  } else {
    console.log("OTHER: " + gameItems[i])
  }
}


// while loop only
// We are managing a guest list
// We want to COUNT guests whose name starts with "S"

// Task: Loop through guestList
// If name starts with 'S', increase guestCount


let guestList = ['Sam', 'John', 'Sophie', 'Mike', 'Steve', 'Emma']
let guestCount = 0

// for(let i=0;i<guestList.length;i++){
//   if(guestList[i].startsWith('S')){
//     console.log(guestCount + guestList.length)
//     i++
//   }

// }

while (guestList.length > 0) {
  let currentQuest = guestList.pop()!
  if (currentQuest.startsWith('S')) {
    guestCount++

  }
}
console.log(guestCount)


// We are analyzing a list of words
// We want to COUNT words that start with 'a' or 'A'

// Task: Loop through words
// If word starts with 'a' or 'A', increase aWordsCount
// let words: string[] = ['Apple', 'banana', 'Apricot', 'orange', 'avocado']
// let aWordsCount = 0
// while (words.lenght > 0) {
//   let currentWord = words.pop()!
//   if (currentWord?.includes('a') || currentWord?.includes('A')) {
//     aWordsCount++
//   }

// }



// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"

// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount


let emails = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount = 0

// while (emails.length > 0) {
//   let currentEmail = emails.pop()!
//   if (currentEmail.endsWith("gmail.com")) {
//     gmailCount++
//   }
// }



for (let i = 0; i < emails.length; i++) {
  if (emails[i].endsWith("gmail.com")) {
    gmailCount++
  }
}
console.log(gmailCount)







// Your mission:
// 1. Use a while loop to process books until none left
// 2. Remove books one by one using pop()
// 3. If book is in favoriteBooks → display "READING: [book name]"
// 4. Otherwise → display "SKIPPING: [book name]"
// let books = ['mystery', 'science fiction', 'romance', 'thriller', 'fantasy'];
// let favoriteBooks = ['mystery', 'thriller'];

// while (books.length > 0) {
//   let currentBook = books.pop();
//     if (favoriteBooks.includes(currentBook)) {
//       console.log("READING: " + currentBook);
//     } else {
//       console.log("SKIPPING: " + currentBook);
//     }
//   }


// Task: Loop through developers
// If the developer is in seniorDevelopers, save them to experiencedTeam array
// Count how many senior developers we have


let developers = ['Sarah', 'Mike', 'Jessica', 'Tom', 'Lisa', 'John']
let seniorDevelopers = ['Sarah', 'Jessica', 'John']
let experiencedTeam: string[] = []
let seniorCount = 0
for (let i = 0; i < developers.length; i++) {

  if (seniorDevelopers.includes(developers[i])) {
    experiencedTeam.push(developers[i])
  }
}
console.log(seniorCount + (experiencedTeam.length))



// Task: Loop through tickets
// If the ticket is in criticalBugs, remove it from tickets
// Save the removed tickets to urgentList array
let tickets = ['Login Issue', 'Button Color', 'Data Loss', 'Slow Loading', 'Crash Error']
let criticalBugs = ['Data Loss', 'Crash Error']
let urgentList: string[] = []
for (let i = 0; i < tickets.length; i++) {
  if (criticalBugs.includes(tickets[i])) {
    urgentList.push(tickets[i])
    tickets.splice(i, 1);
    i--
  }

}
console.log(urgentList)




// Task: Loop through testCases
// If test case length > 6, save it in complexTests array
// Convert the test case names to uppercase before saving
let testCases = ['Login', 'Register', 'Payment', 'Search', 'Profile']
let complexTests: string[] = []

while (testCases.length > 0) {
  let curentTestCases = testCases.pop()!
  if (curentTestCases.length > 6) {
    complexTests.push(curentTestCases.toUpperCase())

  }

}

console.log(complexTests)


// while loop only
// Task: Loop through apiUrls
// Count how many are Microsoft endpoints
// Save those Microsoft URLs in microsoftApis array
let apiUrls = ['api.microsoft.com/users', 'api.google.com/search', 'graph.microsoft.com/me', 'api.github.com/repos']
let microsoftApis: string[] = []
let microsoftCount = 0

while (apiUrls.length > 0) {
  let currentEnds = apiUrls.pop()!
  if (currentEnds.includes(' microsoft')) {
    microsoftApis.push(currentEnds)
    microsoftCount++
  }
}
console.log(microsoftApis)
console.log(microsoftCount)



// Task: Loop through testResults
// Split each result by ':'
// If score > 85 AND test name includes 'e', save it in excellentResults array
// Count how many excellent results there are
let testResults = ['Login:95', 'Cart:80', 'Checkout:92', 'Search:75', 'Profile:88']
let excellentResults: string[] = []
let excellentCount = 0

// while (testResults > 0) {
//   let currentTestResults = testResults.pop()!
//   currentTestResults1:number=parseFloat(currentTestResults)
//   if (currentTestResults1 > 85 && currentTestResults.includes('e')) {


//   }

class CarsLoginTestPage {
  titleMessage: string = 'Sign In to Cars.com'
  errorMessage: string = 'Invalid username or password'
  greetengMessage: string = 'Welcome to Cars.com!'
  navigateToLoginPage(): void {
    console.log('Navigating to Cars.com login page...')
  }
  enterCredentials(username: string, password: string): void {
    console.log('Entering username: ' + username)
    console.log('Entering password: ' + password)
  }
}
let myEnteringOfCredentials = new CarsLoginTestPage()

myEnteringOfCredentials.enterCredentials('vova', '1234556')
myEnteringOfCredentials.navigateToLoginPage()
myEnteringOfCredentials.titleMessage



class ChickFillTest {
  loginScreenTitle: string = 'welcome'
  failMessage: string = 'not passed'
  succeedsEnterMessage: string = 'succeds'
  navigateLoginPage(): void {
    console.log("Click for Login is here")
  }
  enterCredentials(login: string, password: string): void {
    console.log('put the login is here')
    console.log('put the password is here')

  }

}
let copyOfChikFill = new ChickFillTest()
copyOfChikFill.navigateLoginPage()
copyOfChikFill.enterCredentials('vova', '12345')

console.log(copyOfChikFill.succeedsEnterMessage)
console.log(copyOfChikFill.failMessage)
console.log(copyOfChikFill.loginScreenTitle)


// Create a class for YouTubeTestPage
// This class will help us test YouTube's website functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected page title that should appear when YouTube loads (as text)
// Variable 2: Store the default video quality setting as a whole number (like 720 or 1080)
// Variable 3: Store an error message that appears when something goes wrong (as text)
// Add 3 methods that perform different YouTube testing actions:
// Method 1: Navigate to YouTube homepage
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print a message saying 'it's going to YouTube'
// Method 2: Search for videos by category
// This method takes one argument: the search category as text (like "music" or "gaming")
// This method gives back a list of video titles (multiple pieces of text)
// If the category is "music" give back a list with 3 music video titles
// If the category is "tutorial" give back a list with 3 tutorial video titles
// If the category is anything else, give back an empty list
// Method 3: Change video playback speed
// This method takes two arguments: current speed as a decimal number, and desired speed as a decimal number
// This method gives back either true or false
// If the desired speed is between 0.25 and 2.0, give back true
// If the desired speed is outside that range, give back false
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class YouTubeTestPage {
  loadingPageView: string = 'Loading'
  videoQualityNumber: string = '480'
  erorMessageOfBadConnection: string = 'Bad connection'
  homePageNavigation(): void {
    console.log("t's going to YouTube")
  }
  categoryStringForSearching('music': string,'gaming': string): string[] {
    let categoryStringForSearching: string[] = []
    if (categoryStringForSearching.includes('music')) {
      console.log('3 type of music video')
    } else if ((categoryStringForSearching.includes("tutorial"))) {
      console.log('3 type of tutorial video')
    }
    return categoryStringForSearching
  }
  changingSpeedLine(decimalSpeed): boolean {
    changingSpeedLine = boolean
    if (decimalSpeed > 0.25 && decimalSpeed < 2.0) {
      console.log(true)
    } else {

    }

  }

}


// Create a class for CostcoTestPage
// This class will help us test Costco's website functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the store location name as text (like "Costco Wholesale Seattle")
// Variable 2: Store the membership fee amount as a whole number (like 60 or 120)
// Variable 3: Store the maximum bulk quantity allowed per item as a whole number (like 50 or 100)

// Add 3 methods that perform different Costco testing actions:

// Method 1: Check store hours
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print the store location name
// Then print a message about store hours (like "Store open 10am-8pm")

// Method 2: Calculate membership savings
// This method takes two arguments: original price as a decimal number, and member discount percentage as a whole number
// This method gives back the savings amount as a decimal number
// Calculate how much money is saved: (original price × discount percentage ÷ 100)
// Give back the calculated savings amount

// Method 3: Find products by category
// This method takes one argument: category name as text (like "electronics" or "food")
// This method gives back a list of matching product names (multiple pieces of text)
// STEP 1: Inside the method, create an array with at least 6 different product names
//         Examples: "electronics-TV", "food-apples", "electronics-laptop", "clothing-shirt", "food-bread", "electronics-phone"
// STEP 2: Create an empty array to store the products that match
// STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
// STEP 4: Inside the loop, get the current product name using the i variable
// STEP 5: Use the startsWith string method to check if the current product name starts with the category name
//         Example: if category is "electronics", check if product.startsWith("electronics")
// STEP 6: If the product starts with the category name, add it to your matching products array
// STEP 7: After the loop finishes, give back the array of matching products

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it


class CostcoTestPage {
  locationName: string = "Costco Wholesale Seattle"
  membershipFee: number = 60
  maximumBulkQuantity: number = 100
  checkStoreHours(): void {

    console.log("Store open 10am-8pm");
  }
  membershipSavings(originalPrice: number, discountPercent: number): number {
    return (originalPrice * discountPercent) / 100
  }
  categoryStringForProducts(electronics: string): string[] {
    let myArrayList: string[] = ["electronics-TV", "food-apples", "electronics-laptop", "clothing-shirt", "food-bread", "electronics-phone"]
    let myProductArray: string[] = []
    for (let i = 0; i < myArrayList.length; i++) {
      if (myArrayList[i].startsWith('electronics')) {
        myProductArray.push(myArrayList[i])


      }

    }
    return myProductArray
  }
let NewCostcoTestPage = new CostcoTestPage()
console.log(NewCostcoTestPage.checkStoreHours)
console.log(NewCostcoTestPage.membershipSavings)
console.log(NewCostcoTestPage.categoryStringForProducts('food'))













}