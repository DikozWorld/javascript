'use strict';

/** Задание 1 и 2: Класс Book с геттерами, сеттерами, проверками, защищёнными и приватными полями */
class Book {
  #price;
  _pubYear;

  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  show() {
    console.log(`${this.title}: ${this.price} руб.`);
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Название не может быть пустым');
    }
    this._title = value;
  }

  get pubYear() {
    return this._pubYear;
  }

  set pubYear(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Год публикации должен быть положительным числом');
    }
    this._pubYear = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Цена должна быть положительным числом');
    }
    this.#price = value;
  }

  /** Задание 3: статический метод compare */
  static compare(a, b) {
    return a.pubYear - b.pubYear;
  }
}

// Пример книги
const bookExample = new Book('Преступление и наказание', 1866, 400);
bookExample.show();

// Задание 3: массив книг и сортировка
const books = [
  new Book('1984', 1949, 300),
  new Book('Война и мир', 1869, 500),
  new Book('Мастер и Маргарита', 1967, 350)
];

books.sort(Book.compare);
console.log('Сортировка по году публикации:');
books.forEach(book => console.log(`${book.title} (${book.pubYear})`));

/** Задание 4: Проверка пустоты объекта (включая символы) */
function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0;
}

console.log('isEmpty({}) =', isEmpty({}));
console.log('isEmpty({ [Symbol()]: true }) =', isEmpty({ [Symbol()]: true }));

/** Задание 5: Методы addClass и removeClass для className */
let obj = {
  className: 'open menu',
  
  addClass(cls) {
    const classes = this.className.split(' ').filter(Boolean);
    if (!classes.includes(cls)) {
      classes.push(cls);
      this.className = classes.join(' ');
    }
    return this;
  },

  removeClass(cls) {
    this.className = this.className
      .split(' ')
      .filter(c => c !== cls)
      .join(' ');
    return this;
  }
};

obj.addClass('new').addClass('open');
obj.removeClass('menu');
console.log('obj.className =', obj.className);

/** Задание 6: JSON сериализация и проверка равенства */
const originalObj = {
  name: 'Example',
  data: {
    value: 42,
    list: [1, 2, 3]
  }
};

const jsonStr = JSON.stringify(originalObj, null, 2);
console.log('JSON строка:', jsonStr);

const obj2 = JSON.parse(jsonStr);
console.log('Объекты равны:', JSON.stringify(originalObj) === JSON.stringify(obj2));

/** Задание 7: Секунды с начала дня */
function getSecondsToday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - start) / 1000);
}
console.log('Секунд с начала дня:', getSecondsToday());

/** Задание 8: Форматированная дата */
function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`;
}
console.log('Формат даты:', formatDate(new Date()));

// Явный экспорт всех сущностей для тестов
export { Book, isEmpty, obj, getSecondsToday, formatDate };