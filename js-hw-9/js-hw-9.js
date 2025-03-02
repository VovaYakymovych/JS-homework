
// ==================================task #8Nmt60ZT======================================

let block =document.createElement('div')

block.classList.add('wrap')
block.classList.add('collapse')
block.classList.add('alpha')
block.classList.add('beta')

block.style.height = '200px'
block.style.width = '300px'
block.style.background  = 'blue'
block.style.borderRadius = '15px'
block.style.margin = '20px auto'

document.body.appendChild(block)


let clonedBlock = block.cloneNode(true)
document.body.appendChild(clonedBlock)


// ==================================task #OPLI89c9G======================================

let str = ['Main','Products','About us','Contacts']

let list = document.createElement('ul')
for (let item of str) {
  let li = document.createElement('li')
  li.innerText = item
  list.appendChild(li)
}

document.body.appendChild(list)


// ==================================task #jeBqHV525U5======================================


let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (let item of coursesAndDurationArray) {
  let courseInfoDiv = document.createElement('div')
  let info = document.createElement('p')

  info.innerText = 'title:' + item.title + ' | ' + 'month duration:' + item.monthDuration

  courseInfoDiv.appendChild(info)
  courseInfoDiv.classList.add('item')
  document.body.appendChild(courseInfoDiv)
}


// ==================================task #Kx1xgoKy8======================================
let line = document.createElement('hr')
document.body.appendChild(line)

for (let item of coursesAndDurationArray) {
  let courseInfoDiv = document.createElement('div')
  courseInfoDiv.classList.add('item')

  let courseInfoDivHeading = document.createElement('h1')
  courseInfoDivHeading.classList.add('heading')
  courseInfoDiv.appendChild(courseInfoDivHeading)

  courseInfoDivHeading.innerText = item.title
  document.body.appendChild(courseInfoDiv)
}
