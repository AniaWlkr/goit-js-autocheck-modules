// task 06
function Storage(items){
  this.items = items;
}

Storage.prototype.getItems = function () {
 return this.items;
}

Storage.prototype.addItem = function (newItem) {
 this.items.push(newItem);
}

Storage.prototype.removeItem = function (item) {
  this.items = this.items.filter(stor_item => stor_item !== item); 
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// task 07

function StringBuilder (baseValue){
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
 return this.value;
}

StringBuilder.prototype.padEnd = function (str) {
 this.value = this.value.concat(str);
}
StringBuilder.prototype.padStart = function (str) {
this.value = str + this.value;
}
StringBuilder.prototype.padBoth = function (str) {
this.value = str + this.value.concat(str);
}


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// task 09

/** class User {
  // Необязательное объявление публичных свойств
  name;
  email;

  // Аналог функции-конструктора
  constructor({ name, email }) {
    // Инициализация объявленных свойств
    this.name = name;
    this.email = email;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' }); */

//task 10

/*class Car {
  constructor({ brand, model, price }) {
    this._brand = brand;  //don't forget to distinguish between property name and argument
    this._model = model;
    this._price = price;
  }
  
  getPrice()
  {
    return this._price;
  }
  
  changePrice(newPrice){
  this._price = newPrice;
  }
  
}*/

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));

// const audiCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audiCar.getPrice());
// audiCar.changePrice(35000);
// console.log(audiCar.getPrice());

//task 11

class Car {
  #brand; // Обязательное объявление приватных свойств
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand(){
  return this.#brand;
  }
  
  changeBrand(newBrand) {
    this.#brand=newBrand;
  }
}

const audCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const bmwCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const nissanCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
console.log(audCar);
console.log(bmwCar);
console.log(nissanCar);
console.log(audCar.getBrand());
console.log(bmwCar.getBrand());
console.log(nissanCar.getBrand());
nissanCar.changeBrand('Honda');
console.log(nissanCar.getBrand());


//task 18 - 19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User { //наследование класса родителя
  // Пиши код ниже этой строки
  accessLevel;                //публичное св-во
  blacklistedEmails = [];
  
  static AccessLevel = {    //статическое св-во
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  
  constructor({email, accessLevel}){
    super(email);             //super(аргументы) - это псевдоним конструктора родительского класса
    this.accessLevel=accessLevel;
  }
blacklist(email){
    this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email){
  return this.blacklistedEmails.includes(email);
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 

