// ==================================task #dFeorS3m7u======================================


// let stringLength =(items) =>{
//   for (let listElement of items) {
//     console.log('element №',items.indexOf(listElement)+1,'length =', listElement.length)
//   }
// }
//
// let listStr = ['hello world', 'lorem ipsum', 'javascript is cool']
// stringLength(listStr)


// ==================================task #8lld9HMxXWB======================================


// let stringToUp = (items) =>{
//   for (let item of items) {
//     console.log('element №',items.indexOf(item)+1, '=', item.toUpperCase())
//   }
// }
//
// let listStr = ['hello world', 'lorem ipsum', 'javascript is cool']
// stringToUp(listStr)


// ==================================task #ClDsAm7xba7======================================


// let stringToLow = (items) =>{
//   for (let item of items) {
//     console.log('element №',items.indexOf(item)+1, '=', item.toLowerCase())
//   }
// }
//
// let listStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// stringToLow(listStr)


// ==================================task #0b89BkYZwu======================================


// let str = ' dirty string   '
// console.log(str.trim());
// знайшов в інтернеті таку функцію


// ==================================task #bfoJuse4ZzP======================================


// let stringToarray =(str)=>{
//   console.log(str.split(' '));
// }
//
// let str = 'Ревуть воли як ясла повні';
// stringToarray(str);


// ==================================task #Rbr5kEQ======================================


// let numbers = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(numbers.map(num => `${num}`));


// ==================================task #5hqyKTfmc======================================


// let sortNums = (array, direction) => {
//   if (direction === 'ascending') {
//     console.log(array.sort((a, b) => a - b));
//   }
//   else if (direction === 'descending') {
//     console.log(array.sort((a, b) => b - a));
//   }
// }
//
// let nums = [11, 21, 3];
// sortNums(nums, 'ascending')
// sortNums(nums, 'descending')


// ==================================task #yo06d74c1C======================================


// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortCourses = coursesAndDurationArray.sort((a,b)=>{
//   return b.monthDuration - a.monthDuration
// })
// console.log(sortCourses)
//
// let filterCourses = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filterCourses)
//
// let mappedCourses = coursesAndDurationArray.map((value, index) => {
//   return {id: index + 1, tittle: value.tittle, monthDuration: value.monthDuration}
// })
// console.log(mappedCourses)


// ==================================task #bolvdlhP======================================


// let suits = ['spade', 'diamond', 'heart', 'clubs']
// let values = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
// let colors = ['red', 'black']
//
//
// let deck = []
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value}
//         if (suit === 'spade' || suit === 'clubs'){
//             card.color = 'black'
//         }
//         else{
//             card.color = 'red'
//         }
//         deck.push(card)
//     }
// }
//
// function cardFinder(deck, callback) {
//     return deck.filter(callback)
// }
// console.log('Піковий туз')
// console.log(cardFinder(deck, card => card.value === 'A' && card.cardSuit === 'spade'))
//
// console.log('всі шістки')
// console.log(cardFinder(deck, card => card.value === 6))
//
// console.log('всі червоні')
// console.log(cardFinder(deck, card => card.color === 'red'))
//
// console.log('всі піки')
// console.log(cardFinder(deck, card => card.cardSuit === 'diamond'))
//
// console.log('всі хрести більші за 9')
// console.log(cardFinder(deck, card => card.cardSuit === 'clubs' && (typeof card.value === 'number' ? card.value > 9 : true)))


// ==================================task #EP5I1UUzAX======================================


// let suits = ['spade', 'diamond', 'heart', 'clubs']
// let values = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
// let colors = ['red', 'black']
//
//
// let deck = []
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value}
//         if (suit === 'spade' || suit === 'clubs'){
//             card.color = 'black'
//         }
//         else{
//             card.color = 'red'
//         }
//         deck.push(card)
//     }
// }
//
// console.log(deck.reduce((accumulator, card) => {
//     if (card.cardSuit === 'spade'){
//         accumulator.spades.push(card)
//     }
//     else if (card.cardSuit === 'diamond'){
//         accumulator.diamonds.push(card)
//     }
//     else if (card.cardSuit === 'heart'){
//         accumulator.hearts.push(card)
//     }
//     else if (card.cardSuit === 'clubs'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// }, {spades: [], diamonds: [], hearts: [], clubs: []}))


// ==================================task #4LJn7zBx======================================


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// function courseFinder(list,callback){
//     return list.filter(callback)
// }
//
// console.log(courseFinder(coursesArray, course => {
//     if (course.modules.includes('sass')){
//         return course
//     }
// }));
//
// console.log(courseFinder(coursesArray, course => {
//     if (course.modules.includes('docker')){
//         return course
//     }
// }));
