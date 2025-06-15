/**
 * Возводит число x в степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени.
 * @returns {number} Результат x^n.
 */
function pow(x, n) {
  return x ** n;
}

/**
 * Вычисляет сумму чисел от 1 до n.
 * @param {number} n - Верхняя граница суммы.
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
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n (с поддержкой больших чисел через BigInt).
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n.
 */
function factorial(n) {
  if (n === 0) return 1n;
  return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-ное число Фибоначчи (с поддержкой больших чисел через BigInt).
 * @param {number} n - Номер числа в последовательности Фибоначчи.
 * @returns {bigint} n-ное число Фибоначчи.
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

/**
 * Создает функцию для сравнения числа y с x.
 * @param {number} x - Число для сравнения.
 * @returns {function(number): (boolean|null)} Функция, которая сравнивает y с x:
 *   - true, если y > x,
 *   - false, если y < x,
 *   - null, если y === x.
 */
function compare(x) {
  return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * Суммирует все переданные аргументы.
 * @param {...number} args - Числа для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

/**
 * Добавляет скрытое свойство "blackSpot" к объекту.
 * @param {Object} obj - Объект, к которому добавляется свойство.
 * @returns {Object} Исходный объект с добавленным свойством [Symbol.for("blackSpot")].
 */
function addBlackSpot(obj) {
  obj[Symbol.for("blackSpot")] = true;
  return obj;
}