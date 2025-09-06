// let myLoop: string[] = ['bikes', 'cars', 'girls']
// for (let i = 0; i < 3; i++) {
//     console.log('i love  ' + i)
// }


// for (let i = 0; i < 7; i++) {
//     console.log('day number = ' + i)
// }


// for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
//     console.log('Today is - ' + dayOfMonth)
// }




// let cars[] = []
// for (let i = 0; i < 6; i++) {
// }




let daysOfTheWeek: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
for (let i = 0; i < daysOfTheWeek.length; i++) {


    if (daysOfTheWeek[i] === 'tuesday') {
        console.log(daysOfTheWeek[i])
    } else {
        console.log('soory its not')
    }

}

// we are going to the dealer
// 
// if the current car is starting with 'Porsche'
// then print 'This is what I am looking for Porsche Taycan'
//



let inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
for (let i = 0; i < (inventory.length); i++) {
    if (inventory[i].startsWith('Porsche')) {
        console.log('This what im looking for-' + inventory[i])
    }
}

let age = [15, 16, 77, 99, 29, 18, 21]
for (let i = 0; i < (age.length); i++) {
    if (age[i] >= 21) {
        console.log('Welcome ' + (age[i]))
    } else if (age[i] >= 18) {
        console.log('you can came but you cant drink ' + (age[i]))
    } else {
        console.log('Bugger off, get out! ' + (age[i]))
    }

}

// I have 
// check every fruit and if it's including letter 'a'
// we are eating that fruit
// otherwise we are throwing it to trash

let fruitsString = 'cherry,orange,mango,banana'

let arraySrting = fruitsString.split(',')

console.log(arraySrting)

for (let i = 0; i < (arraySrting.length); i++) {
    if (arraySrting[i].includes('a')) {
        console.log('we are eating this fruit' + arraySrting[i])
    } else {
        console.log('go to trash' + arraySrting[i])
    }
}


//HOMEWORK
// We have fruits stored as a comma-separated string

// Your mission:
// You need to examine each fruit individually
// For fruits that contain the letter 'a' → display "EATING: [fruit name]"
// For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"
// Think about:
// - How can you work with each fruit separately?
// - How can you check every fruit one by one?
// - How can you determine if a fruit contains a specific letter?


let fruits: string = 'apple,kiwi,mango,pear';
let arrayMaking = fruits.split(',')

for (let i = 0; i < arrayMaking.length; i++) {
    if (arrayMaking[i].includes('a')) {
        console.log('eating: ' + arrayMaking[i])
    } else {
        console.log('THROWING AWAY: ' + arrayMaking[i])
    }
}


// We have drinks stored as a comma-separated string

// Your mission:
// You need to examine each drink and categorize them with these priorities:
// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"
// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]"
// - Everything else → display "SKIPPING: [drink name]"
// Think about:
// - How can you work with each drink separately?
// - How can you check multiple conditions in order of importance?
// - How can you determine what letter a word begins with?
// - What happens when a drink matches multiple conditions?

let drinks: string = 'cola,water,tea,juice,milk';
let myDrinksList = drinks.split(',')
for (let i = 0; i < myDrinksList.length; i++) {
    if (myDrinksList[i].includes('a')) {
        console.log('DRINKING: ' + myDrinksList[i])
    } else if (myDrinksList[i].startsWith('j')) {
        console.log('TASTING: ' + myDrinksList[i])

    } else {
        console.log('SKIPPING: ' + myDrinksList[i])
    }
}



// I am checking cars
// 
// check every single car -> loop
// check the current car -=> dynamic if
// and if the current car is what I am looking for 'Porsche'-> if true
// then I save -> push, splice
// What I saved = []
// How many cars I saved





let carsOnline = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
let savedCars: string[] = []
for (let i = 0; i < (carsOnline.length); i++) {
    if (carsOnline[i].includes('GTR')) {
        savedCars.push(carsOnline[i])
    }
}
console.log(savedCars)
console.log(savedCars.length)


// // if my current vacation place is 'Ukraine'
// // add it to my saved place
// let vacationPlaces = ['Hawaii', 'Porte rico', 'Ukraine', 'Poland']
// let mySavedPlaces: string[] = []
// while (vacationPlaces.length > 0) {
//     let currentPlace: string = vacationPlaces.pop()
//     if (currentPlace.includes('Ukraine')) {
//         mySavedPlaces.push(currentPlace)
//     }
// }

// console.log(mySavedPlaces)


// we are checking clothes.
// if the current clothe is red add it to cart
let clothes = ['red dress', 'blue shirt', 'white socks', 'black glasses']
let myClothCart: string[] = []

while (clothes.length > 0) {
    let currentClose = clothes.pop()
    if (currentClose?.includes('red')) {
        myClothCart.push(currentClose)
    }
}
console.log(myClothCart)




// We'll keep unpacking until the box is empty
// if the item includes 'e' then print
// console.log("KEEPING: " + item);
// else
// console.log("DISCARDING: " + item);


let box: string[] = ['notebook', 'pen', 'eraser', 'marker', 'stapler'];
while (box.length > 0) {
    let theCurentBox = box.pop()
    if (theCurentBox?.includes('e')) {
        console.log("KEEPING: " + theCurentBox)
    } else {
        console.log("DISCARDING: " + theCurentBox)
    }
}


// We have a pile of toys (last item is on top)
// We'll keep unpacking until the pile is empty
// If the toy starts with 'p' then print
// console.log("SAVING: " + toy);
// else
// console.log("GIVING AWAY: " + toy);


let toys: string[] = ['car', 'doll', 'puzzle', 'ball', 'robot'];
while (toys.length > 0) {
    let currentToy = toys.pop()
    if (currentToy?.includes('t')) {
        console.log("SAVING: " + currentToy)
    } else {
        console.log("GIVING AWAY: " + currentToy)
    }
}



// We'll keep unpacking until the stack is empty
// If the item length is more than 4 then print
// console.log("FOLDING: " + item);
// else
// console.log("DONATING: " + item);




// let clothes: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
// while (clothes.length > 0) {
//     let printClosez = clothes.pop()!

//     if (printClosez.length > 4) {
//         console.log("FOLDING: " + printClosez)

//     } else {
//         console.log("DONATING: " + printClosez)
//     }
// }


// // Example 4: stationery

// Unpack until empty
// If item ends with 'r' → console.log("KEEPING: " + item)
// else → console.log("THROW ING: "+ item);



let stationery: string[] = ['pencil', 'eraser', 'marker', 'notebook', 'ruler'];

while (stationery.length > 0) {
    let currentStationery = stationery.pop()
    if (currentStationery?.endsWith('r')) {
        console.log("KEEPING: " + currentStationery)
    } else {
        console.log("THROWING: " + currentStationery)
    }
}

// Example 3: books

// Unpack until empty
// If item includes letter 'a' → console.log("READING: " + item)
// else → console.log("IGNORING: " + item);


let books: string[] = ['Math', 'History', 'Art', 'Science', 'Poetry'];

while (books.length > 0) {
    let currentBook = books.pop()
    if (currentBook?.includes('a')) {
        console.log("READING: " + currentBook)
    } else {
        console.log("IGNORING: " + currentBook)
    }
}



// Unpack until empty
// If item starts with 'h' OR ends with 't' → console.log("CUDDLING: " + item)
// else → console.log("WATCHING: " + item);
let pets: string[] = ['cat', 'parrot', 'hamster', 'dog', 'turtle'];
while (pets.length > 0) {
    let currentPet = pets.pop()!
    if (currentPet?.startsWith('h') || currentPet?.endsWith('t')) {
        console.log("CUDDLING: " + currentPet)
    } else {
        console.log("WATCHING: " + currentPet)
    }
}




// fori loop
// if the current snack is ending with 's' count it

let snacks: string[] = ['chips', 'cookie', 'nuts', 'candy', 'pretzel'];
let number: number = 0;
for (let i = 0; i <snacks.length; i++) {
    if (snacks[i].endsWith('s')) {
        number++
    }
}
console.log(number)


