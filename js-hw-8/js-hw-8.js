// ==================================task #AiN5CoUQ======================================


function objectCopier(object) {

    if (object) {
        let copiedFunctions = []
        for (let item in object) {
            if (typeof object[item] === 'function') {
                let copiedFunc = object[item].bind({})
                copiedFunctions.push({copiedFunc, item})
            }
        }

        let copiedObj = JSON.parse(JSON.stringify(object))
        for (let func of copiedFunctions) {
            copiedObj[func.item] = func.copiedFunc
        }
        return copiedObj
    }
    throw new Error('Something went wrong')
}

let user = {
    name: 'John', surname: 'Doe', skills: ['Html/Css', 'JS', 'Python', 'C++'],
    greeting() {
        console.log(`Hello World!, my name is ${user.name}`)
    },
    showSkills() {
        console.log(`My skills are: ${user.skills}`)
    }
}
console.log(user);

let user2 = objectCopier(user)
console.log(user2)
user2.showSkills()


// ==================================task #AiN5CoUQ======================================


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})))