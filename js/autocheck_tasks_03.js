

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват')); //1200.
// console.log(getProductPrice('Сканер')); //2700.
// console.log(getProductPrice('Дроид')); //400
// console.log(getProductPrice('Двигатель'));

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for (const item of products) {
    if (item.name === productName) {
    	return item.price * item.quantity;
    }
  }
  return 0;
  // Пиши код выше этой строки
}

// console.log(calculateTotalPrice('Бластер')); //возвращает 0.
// console.log(calculateTotalPrice('Радар')); //возвращает 5200.
// console.log(calculateTotalPrice('Дроид')); //возвращает 2800.
// console.log(calculateTotalPrice('Захват')); //возвращает 10800.
// console.log(calculateTotalPrice('Сканер')); //возвращает 8100.

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const { today:
  { high: highToday,
    low: lowToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
  },
  tomorrow:
  { low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
  }
} = forecast;

//30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки

  return {category, priority, completed, ...data,};
  
  // Пиши код выше этой строки
}

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));// возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' })); // возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));// возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// console.log(makeTask({ text: 'Купить хлеб' }));// возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }

function formatMessage(message, maxLength) {
    let result;
  // Пиши код ниже этой строки
   
    if(message.length <= maxLength) {
        return message;
    } 
        return message.slice(0, maxLength) + '...';
   
    
  // Пиши код выше этой строки
    
  }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // возвращает 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); // возвращает 'Curabitur ligula sapien'.
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // возвращает 'Vestibulum facilisis...'.
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // возвращает 'Vestibulum facilisis purus nec'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // возвращает 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // возвращает 'Nunc sed turpis a felis in nunc fringilla'.

//33

function findMatches(arr, ...args) {
  const matches = []; // Не изменяй эту строку
  for (const arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  }

  // Пиши код выше этой строки
  return matches;
}

//35

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    // for (let i = 0; i < this.books.length; i += 1) {
    //   if (this.books[i] === oldName) {
    //     this.books.splice(i, 1, newName);
    //   }
    // }
      // Пиши код выше этой строки
    // for (const book of this.books) { 
    //   if (book === oldName) { 
    //     this.books.splice(this.books.indexOf(book), 1, newName);
    //   }
    // }
    
    if (this.books.includes(oldName)){ 
      this.books.splice(this.books.indexOf(oldName), 1, newName);
    }
  }
}

//39
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     if (this.potions.includes(potionName)){
//       this.potions.splice(this.potions.indexOf(potionName), 1);
//     }
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

//41

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(const potion of this.potions){
    if (potion.name === newPotion.name) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionToRemove) {
    for(let i=0; i<this.potions.length; i+=1){
      if (this.potions[i].name === potionToRemove) {
      this.potions.splice(i, 1);
        return null;
      }
    }
    return `Зелья ${potionToRemove} нет в инвентаре!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return null;
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`
  },
  // Пиши код выше этой строки
};

// console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion('Дыхание дракона');
console.log(atTheOldToad.getPotions());


