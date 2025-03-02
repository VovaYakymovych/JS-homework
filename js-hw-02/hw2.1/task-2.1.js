
let line = '=======================================================================';
console.log(line);
// ======================================task-1==============================================

let list1 = [1, 2, 3, true, false, 'a', 'b', 'c', 0.123, -1];

console.log(list1)
console.log(list1[0], list1[1], list1[2], list1[3], list1[4], list1[5], list1[6], list1[7], list1[8], list1[9]);

console.log(line);
// ======================================task-2==============================================

{
  let book1 = {
    title: 'book_1',
    pageCount: 100,
    genre: 'drama'
  }

  let book2 = {
    title: 'book_2',
    pageCount: 200,
    genre: 'horror'
  }

  let book3 = {
    title: 'book_3',
    pageCount: 300,
    genre: 'comedy'
  }
}

// ======================================task-3==============================================

{
  let book1 = {
    title: 'book_1',
    pageCount: 100,
    genre: 'drama',
    authors: [
      {age: 30, name: 'Ivan'},
      {age: 40, name: 'Petro'}
    ]
  }

  let book2 = {
    title: 'book_2',
    pageCount: 200,
    genre: 'horror',
    authors: [
      {age: 34, name: 'Nazar'},
      {age: 40, name: 'Olya'},
      {age: 49, name: 'Viktoria'}
    ]
  }

  let book3 = {
    title: 'book_3',
    pageCount: 300,
    genre: 'comedy',
    authors: [
      {age: 21, name: 'Oleh'},
      {age: 58, name: 'Taras'}
    ]
  }
}

// ======================================task-4==============================================

{
  let user = [
    {name: 'Ethan', username: 'ShadowPhoenix23', password: 'Xy8$hTg@9pQ!'},
    {name: 'Oliver', username: 'QuantumByteX', password: '3Lm&zT#NvW@1'},
    {name: 'Madison', username: 'MysticVortex99', password: 'Pq7#Xr9!vTy&'},
    {name: 'Liam', username: 'LunarEcho_77', password: 'Zb8*YtQ@4Lp$'},
    {name: 'Benjamin', username: 'CyberHawk42', password: 'Nv!2Xp&Wt#6Q'},
    {name: 'Nathaniel', username: 'GlitchHunterX', password: 'Jm@7ZtQ#9Xp&'},
    {name: 'Scarlett', username: 'SolarFlareXP', password: 'Yq3*Lp&Tv!5X'},
    {name: 'Isabella', username: 'FrostByte_Alpha', password: '4Xp#ZtQ@Yv*2'},
    {name: 'Evelyn', username: 'EchoStorm999', password: 'Wm9&Lp@7Tq#X'},
    {name: 'Aurora', username: 'NebulaDrifterX', password: 'XtQ#P@Yv*8Lz'}
  ]

  console.log(
    [user[0]['password'],
    user[1]['password'],
    user[2]['password'],
    user[3]['password'],
    user[4]['password'],
    user[5]['password'],
    user[6]['password'],
    user[7]['password'],
    user[8]['password'],
    user[9]['password']].join("\n")
  )
}

console.log(line);
// ======================================task-5==============================================



let week_weather = [
  {monday : {morning: 'cloudy', noon: 'cloudy', evening: 'rain'}},
  {tuesday : {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
  {wednesday : {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
  {thursday : {morning: 'clear', noon: 'cloudy', evening: 'rainy'}},
  {friday : {morning: 'rainy', noon: 'cloudy', evening: 'rainy'}},
  {saturday : {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
  {sunday : {morning: 'clear', noon: 'clear', evening: 'cloudy'}}
]

console.log(week_weather)
console.log(line);


