// // class PurpleHomePage{
// // homePageMessage:string= 'Less pain. Better sleep.'

// // clickingOnTheShopButton():void{
// //     console.log(homePageMessage)
// // }



// // }

// class PurpleMattressMainPage {
//     titleOfTheMainPage: string = 'Sleep your pain away'
//     smallMessageUnderTitle: string = ' Every Purple mattress uses our patented GelFlex Grid to reduce your aches and pains by 40%'
//     clickingButtonOfTheNextPage(): void {
//         console.log('Page number 2')
//     }
//     checkingTheCart(): void {
//         console.log('Cart is empty')
//     }


// }



// class  AmazonSearchPage{

// mainPage:string='Amazon'
// searchForProduct(productName: string):void{
// console.log('Searching for '+this.mainPage)
// }


// }
//homework
class LinkedInNetworkPage {
    expectedHomepage: string = "LinkedIn - Professional Networking Platform"
    maximumConnectionRequestsPerDay: number = 100
    minimumProfileCompletionPercentage: number = 92.3
    profilesWithNamesStartingWith(namesArray: string[], startingLetter: string): string[] {
        let matchingProfiles: string[] = []
        for (let i = 0; i < namesArray.length; i++) {
            if (namesArray[i].charAt(0).toUpperCase() === startingLetter.toUpperCase()) {
                matchingProfiles.push(namesArray[i])
            }
        }
        return matchingProfiles

    }

}

let NewLinkedHomeTestPage = new LinkedInNetworkPage()
console.log(NewLinkedHomeTestPage.expectedHomepage)
console.log(NewLinkedHomeTestPage.maximumConnectionRequestsPerDay)
console.log(NewLinkedHomeTestPage.minimumProfileCompletionPercentage)
console.log(NewLinkedHomeTestPage.profilesWithNamesStartingWith(["Alice Johnson", "Bob Smith", "Charlie Brown", "Anna Davis", "Edward Norton"], "a"))

class AmazonSearchTestPage {
    expectedHomepage: string = "Amazon - Online Shopping for Electronics, Apparel, Computers, Books"
    maximumItemsInAShopingCart: number = 100
    minimumProductRating: number = 4.5
    productsWithNamesEnding(productNames: string[], endingWord: string): string[] {
        let matchingProductArray: string[] = []
        for (let i = 0; i < productNames.length; i++) {
            let separatedProductNames = productNames[i].split(' ')
            console.log(separatedProductNames)
            let lastSeparatedProduct = separatedProductNames[separatedProductNames.length - 1]
            if (lastSeparatedProduct.toLowerCase() === endingWord.toLowerCase()) {
                matchingProductArray.push(productNames[i])
            }
        }


        return matchingProductArray
    }
}


class InstagramProfileTestPage {

    expectedHomepage: string = "Instagram - Share Your Story"
    maximumPosts: number = 15
    minimumFollower: number = 4.1

    hashtagsWithSpecificLength(hashtagsArray: string[], minimumLength: number): string[] {
        let matchingHashtags: string[] = []
        for (let i = 0; i < hashtagsArray.length; i++) {
            let hashtagsLenght = hashtagsArray[i].length
            if (minimumLength <= hashtagsLenght)
                matchingHashtags.push(hashtagsArray[i].toUpperCase())
        }

        return matchingHashtags
    }

}
let NewInstagramProfileTestPage = new InstagramProfileTestPage()
console.log(NewInstagramProfileTestPage.hashtagsWithSpecificLength(["#art", "#photography", "#food", "#lifestyle", "#tech"], 6))


class TwitterFeedTestPage {
    expectedHomepage: string = "Twitter - What's Happening"
    maximumTweets: number = 500
    minimumRetweet: number = 2.3

    usernamesThatStartAndEndWith(usernamesArray: string[], startingCharacter: string, endingCharacter: string): string[] {
        let matchingUsernames: string[] = []
        for (let i = 0; i < usernamesArray.length; i++) {
            if ((usernamesArray[i].charAt(0) === startingCharacter) && (usernamesArray[i].charAt(usernamesArray[i].length - 1) === endingCharacter)) {
                matchingUsernames.push(usernamesArray[i].replace('@', ''))

            }
        }

        return matchingUsernames

    }
}
let NewTwitterFeedTestPage = new TwitterFeedTestPage()
console.log(NewTwitterFeedTestPage.usernamesThatStartAndEndWith(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e"))

























