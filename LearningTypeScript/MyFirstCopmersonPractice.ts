let myAge:number = 30
let partnerAge: number = 28
console.log( 'is im older than my partner    ' + ( myAge > partnerAge))

let myZeroToSixty: number = 4.2
let acceptableFastSeconds: number = 3.7
console.log(acceptableFastSeconds > myZeroToSixty)
console.log(acceptableFastSeconds > myZeroToSixty)

let acceptableGrade: number = 85
let grade: number = 32
console.log( acceptableGrade <= grade )


let acceptiblePrice: number = 2000
let ourPrice: number = 2001
console.log(ourPrice <= acceptiblePrice )

///let monthInYear: number = 12
//let myYearlyIncome: number = myMontlyIncome * monthInYear
//console.log( 'My yearly income is $ ' + (myMontlyIncome * monthInYear) )
//console.log('My yearly income is $ ' + myYearlyIncome )

//let myDayliIncome: number = 345.2
//let monthInYear: number = 12
//let daysInMonth: number =30
//let myYearlyIncome: number = (monthInYear * daysInMonth) * myDayliIncome
//console.log( 'My yearly income is $ ' + (monthInYear * daysInMonth) * myDayliIncome)
//console.log('My yearly income is $ ' + myYearlyIncome )

let myYearlyIncome: number =200000 
let monthInYear: number = 12
let daysInMonth: number =30
let myDayliIncome: number =( myYearlyIncome / (monthInYear * daysInMonth))
console.log('My dayli income is $ ' +  myYearlyIncome / (monthInYear * daysInMonth))
console.log('My dayli income is $ ' +(myDayliIncome ) )


let acceptablePullups: number =25
let actualPullups: number = 50
let passed: boolean = acceptablePullups <= actualPullups
console.log ('I passed the test ' + passed)

let acceptableHeat:number = 80
let nidDayHeat: number = 84
let morningHeat: number = 70
let nightHeat: number = 60

console.log('is outside cool enough = ' +  (acceptableHeat > morningHeat))
console.log('is outside cool enough = ' +  (acceptableHeat > nightHeat))
