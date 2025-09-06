// let commentData: string = 'Comment: [   Amazing work!!!   ] includes praise';
// let firstSign: number = commentData.indexOf('[')
// let secondSign: number = commentData.indexOf(']')
// let sign3: string = commentData.slice(firstSign + 1, secondSign)
// let sign4: string = sign3.trim()
// console.log(sign4)
// if (sign4.includes('!!!')) {
//     if ((commentData.includes('praice'))) {
//         console.log("Excited Praise")
//     } else {
//         console.log("Excited comment")
//     }
// } else if ((commentData.includes('good'))) {
//     if (commentData.includes('work')) {
//         console.log("Positive  work Comment")
//     } else {
//         console.log("Positive  Comment")
//     }


// } else {
//     console.log("Neutral Comment")
// }

let fileData: string = 'File: [document.pdf] size: [2.5MB] includes backup';
let data1: number = fileData.lastIndexOf(':')
let data2: number = fileData.lastIndexOf(']')
let newData: string = fileData.slice(data1 + 3, data2)
let newData2: string = newData.replace('MB', '')
let newDataNumber: number = parseFloat(newData2)
console.log(newData2)
if (newDataNumber > 1.0) {
    if (newDataNumber > 5.0) {
        console.log("Large File with Backup")
    } else {
        console.log("Medium File with Backup")
    }
} else if (newDataNumber > 5.0) {
    if (fileData.includes('backup')) {
        console.log("Small File with Backup")
    } else {
        console.log("Small File")
    }
} else {
    console.log("Tiny File")
}

let ratingData: string = 'Rating: [4.8] reviews: [127] includes verified';
let rating1: string = ratingData.slice(ratingData.indexOf('[') + 1, ratingData.indexOf(']'))
let reviews1: string = ratingData.slice(ratingData.lastIndexOf('[') + 1, ratingData.lastIndexOf(']'))
let ratingNumber: number = parseFloat(rating1)
let revievsNumber: number = parseFloat(reviews1)

if (ratingNumber > 4.5) {
    if (revievsNumber > 100) {
        console.log( "Excellent High-Volume Rating")
    } else {
        console.log("Excellent Rating")
    }


} else if (ratingNumber > 4.0) {
    if (ratingData.includes('verified')) {
        console.log( "Good Verified Rating")
    } else {
        console.log("Good Rating")
    }
} else {
    console.log("Average Rating")
}






