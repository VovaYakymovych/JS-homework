// ==================================task #XjJuucOMR0======================================


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// for (let i = 1; i <= 10; i++) {
//     users.push(new User(
//         i,
//         `Name${i}`,
//         `Surname${i}`,
//         `user${i}@gmail.com`,
//         `+38097123456${i}`
//     ));
// }
// console.log(users);
//
//
// // ==================================task #2ikXsE2WiKZ======================================
//
//
// console.log(users.filter(value => value.id % 2 === 0));
//
//
// // ==================================task #pOeHKct======================================
//
// // // зробив по спаданню, бо початково і так відсортовані за зростанням
// console.log(users.sort((a, b) => {
//     return b.id - a.id
// }));


// ==================================task #nkMXISv======================================

// function Client(id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order
// }
//
// let clients = [];
//
// for (let i = 1; i <= 10; i++) {
//     let orderSize = Math.floor(Math.random() * 5) + 1;
//     let order = [];
//
//     for (let j = 1; j <= orderSize; j++) {
//         order.push(`Product${j}`);
//     }
//
//     clients.push(new Client(
//         i,
//         `Name${i}`,
//         `Surname${i}`,
//         `client${i}@gmail.com`,
//         `+38097123456${i}`,
//         order
//     ));
// }
// console.log(clients);
//
// // ==================================task #8abtVjRv======================================
//
//
// console.log(clients.sort((a, b) => a.order.length - b.order.length));


// ==================================task #vV9a6584I5======================================


// function Car(brand, model, productionYear, maxSpeed, engineVolume){
//     this.brand = brand
//     this.model = model
//     this.productionYear = productionYear
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}км/год`)
//     }
//
//     this.info = function(){
//         for (let item in this) {
//             console.log(item, this[item]);
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         newSpeed = this.maxSpeed+newSpeed
//         console.log(`Збільшена максимальна швидкість = ${newSpeed}км/год`)
//     }
//
//     this.changeYear = function(newProductionYear){
//         this.productionYear = newProductionYear
//         console.log(this)
//     }
//
//     this.addDriver = function(driver){
//         this.driver = driver
//     }
// }
//
// let car1 = new Car('Audi', 'A4', 2021, 250, 1998)
// console.log(car1)
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2023)
// car1.addDriver({name:'John' , age:20})
// console.log(car1)


// ==================================task #5kla3yMpgp======================================


// class Car {
//
//     constructor(brand, model, productionYear, maxSpeed, engineVolume) {
//         this.brand = brand
//         this.model = model
//         this.productionYear = productionYear
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}км/год`)
//     }
//
//     info() {
//         for (let item in this) {
//             console.log(item, this[item]);
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         newSpeed = this.maxSpeed + newSpeed
//         console.log(`Збільшена максимальна швидкість = ${newSpeed}км/год`)
//     }
//
//     changeYear(newProductionYear) {
//         this.productionYear = newProductionYear
//         console.log(this)
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car2 = new Car('Mercedes-Benz','GT 63S',2019, 300, 3998)
// console.log(car2)
//
// car2.drive()
// car2.info()
// car2.increaseMaxSpeed(20)
// car2.changeYear(2023)
// car2.addDriver({name:'Alex' , age:25})
// console.log(car2)


// ==================================task #zg6Fifnqig======================================


// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
//     }
// }
// class Prince{
//     constructor(name, age, shoe) {
//         this.name = name
//         this.age = age
//         this.shoe = shoe
//     }
// }
//
// let princesses = []
//
// for (let i = 1; i <= 10; i++) {
//     let randomFootSize = Math.floor(Math.random() * 10) + 34
//     princesses.push(new Cinderella(
//         `Cinderella${i}`,
//         Math.floor(Math.random() * 10) + 18,
//         randomFootSize
//     ))
// }
// console.log(princesses)
// let prince = new Prince('Prince1', 25, 39)
//
//
// for (let princess of princesses) {
//     if (princess.footSize === prince.shoe) console.log(princess)
// }
//
// function princessFinder(array, callback) {
//     let filterArr = [];
//     for (const item of array) {
//         if (callback(item)) {
//             filterArr.push(item);
//         }
//     }
//     return filterArr;
// }
//
// console.log(princessFinder(princesses, princess => princess.footSize===prince.shoe))


// ==================================task #gsKLAsNWM======================================


// Array.prototype.myForEach = function (item) {
//     for (let i = 0; i < this.length; i++) {
//         item(this[i],i,this)
//     }
// }
//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 123, 234, 345];
// numbers.myForEach((item, index, array) => {
//     console.log(`item: ${item}, index: ${index}, arrya: ${array}`);
// });
//
// Array.prototype.myFilter = function (item){
//     let filteredItems =[]
//     for (let i = 0; i < this.length; i++) {
//         if (item(this[i],i,this)){
//             filteredItems.push(this[i])
//         }
//     }
//     return filteredItems
// }
//
// console.log(numbers.myFilter((item,index,array) => item % 2 === 1 && index !== 2));