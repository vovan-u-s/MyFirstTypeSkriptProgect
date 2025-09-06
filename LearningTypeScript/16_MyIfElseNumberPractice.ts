let thePrices:number= 330000
let theAreas:string= 'Woodstock'
if((thePrices<=300000 )&& ((theAreas==='Schaumburg')||(theAreas='Wheeling')||(theAreas ='Hoffman' ))){
 console.log('WE HAVE A DEAL')
 } else {
    console.log('We are walking away, bye')
}

let kitchen:string = 'Ukrainian'
let Borsch:boolean= true 
if(kitchen==='ukrainian'){
    console.log('we are considering it')
    if(Borsch ){
        console.log(' if it has borsch then we are going')
    }else{
        console.log('good kitchen but there is no borsch')
    }
}else{
    console.log('we are not going there because there is no borsch')
}

console.log("Bill for " + 2 + 3 + " items")


let enemyDefeated:number=8
let treasureCollected:number=12 
let lifeLost:number=1
let bonusNumber:number=4.5
let pointsOfDefeated:number=100
let pointsOFtreasure:number=50
let pointsOfLost:number=-200
let poitsOfBonus:number=200
console.log(((enemyDefeated*pointsOfDefeated)+(treasureCollected*pointsOfDefeated)+ (lifeLost*pointsOfLost)+(bonusNumber*poitsOfBonus)))



let perfectScore: number = 100;
let myScore: number = 95;
console.log('Did I get perfect score? ' + (perfectScore===myScore))


