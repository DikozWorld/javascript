'use strict';

/**
 * Возвращает дробную часть числа num. Для отрицательных: 1 - дробная часть.
 * @param {number} num
 * @returns {number}
 */
export function getDecimal(num) {
    let frac = Math.abs(num) % 1;
    return num < 0 ? +(1 - frac).toFixed(10) : +frac.toFixed(10);
}


/**
 * Нормализует URL, добавляя https:// при необходимости
 * @param {string} url
 * @returns {string}
 */
export function normalizeUrl(url) {
    return 'https://' + url.replace(/^https?:\/\//, '');
}

/**
 * Проверяет наличие спама в строке
 * @param {string} str
 * @returns {boolean}
 */
export function checkSpam(str) {
    const lower = str.toLowerCase();
    return lower.includes('viagra') || lower.includes('xxx');
}

/**
 * Усечение строки до максимальной длины с многоточием
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
export function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '\u2026' : str;
}

/**
 * Преобразует строку в camelCase
 * @param {string} str
 * @returns {string}
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая)
 * @param {number} n
 * @returns {bigint[]}
 */
export function fibs(n) {
    const result = [];
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}

/**
 * Возвращает новый массив, отсортированный по убыванию
 * @param {number[]} arr
 * @returns {number[]}
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений
 * @param {any[]} arr
 * @returns {any[]}
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}
