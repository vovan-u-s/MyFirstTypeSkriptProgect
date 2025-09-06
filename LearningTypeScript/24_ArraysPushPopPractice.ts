// // // // let namesOfPets: (string)[] = []
// // // // namesOfPets.push('Knopa', 'Escobar')

// // // // console.log(namesOfPets.push())

// // // // console.log(namesOfPets.pop())

// // // // console.log(namesOfPets)



// // // // let emptyArray:(number|string|boolean)[]=[]
// // // // emptyArray.push('Vova')
// // // // emptyArray.push(30)
// // // // emptyArray.push(true)
// // // // emptyArray.push('student')
// // // // emptyArray.push(100)
// // // // console.log(emptyArray)
// // // // console.log('My name is '+ emptyArray[0])
// // // // console.log(emptyArray[1]+ ' i am ')
// // // // console.log('Do I like coding? '+ emptyArray[2])
// // // // console.log('my role is ' + emptyArray[3])
// // // // console.log('My score '+emptyArray[4])
// // // // console.log(emptyArray.length-1)
// // // // console.log('Array has '+ emptyArray.length)
// // // // let poped=emptyArray.pop()
// // // // console.log(poped)


// // // // let classmates:(string)[]=['dima','Sally','ania','tania','artem']
// // // // let removed=classmates.splice(0,3)
// // // // console.log(classmates)
// // // // classmates.splice(0,2)
// // // // console.log(classmates)


// // // // let playersNumbers:(number)[]= [1,2,3,4,5,6]
// // // // console.log(playersNumbers.splice(3,2))
// // // // playersNumbers.splice(0,1)
// // // // console.log(playersNumbers)


// // // // let testBrowsers:(string)[]=[ "Chrome", "Firefox", "Safari", "Edge"]
// // // // testBrowsers.splice(2,1)
// // // // testBrowsers.splice(1,1)
// // // // testBrowsers.splice(0,1)
// // // // console.log(testBrowsers)


// // // // let pets2 = ["dog", "cat", "bird", "fish"];
// // // // pets2.splice(2,1)
// // // // pets2.splice(2,0,'hamster')
// // // // console.log(pets2)
// // // // pets2.splice(4,0,'sabaka')



// // // // // let movies = ["Action Movie", "Old Comedy", "Drama"];
// // // // // // TODO: Add "Old Comedy" after "New Comedy"
// // // // // // TODO: Add "Horror Movie" at the beginning (index 0)
// // // // // // TODO: Add "Documentary" at the end using splice()
// // // // // // TODO: Remove the middle movie

// // // // // movies.splice(2,0,'new comedy')
// // // // // movies.splice(0,0,"Horror Movie")
// // // // // movies.splice(5,0,"Documentary")
// // // // // console.log(movies)
// // // // // movies.splice(2,2)
// // // // // console.log(movies)



// // // // let movies = ["Action Movie", "Old Comedy", "Drama"];
// // // // movies.splice(0,3,'Homework')
// // // // console.log(movies)


// // // // let testConfig: string = 'Environment: [  Production  ] includes smoke tests and regression';


// // // // let start = testConfig.indexOf('[');
// // // // let end = testConfig.indexOf(']');



// // // // let envRaw = testConfig.slice(start + 1, end);


// // // // let environment = envRaw.trim();



// // // // if (environment.startsWith('Prod')) {
// // // //     if (testConfig.includes('smoke')) {
// // // //         console.log( 'Production Smoke Testing');
// // // //     } else {
// // // //         console.log('Production Basic Testing');
// // // //     }
// // // // } else {
// // // //     if (environment.endsWith('ment')) {
// // // //         console.log( 'Development Environment');
// // // //     } else {
// // // //         console.log('Unknown Environment');
// // // //     }
// // // // }


// // // // let browserData: string = 'Browser: [Chrome__120__beta] supports automation and headless mode';


// // // // let startOf:number = browserData.indexOf('[');
// // // // let endOf:number= browserData.lastIndexOf(']');

// // // // let rawInfo:string = browserData.slice(startOf + 1, endOf); 

// // // // let browserInfo:string = rawInfo.replaceAll('__', ' ');

// // // // if (browserInfo.startsWith("Chrome")) {
// // // //     if (browserInfo.endsWith("beta")) {
// // // //         console.log("Chrome Beta Version");
// // // //     } else {
// // // //         console.log("Chrome Stable Version");
// // // //     }
// // // // } else {
// // // //     if (browserInfo.includes("Firefox")) {
// // // //         console.log("Firefox Browser");
// // // //     } else {
// // // //         console.log("Other Browser");
// // // //     }
// // // // }



// // // // Salih Aydin
// // // // :spiral_calendar_pad:  6:23 PM
// // // // if the username 0 is ending with 123 then replace it without 123 version
// // // // 'alice123' -> 'alice'
// // // // if the username is starting with lowercase 'b' then replace it with uppercase
// // // // "bob456" -> "Bob456"
// // // let usernames: (string )[] = ["alice123", "bob456", "charlie789", "diana012", "eve345"];

// // // if (usernames[0].endsWith('123')) {
// // //     console.log(usernames.splice(0, 1, 'Alice'))
// // // }
// // // if (usernames[1].startsWith('b')) {
// // //     console.log(usernames.splice(1, 1, 'Bob456'))
// // // }
// // // if (usernames[2].startsWith('c') && usernames[2].endsWith('789')){
// // //     console.log(usernames.splice(2, 1, 'Charlie'))
// // // }

// // // console.log(usernames)


// // // // Create an array: [" 500 USD", " 20 ", "true", "junior", "150USD"]
// // // // Remove spaces from the first element, extract the number, subtract 100 ( - )
// // // // Trim the second element, convert to number, divide by 2
// // // // Convert the third element to boolean and negate it (true → false)
// // // // Replace the fourth element with "Senior"
// // // // Extract number from the last element, add 50
// // // // Print each result and the final array


// // // let myArray:(number|string|boolean)[]=[" 500 USD", " 20 ", "true", "junior", "150USD"]
// // // let firstNumStr = myArray[0].toString().trim()
// // // let extractNum=firstNumStr.slice(0,3)
// // // let myNumber = parseFloat(extractNum) - 100;
// // // console.log(myNumber)


// // // let secondNum = parseFloat( myArray[1].trim()) 
// // // console.log( secondNum); 


// // // let thirdBool = !(myArray[2].toLowerCase() === "true");
// // // console.log(thirdBool);


// // //  myArray.splice(3,1,'Senior')
// // //   let theLastEl=myArray[4].toString().slice(0,3)
// // //   let newNumber:number=parseFloat(theLastEl) +50
// // //   console.log(newNumber)


// // //  myArray.splice(3,1,'Senior')
// // //  console.log(myArray.splice(3,1,'Senior'))

// // //  let myNumb=myArray[1].toString().trim()
// // //  let newNumbers=parseFloat(myNumb) /2


// // //   console.log(newNumbers)


// // // Start with: ["100USD", "temporary", "false", "80"]
// // // Remove "temporary" from the array
// // // Insert "permanent" at index 1
// // // Convert "100USD" to number, subtract 40
// // // Replace "false" with "true"
// // // Add "bonus:20" at the end using splice
// // // Extract the number from "bonus:20" and multiply by 3

// // let listOfArray = ["100USD", "temporary", "false", "80"]
// // listOfArray.splice(1, 1)
// // listOfArray.splice(1, 0, "permanent")
// // let my100 = listOfArray[0].slice(0, 3)
// // let mew100 = parseFloat(my100) - 40
// // listOfArray.splice(1, 2, 'true')
// // listOfArray.splice(3, 0, 'bonus:20')
// // let lastNum = listOfArray[3].slice(6, 9)
// // let goodNum = parseFloat(lastNum) * 3
// // console.log(goodNum)




// // // ## **Question 6: Shopping Cart Priority Management**
// // // **Difficulty**: :star::star:☆☆☆
// // // Create arrays `regularItems` and `priorityItems`. Start
// // // with regularItems: `["milk", "bread", "eggs"]`. Check if it includes
// // // "bread" - if yes, move it to priorityItems using splice. 
// // // Add "cheese"
// // // to regularItems. Insert "urgent-medicine" at the beginning of priorityItems.
// // // Replace the last item in regularItems with "organic-eggs" with pop make. 
// // // Print both arrays
// // // and their combined length.
// // // **Skills practiced**: Basic splice operations, includes(), moving between arrays

// // // let regularItems:string[]=["milk", "bread", "eggs"]
// // // let priorityItems:string[]=[]

// // // if(regularItems.includes("bread")){
// // //     regularItems.splice(1,1)
// // //     priorityItems.push("bread" )
// // // }

// // // regularItems.push('cheese')
// // // priorityItems.splice(0,0,'urgent-medicine')
// // // regularItems.pop() 
// // // regularItems.splice((regularItems.length),0,"organic-eggs")


// // // console.log((regularItems.length) + ( priorityItems.length) ) 
// // // console.log((regularItems ) + ( priorityItems)) 




// // // Create three arrays: `pending`: `["app-v1", "api-v2"]`,
// // // `deploying`: empty, ``: empty. Move the first pending item to deploying.
// // // Replace "v1" with "v1.1" in any array that contains it. Add "database-v1" to pending.
// // // If deploying length equals 1, move its item to deployed and add "SUCCESS" suffix (put it before).
// // // Insert "MONITOR" at the beginning of deployed. Show the deployment pipeline status.



// // let pending: string[] = ["app-v1", "api-v2"]
// // let deploying: string[] = []
// // let deployed: string[] = []
// // pending.splice(0, 1)
// // deploying.push("app-v1")
// // deploying.splice(0, 1, 'app-v1.1')
// // pending.push("database-v1")
// // if (deploying.length === 1) {
// //     deploying.splice(0, 1)
// //     deployed.push('SUCCESS-app-v1.1')

// // }

// // deployed.splice(0, 0, "MONITOR")
// // console.log(deployed)




// // // ### **Question 9: Bug Severity Escalation System**
// // // **Difficulty**: :star::star::star:☆☆
// // // Start with `lowBugs`: `["ui-glitch", "typo-fix", "color-issue"]`, `mediumBugs`: `["login-slow"]`,
// // //  `criticalBugs`: empty. Check each lowBug - if it includes "glitch", move it to mediumBugs and add
// // //  "urgent-" prefix. Replace lowBugs containing "fix" with "patch-required". If mediumBugs length > 1,
// // //   move the first one to criticalBugs. Insert "ESCALATED" at the beginning of criticalBugs.
// // //   Add "new-report" to lowBugs and remove the last criticalBug. Calculate total bugs across all severities.


let lowBugs: string[] = ["ui-glitch", "typo-fix", "color-issue"]
let mediumBugs: string[] = ["login-slow"]
let criticalBugs: string[] = []
if (lowBugs[0].includes("glitch")) {

    mediumBugs.splice(1, 0, 'urgent-' + lowBugs.splice(0, 1)[0])
}
if (lowBugs[1].includes("glitch")) {
    mediumBugs.splice(1, 0, 'urgent-' + lowBugs.splice(1, 1)[0])
}

if (lowBugs[2].includes("glitch")) {
    mediumBugs.splice(1, 0, 'urgent-' + lowBugs.splice(2, 1)[0])
}
lowBugs[1].replace("fix", "patch-required")
if (mediumBugs.length > 1) {

    criticalBugs.push(mediumBugs.splice(1,0)[0])
}
lowBugs.push("new-report")
criticalBugs.pop()
criticalBugs.splice(0,0,"ESCALATED" )
console.log((lowBugs.length) + (mediumBugs.length) + (criticalBugs.length))




// // let devices=['iphone-12', 'android-samsung', 'ipad-pro']
// // let connectedDevices: string[]=[]
// // if(devices.includes("iphone-12" ))[

// // ]


// let connections: string[] = ['mysql-prod', 'redis-cache', 'mongo-dev']
// let activeConnections: string[] = []
// if (connections.includes('mysql')[0]) {
//     activeConnections.push('SECURED' + connections.splice(0, 1)[0])

// }

// if (connections.includes('redis')) {
//     connections.splice(connections.indexOf('redis-cache'), 1, "redis-cluster")
// }
// connections.push("postgres-test")
// activeConnections.splice(0, 0, "monitor-connection")
// console.log("BACKUP-" + activeConnections.pop())

// console.log(connections.length + activeConnections.length)



// and cleanData: empty. For each item in rawData, check if it includes "valid" -
// if yes, move it to cleanData and replace "valid" with "verified". Insert "data-header"
//  at the beginning of cleanData. Remove the last item from rawData and add "processed-"
// prefix before adding to cleanData. Print the processing results.


let rawData: string[] = ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
let cleanData: string[] = []

if (rawData[0].includes("valid")) {
    cleanData.push(rawData.splice(0,1)[0].replace('vaild','verified'))
    if (rawData[0].includes("valid"))
        cleanData.push(rawData.splice(0,1)[0].replace('vaild','verified'))
    if (rawData[1].includes("valid"))
        cleanData.push(rawData.splice(1,1)[1].replace('vaild','verified'))
    if (rawData[1].includes("valid"))
        cleanData.push(rawData.splice(1,1)[1].replace('vaild','verified'))
}

console.log(cleanData)

cleanData.splice(0,0,"data-header")

cleanData.splice(0,0,("processed-"+ rawData.pop()))
