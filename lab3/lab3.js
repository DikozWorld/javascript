/**
 * Возвращает дробную часть числа.
 * @param {number} num - Число.
 * @returns {number} Дробная часть числа (от 0 до 1).
 */
export function getDecimal(num) {
  const decimal = Math.abs(num) % 1;
  return num >= 0 ? decimal : 1 - decimal;
}

/**
 * Нормализует URL, добавляя https:// в начало.
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://')
    ? `https://${url.replace(/^https?:\/\//, '')}`
    : `https://${url}`;
}

/**
 * Проверяет строку на наличие подстрок 'viagra' или 'XXX' (без учёта регистра).
 * @param {string} str - Строка для проверки.
 * @returns {boolean} true, если найдено совпадение.
 */
export function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до maxlength символов, добавляя многоточие при необходимости.
 * @param {string} str - Строка.
 * @param {number} maxlength - Максимальная длина.
 * @returns {string} Усечённая строка.
 */
export function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Строка вида 'var-test-text'.
 * @returns {string} Строка в camelCase ('varTestText').
 */
export function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index === 0 ? word : ucFirst(word))
    .join('');
}

/**
 * Делает первую букву строки заглавной.
 * @param {string} str - Строка.
 * @returns {string} Строка с заглавной первой буквой.
 */
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import { fib } from '../lab2/lab2';

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fib(i));
  }
  return result;
}

/**
 * Возвращает n-ное число Фибоначчи (из модуля lab2.js).
 * @param {number} n - Номер числа.
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

/**
 * Сортирует массив чисел по убыванию.
 * @param {number[]} arr - Массив чисел.
 * @returns {number[]} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {Array} arr - Массив с повторяющимися элементами.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
  return [...new Set(arr)];
}