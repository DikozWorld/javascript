/**
 * Возводит чило в целую степень
 * @param {number} x число 
 * @param {number} n степень 
 * @returns {number} x**n
 */
function pow(x, n) {
    return x ** n;
}

/**
 * Вычисляет сумму чисел от 1 до n (создана через new Function).
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', `
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    `);

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный.
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n (рекурсивно, с BigInt).
 * @param {number} n - Неотрицательное целое число.
 * @returns {bigint} Факториал n!.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Номер числа Фибоначчи.
 * @returns {bigint} Число Фибоначчи.
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
module.exports = { lab2 };

/**
 * Возвращает функцию, сравнивающую свой аргумент с x.
 * @param {number} x - Число для сравнения.
 * @returns {function(number): (boolean|null)} Функция-компаратор.
 */
function compare(x) {
    return function (y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args - Числа для суммирования.
 * @returns {number} Сумма аргументов.
 */
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

/**
 * Добавляет символьное свойство blackSpot к объекту.
 * @param {object} obj - Исходный объект.
 * @returns {object} Объект с blackSpot.
 */
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}
