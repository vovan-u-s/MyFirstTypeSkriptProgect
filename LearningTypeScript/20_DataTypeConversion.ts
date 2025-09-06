// let myAge: number = 18 ////number to string
// let myStringAge: string = myAge.toString()
// let myString2: string = '' + myAge
// let myString3: string = String(myAge)
// console.log(myString2)

// //string to number
// let stringNumber: string = '499'
// let numberVersion: number = Number(stringNumber)

// let numberVersion2: number = parseInt(stringNumber)

// let numberVersion3: number = parseFloat(stringNumber)



// // let priceOfTheCar:string= '1000.88'
// // let priceInNumber:number=parseFloat(priceOfTheCar)
// // console.log(priceInNumber)


// // let purpleMatress:string= '499'
// // let purlePillow:string= '59'
// // let webAppTotal:string='999'

// // let theNumberPurpleMatress:number=parseFloat(purpleMatress)
// // let theNumberPurplePillow:number=parseFloat(purlePillow)
// // let theNumberWebTotal:number=parseFloat(webAppTotal)

// // if((theNumberPurpleMatress+theNumberPurplePillow)===theNumberWebTotal){
// //     console.log('Total calculation is RIGHT.')

// // }else{
// //     console.log('Total calculation FAILED')
// // }

// let purpleMattress: string = 'Price: $499.99 USD'
// let purplePillow: string = 'Cost: $59.99 USD'
// let totalIs: string = 'Total Amount: $559.98 USd'
// let numberPrice: number = parseFloat(purpleMattress.slice(9, 15))
// let numberPurplePillow: number = parseFloat(purplePillow.slice(8, 13))
// let numberTotalsIs: number = parseFloat(totalIs.slice(16, 22))
// if ((numberPrice + numberPurplePillow) === numberTotalsIs) {
//     console.log('Total calculation is RIGHT.')

// } else {
//     console.log('Total calculation FAILED')

// }



// let netflixPrice: string = '13.99'
// let disneyCost: string = '17.99'
// let youTube: string = '22.99'

// if (parseFloat(netflixPrice) > 15) {
//     console.log('We are canceling you.')
// } else {
//     console.log('We will keep it.')
// }
// if (parseFloat(disneyCost) > 15) {
//     console.log('We are canceling you.')
// } else {
//     console.log('We will keep it.')
// }
// if (parseFloat(youTube) > 15) {
//     console.log('We are canceling you.')
// } else {
//     console.log('We will keep it.')
// }


// let porsche1: string = '53999.99'
// let porsche2: string = '52999.99'
// if (parseFloat(porsche1) < 55000.00) {
//     console.log( 'we are buying you')
// } else {
//     console.log('deal is off')
// }
// if (parseFloat(porsche2) > 55000.00) {
//     console.log( 'we are buying you')
// } else {
//     console.log('deal is off')
// }



let list:string[]=[]
let firstItem=list.push('apple')
console.log('Now i have ' +firstItem + ' fruits')
let secondItem=list.push('banana')
console.log('Now i have ' +secondItem+ 'fruits')
let removedFruit=list.pop()
console.log(removedFruit)