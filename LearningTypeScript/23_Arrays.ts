
// let favoriteCars=['corvette','nissan370','bmwM5F90']
// console.log(favoriteCars.length)

//push for adding arrays
//pop for deleting only the last one 


let shopingList=['salt']
let shopingList1=shopingList.push('bread','water','beer','candy','meat')
console.log(shopingList)
console.log(shopingList.length)
let shopingList2=shopingList.pop()
console.log(shopingList2)
console.log(shopingList)


let arrayName:(string|number|boolean)[]=[]
arrayName.push('money','drugs','guns','cars')
console.log(arrayName.push('motorcycle','buggy'))
arrayName.push('phone','laptop')

console.log('I have a '+ arrayName)


// Simulating a real QA automation scenario: Managing test cases for Google.com
// create an empty array for storing your test cases.
// add 'Login Test' to that array.
// add 'Search Test' to that array
// I want you to print all the amount of test cases you have after you add a new one.
let testCases: string[] = []
let testCaseNumber = testCases.push('Login Test')
console.log(testCaseNumber)
testCaseNumber = testCases.push('Search Test')
console.log(testCaseNumber)
testCaseNumber=testCases.push('Checkout Test')
console.log(testCaseNumber)
console.log(testCases.push('New User Test'))
console.log(testCases)
console.log(testCases.length)


