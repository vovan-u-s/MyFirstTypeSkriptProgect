let isButtonVissible:boolean = true 
let isButtonContainingHello: boolean = true

//and at the same time logical operators 
// = &&   or = ||, not = !

let availibilityOfTheCar: boolean = true
let fuelInTheTank: boolean = true
console.log(availibilityOfTheCar && fuelInTheTank)

let moneyOnTheBAnk: boolean = true
let cardIsActivated: boolean = true
console.log(moneyOnTheBAnk && cardIsActivated)

let porscheAtDealership: boolean = false
let bmwAtDealership: boolean = true
console.log( 'Do i buy something  ' + (porscheAtDealership || bmwAtDealership))

let denysOpen: boolean = true
let wendysOpen: boolean = false
console.log(' im eat somehting today '  + (denysOpen || wendysOpen))


