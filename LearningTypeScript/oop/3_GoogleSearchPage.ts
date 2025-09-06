// // // // import { NumberLiteralType } from "typescript"

// // import { strict } from "assert"

// // // // class WayfairHomePage {
// // // //     cartCheckingStatus: string = 'Cart is empty'
// // // //     searchingString(searchingText: string): string[] {
// // // //         let searchResults: string[] = []
// // // //         if (searchingText === 'chair') {
// // // //             console.log('we are found your' + searchingText)
// // // //         } else if (searchingText === 'couch') {
// // // //             console.log('we are found your' + searchingText)
// // // //         }
// // // //         return searchResults
// // // //     }
// // // //     loginPage(username: string, password: string): void {
// // // //         if (username.length < 3) {
// // // //             console.log('Bad username!')
// // // //         } else {
// // // //             console.log('Good username!')
// // // //         }
// // // //         if (password.length < 8) {
// // // //             console.log('Bad password!')
// // // //         } else {
// // // //             console.log('Good password!')
// // // //         }
// // // //     }
// // // // }

// // // // // Create a class called 
// // // // // Add three properties for validation:
// // // // // - yourNameHere : string = 'Sign In to Cars.com'
// // // // // - yourNameHere : string = 'Invalid username or password'
// // // // // - yourNameHere : string = 'Welcome to Cars.com!'
// // // // // 1. navigateToLoginPage(): void - prints 'Navigating to Cars.com login page...'
// // // // // 2. enterCredentials(username: string, password: string): void
// // // // //    - prints 'Entering username: ' + username
// // // // //    - prints 'Entering password: ' + password
// // // // // create a copy of the class and store it
// // // // // call methods and print the variables


// // // // class CarsLoginTestPage {
// // // //     titleMessage: string = 'Sign In to Cars.com'
// // // //     errorMessage: string = 'Invalid username or password'
// // // //     greetengMessage: string = 'Welcome to Cars.com!'
// // // //     navigateToLoginPage(): void {
// // // //         console.log('Navigating to Cars.com login page...')
// // // //     }
// // // //     enterCredentials(username: string, password: string): void {
// // // //         console.log('Entering username: ' + username)
// // // //         console.log('Entering password: ' + password)
// // // //     }
// // // // }
// // // // let copyOfCarsLogin = new CarsLoginTestPage()

// // // // copyOfCarsLogin.enterCredentials('vova', '1234556')
// // // // copyOfCarsLogin.navigateToLoginPage()
// // // // copyOfCarsLogin.titleMessage


// // // // class NetflixTestHomePage {
// // // //     homepageTitle: string = "Netflix - Watch TV Shows Online, Watch Movies Online"
// // // //     videoQualitySetting: number = 1080
// // // //     allowedProfiles: number = 10
// // // //     navigatingPage(): void {
// // // //         console.log('loading Netflix homepage')
// // // //     }
// // // //     mountlyWieviengTime(daillyHours: number, daysInTheMonts: number): number {
// // // //         return daillyHours * daysInTheMonts
// // // //     }
// // // //     contentFilter(desiredGenre: string, minimumRating: NumberLiteralType)string[]{
// // // //     let genreArray: string[] = ["action-Avengers-4.5", "comedy-Friends-4.8", "action-Batman-4.2",
// // // //         "drama-Crown-4.9", "comedy-Office-4.7", "action-Matrix-4.6", "drama-Stranger-4.4", "comedy-Parks-4.3"]
// // // //     let filteredMovie: string[] = []
// // // //     for (let i = 0; i < genreArray.length; i++) {
// // // //         let currentGenreArray: string[] = genreArray[i].split('-')
// // // //         let currentMovieGenre = currentGenreArray[0]
// // // //         let currentMovieRating = currentGenreArray[2]
// // // //         if (desiredGenre === currentMovieGenre && minimumRating <= currentMovieRating) {

// // // //         }
// // // //     }
// // // //     return
// // // // }

// // // // }

// // // class LinkedHomeTestPage {
// // //     expectedHomepage: string = "LinkedIn - The World's Largest Professional Network"
// // //     maximumConnections: number = 50000
// // //     minimumProfileCompletenessPercentage: number = 85
// // //     navigatingToProfessionalDasboard(): void {
// // //         console.log('loading LinkedIn dashboard')
// // //         console.log(' professional network loaded successfully')
// // //     }
// // //     networkingScore(totalConnections: number, profileViews: number): number {
// // //         return (totalConnections / 100) + (profileViews * 2)
// // //     }
// // //     filterForTheJob(desireIndustry: string, expirienceYears: number): string[] {
// // //         let typeOfJobs: string[] = ["tech-Software Engineer-3", "finance-Investment Analyst-2", "tech-Product Manager-5", "healthcare-Nurse-1",
// // //             "finance-Financial Advisor-4", "tech-Data Scientist-6", "marketing-Brand Manager-2", "tech-DevOps Engineer-4"]
// // //         let filteredJobs: string[] = []
// // //         for (let i = 0; i < typeOfJobs.length; i++) {
// // //             let currentJob = typeOfJobs[i].split('-')
// // //             let theDesirePart = currentJob[0]
// // //             let theCurrentJobName = currentJob[1]
// // //             let theExpiriencePart = parseFloat(currentJob[2])
// // //             if (theDesirePart === desireIndustry && theExpiriencePart >= expirienceYears) {
// // //                 console.log(filteredJobs.push(theCurrentJobName))
// // //             }
// // //         }
// // //         return filteredJobs
// // //     }

// // // }
// // // let NewLinkedHomeTestPage = new LinkedHomeTestPage()

// // // console.log(NewLinkedHomeTestPage.filterForTheJob('tech', 2))


// class BookingComHomeTestPage {
//     homepageTitle: string = ("Booking.com - Official Site - The Best Hotels & Accommodations")
//     maximumReservation: number = 5
//     minimumPropertyReview: number = 8.0

//     hotelSearchDashboard(): void {
//         console.log('loading Booking.com hotel search dashboard')
//         console.log('loaded already')
//     }
//     costWithTaxes(rateRoomPerNight: number, numberOfNights: number): string[] {
//         let totalCost: number = ((rateRoomPerNight * numberOfNights) + (rateRoomPerNight * numberOfNights * 0.12) + 25)
//         return totalCost

//     }
//     filterHotelsByStars(starRating: number, maximumPricePerNight): string[] {
//         let hotelList = ["4-Grand Plaza Hotel-180", "3-City Center Inn-120", "5-Luxury Resort Spa-250", "3-Budget Comfort Lodge-95",
//             "4-Business Executive Suite-160", "5-Premium Ocean View-220", "2-Economy Travel Motel-75", "4-Historic Boutique Hotel-140"]
//         let filteredHotels: string[] = []
//         for (let i = 0; i < hotelList.length; i++) {
//             let splitedList = hotelList[i].split('-')
//             let hotelListPrice = parseFloat(splitedList[2])
//             let hotelListStars = parseFloat(splitedList[0])
//             let hotelListName = splitedList[1]
//             if (starRating <= hotelListStars && maximumPricePerNight >= hotelListPrice) {
//                 console.log(filteredHotels.push(hotelListName))
//             }
//         }

//         return filteredHotels
//     }


// }
// propertiesByAmenities(requiredAmenity: string, cancellationFlexibility: string): string[] {
//     let listOfAmenitiesHotelsCanseletoins: string[] = ["wifi-Downtown Business Hotel-free", "pool-Resort Paradise-partial", "gym-Fitness Center Lodge-free", "wifi-Tech Hub Hotel-strict",
//         "pool-Tropical Getaway-free", "gym-Active Lifestyle Inn-partial", "wifi-Digital Nomad Suite-free", "pool-Family Fun Resort-strict"]
//     let filteredProperties: string[] = []
//     for (let i = 0; i < listOfAmenitiesHotelsCanseletoins.length; i++) {
//         let currentProperties = listOfAmenitiesHotelsCanseletoins[i].split('-')
//         if (requiredAmenity === currentProperties[0]) {
//             if (cancellationFlexibility === 'strict') {
//                 filteredProperties.push(currentProperties[1])
//             } else if (cancellationFlexibility === 'partial' && ['free', 'partial'].includes(currentProperties[2])) {
//                 filteredProperties.push(currentProperties[1])
//             } else if (cancellationFlexibility === 'free' && currentProperties[2] === 'free') {
//                 filteredProperties.push(currentProperties[1])

//             }

//         }
//     }


//     return filteredProperties
// }













