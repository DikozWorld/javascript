'use strict';

// Настройка Chai
const assert = chai.assert;

// Тесты
describe("pow", function() {
    it("2^2 = 4", () => assert.strictEqual(pow(2, 2), 4));
    it("2^0 = 1", () => assert.strictEqual(pow(2, 0), 1));
    it("2^(-2) = 0.25", () => assert.strictEqual(pow(2, -2), 0.25));
});

describe("sumTo", function() {
    it("sumTo(100) = 5050", () => assert.strictEqual(sumTo(100), 5050));
});

describe("isLeapYear", function() {
    it("2024 — високосный", () => assert.isTrue(isLeapYear(2024)));
    it("2025 — не високосный", () => assert.isFalse(isLeapYear(2025)));
    it("2000 — високосный", () => assert.isTrue(isLeapYear(2000)));
    it("1900 — не високосный", () => assert.isFalse(isLeapYear(1900)));
});

describe("factorial", function() {
    it("0! = 1", () => assert.strictEqual(factorial(0), 1n));
    it("5! = 120", () => assert.strictEqual(factorial(5), 120n));
});

describe("fib", function() {
    it("fib(0) = 0", () => assert.strictEqual(fib(0), 0n));
    it("fib(100) = 354224848179261915075", () => assert.strictEqual(fib(100), 354224848179261915075n));
});

describe("compare", function() {
    it("5 > 4 → false", () => assert.isFalse(compare(5)(4)));
    it("5 == 5 → null", () => assert.isNull(compare(5)(5)));
    it("5 < 6 → true", () => assert.isTrue(compare(5)(6)));
});

describe("sum", function() {
    it("sum() = 0", () => assert.strictEqual(sum(), 0));
    it("sum(1) = 1", () => assert.strictEqual(sum(1), 1));
    it("sum(1, 2) = 3", () => assert.strictEqual(sum(1, 2), 3));
});

describe("addBlackSpot", function() {
    it("Добавляет свойство blackSpot", () => {
        const obj = {};
        addBlackSpot(obj);
        assert.propertyVal(obj, Symbol.for('blackSpot'), true);
    });
    it("Возвращает исходный объект", () => {
        const obj = {};
        assert.strictEqual(addBlackSpot(obj), obj);
    });
});

mocha.run();