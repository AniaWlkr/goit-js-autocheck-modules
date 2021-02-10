import users from './users.js';
// console.log(users);

//task-22
 
const getFriends = users => {
  return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index);
};

console.log(getFriends(users));

//task-31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + player.playtime/player.gamesPlayed, 0);

console.log(totalAveragePlaytimePerGame);

//task-36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b)); 
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
//task-37
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

//task-41 - массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));


// task-43 -  массив уникальных имён друзей (свойство friends) отсортированный по алфавиту 

const getSortedFriends = users => {
  return users.flatMap(user => user.friends).filter((name, index, arr) => arr.indexOf(name) === index).sort((a, b) => a.localeCompare(b)); 
};

console.log(getSortedFriends(users));

// task-44 - общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender

const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0); 
};