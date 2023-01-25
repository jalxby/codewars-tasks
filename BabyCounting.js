// You've had a baby.
//
// Well done. Nice isn't it? Life destroying... but in a good way.
//
// Part of your new routine is lying awake at night worrying that you've either lost the baby... or that you have more than 1!
//
// Given a string of words (x), you need to calculate how many babies are in it. To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.
//
//     Examples:
//
// "baby" = 1
// "abby" = 1
// "babybaby" = 2
// "Why the hell are there so many babies?!" = 1
// "Anyone remember life before babies?" = 1
// "Happy babies boom ba by?" = 2
// If there are no babies in the string - you lost the baby!! Return a different value, as shown below:
//
// 'none here' = "Where's the baby?!" '' = "Where's the baby?!"

function babyCount(x) {
    let arr = x.toLowerCase().split('')
    let a = 0
    let b = 0
    let y = 0
    let count = 0
    for (const i of arr) {
        if (i === 'b') {
            b++
        } else if (i === 'a') {
            a++
        } else if (i === 'y') {
            y++
        }
    }


    while (b >= 2 && a >= 1 && y >= 1) {
        b -= 2
        a -= 1
        y -= 1
        count++
    }
    if (count === 0) {
        return 'Where\'s the baby?!'
    } else {
        return (count)
    }
}

//console.log(babyCount('Happy babies boom ba by?'))
console.log(babyCount('byoqlyaGalJbAqdlyafagyAcJGkyNbS ybAapywyfGBagsuaaaaBvyhYluybaya NyvjvybwpiqctcdAybblsYszmBabbdt cyYdsJASsjlotyJYNayerauywbabhrm'))

console.log(babyCount('baby'))                                              // (babyCount('baby'), 1);
console.log(babyCount('abby'))                                              // (babyCount('abby'), 1);
console.log(babyCount('baby baby baby'))                                    // (babyCount('baby baby baby'), 3);
console.log(babyCount('Why the hell are there so many babies?!'))           // (babyCount('Why the hell are there so many babies?!'), 1);
console.log(babyCount('Anyone remember life before babies?'))               // (babyCount('Anyone remember life before babies?'), 1);
console.log(babyCount('Happy babies boom ba by?'))                          // (babyCount('Happy babies boom ba by?'), 2);
console.log(babyCount('b a b y'))                                           // (babyCount('b a b y'), 1);
console.log(babyCount(''))                                                  // (babyCount(''), 'Where\'s the baby?!');
console.log(babyCount('none here'))                                         // (babyCount('none here'), 'Where\'s the baby?!');
