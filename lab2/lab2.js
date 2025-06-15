/**
 * Возвращает x в степени n (n - целое число).
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения в степень.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    return x * pow(x, n - 1);
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', 'return n * (n + 1) / 2;');

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

/**
 * Возвращает факториал числа n (рекурсивно).
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n (тип BigInt).
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи (тип BigInt).
 */
function fib(n) {
    let a = 0n, b = 1n;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/**
 * Сравнивает значение y с x.
 * @param {number} x - Число для сравнения.
 * @returns {function} Функция, которая сравнивает свой аргумент с x.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args - Аргументы для суммирования.
 * @returns {number} Сумма аргументов.
 */
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

/**
 * Добавляет символьное свойство blackSpot к объекту.
 * @param {Object} obj - Объект для модификации.
 * @returns {Object} Исходный объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}