// Настройка Mocha и Chai
mocha.setup('bdd');
const assert = chai.assert;

// Импорт тестируемых функций
import {
    getDecimal,
    normalizeUrl,
    checkSpam,
    truncate,
    camelize,
    fibs,
    arrReverseSorted,
    unique
} from './lab3.js';

// Описание тестов
describe("getDecimal", function() {
    it("getDecimal(1.23) => 0.23", () => assert.strictEqual(getDecimal(1.23), 0.23));
    it("getDecimal(-1.23) => 0.77", () => assert.strictEqual(getDecimal(-1.23), 0.77));
    it("getDecimal(1) => 0", () => assert.strictEqual(getDecimal(1), 0));
});

describe("normalizeUrl", function() {
    it("normalizeUrl('yandex.ru') => 'https://yandex.ru'", () => 
        assert.strictEqual(normalizeUrl('yandex.ru'), 'https://yandex.ru'));
    it("normalizeUrl('http://yandex.ru') => 'https://yandex.ru'", () => 
        assert.strictEqual(normalizeUrl('http://yandex.ru'), 'https://yandex.ru'));
});

describe("checkSpam", function() {
    it("checkSpam('_XxX_') => true", () => assert.strictEqual(checkSpam('_XxX_'), true));
    it("checkSpam('__Viagra__') => true", () => assert.strictEqual(checkSpam('__Viagra__'), true));
    it("checkSpam('test') => false", () => assert.strictEqual(checkSpam('test'), false));
});

describe("truncate", function() {
    it("truncate('Мама мыла раму.', 100) => 'Мама мыла раму.'", () => 
        assert.strictEqual(truncate('Мама мыла раму.', 100), 'Мама мыла раму.'));
    it("truncate('Мама мыла раму.', 10) => 'Мама мыла…'", () => 
        assert.strictEqual(truncate('Мама мыла раму.', 10), 'Мама мыла…'));
});

describe("camelize", function() {
    it("camelize('var-test-text') => 'varTestText'", () => 
        assert.strictEqual(camelize('var-test-text'), 'varTestText'));
    it("camelize('person__eye--blue') => 'person__eyeBlue'", () => 
        assert.strictEqual(camelize('person__eye--blue'), 'person__eyeBlue'));
});

describe("fibs", function() {
    it("fibs(5) => [0n, 1n, 1n, 2n, 3n]", () => 
        assert.deepEqual(fibs(5), [0n, 1n, 1n, 2n, 3n]));
});

describe("arrReverseSorted", function() {
    it("arrReverseSorted([1, 3, 22]) => [22, 3, 1]", () => 
        assert.deepEqual(arrReverseSorted([1, 3, 22]), [22, 3, 1]));
});

describe("unique", function() {
    it("unique([0, 1, 1, 2]) => [0, 1, 2]", () => 
        assert.deepEqual(unique([0, 1, 1, 2]), [0, 1, 2]));
    it("unique(['a', 'b', 'c', 'c']) => ['a', 'b', 'c']", () => 
        assert.deepEqual(unique(['a', 'b', 'c', 'c']), ['a', 'b', 'c']));
});

// Запуск тестов после загрузки страницы
window.addEventListener('load', () => mocha.run());