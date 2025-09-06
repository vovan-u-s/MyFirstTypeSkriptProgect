
// count the people who are sleepy
// if the current person is 'Vova' || 'Dima' || "Tania"
// count it
// when the loop is finished
// print '3 amazing people came even though they were tired!'

import { clearScreenDown } from "readline"





let classroom: string[] = ['Vova', 'Dima', "Tania", 'Alina', 'Artem', 'Anna']
let count = 0
for (let i = 0; i < classroom.length; i++) {

    if (classroom[i].includes('Vova') || classroom.includes('Dima') || classroom.includes("Tania")) {
        console.log('Tired people are- ' + classroom[i])
        count++
    }

}

