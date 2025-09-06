// // let batteryInfo: string = 'Battery: [87%] Status: Charging'
// // let theFirstTag: number = batteryInfo.indexOf('[')
// // let theSecondTag: number = batteryInfo.indexOf('%')
// // let procentInfo: string = batteryInfo.slice(theFirstTag + 1, theSecondTag)
// // let numberOfProcent: number = parseFloat(procentInfo)
// // if (numberOfProcent >= 90) {
// //     console.log("Battery is healthy")
// // } else if (numberOfProcent >= 70) {
// //     console.log("Battery is okay")

// // } else {
// //     console.log("Battery needs attention")
// // }

// // let shippingBox: string = 'Weight: [12.5kg] includes fragile items';
// // let number1:number=shippingBox.indexOf('[')
// // let number2:number= shippingBox.indexOf('kg')
// // let positionOfWeight:string=shippingBox.slice(number1+1,number2)
// // let goodWeight:number=parseFloat(positionOfWeight)
// // if( shippingBox.includes('fragile')&&goodWeight<=15){
// //    console.log("Handle with care")
// // }else if(goodWeight>20){
// //   console.log("Heavy load, additional charges apply")
// // }else{
// //    console.log("Standard shipping")
// // }


// let transactionLog: string = 'Transaction: [$1,250] Status: Completed';
// let firstLetter: number = transactionLog.indexOf('$')
// let secondLetter: number = transactionLog.indexOf(']')
// let goodNumber: string = transactionLog.slice(firstLetter + 1, secondLetter)
// let newGoodNum: string = goodNumber.replace(',', '')
// let myNumberGood: number = parseFloat(newGoodNum)
// console.log(myNumberGood)
// if ((myNumberGood >= 1000) && (myNumberGood <= 5000)) {
//     console.log("High Value Transaction")
// } else if (myNumberGood < 1000) {
//     console.log("Standard Transaction")
// } else {
//     console.log("Check Transaction")
// }

// let jobDescription: string = 'Role: [Senior QA Automation Engineer] Location: Remote';
// let firstSign: number = jobDescription.indexOf('[')
// let secondSign: number = jobDescription.indexOf(']')
// let goonSign: string = jobDescription.slice(firstSign + 1, secondSign)
// console.log(goonSign)
// if (goonSign.startsWith('Senior') && goonSign.includes('Automation ')) {
//     console.log("High-level Automation Role")
// } else if (goonSign.includes('QA')) {
//     console.log("QA Role")
// } else {
//     console.log("Other Role")
// }

let storageData: string = 'Storage: [92%] includes backups';
let wordStart: number = storageData.indexOf('[')
let worldEnd: number = storageData.indexOf('%')
let neededWord: string = storageData.slice(wordStart + 1, worldEnd)
let ourNumber: number = parseFloat(neededWord)
if (ourNumber >= 90) {
    if (storageData.includes('backups')) {
        console.log("Critical: Backups consuming space")
    } else {
        console.log("Critical: Free up space")
    }
} else if (ourNumber >= 75) {
    console.log("Warning: High usage")
} else {
    console.log("Normal usage")
}

let labelData: string = 'Label: [ Express  -  Fragile ] includes insurance';
let label1: number = labelData.indexOf('[')
let label2: number = labelData.lastIndexOf(']')
let label3: string = labelData.slice(label1 + 1, label2)
let label4: string = label3.trim()
// let label5: string = label4.replace('-', '')
// let label6: string = label5.trim()
let label7: string = label4.replaceAll('  ', '')
console.log(label7)
if (label7.startsWith('Express')) {
    if (label7.includes("Fragile")) {
        console.log("Express Fragile Shipping")
    } else {
        console.log("Express Shipping")
    }
} else if (label7.includes("insurance")) {
    console.log("Standard Shipping with Insurance")

} else {
    console.log("Standard Shipping")
}


