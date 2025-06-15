// Импорт функций из lab2.js
import { 
  pow,
  sumTo,
  isLeapYear,
  factorial,
  fib,
  compare,
  sum,
  addBlackSpot
} from './lab2.js';

// Делаем функции доступными глобально для тестов
window.pow = pow;
window.sumTo = sumTo;
window.isLeapYear = isLeapYear;
window.factorial = factorial;
window.fib = fib;
window.compare = compare;
window.sum = sum;
window.addBlackSpot = addBlackSpot;

// Описываем тесты
describe("Тесты для lab2.js", function() {
  describe("pow()", function() {
    it("2^3 = 8", () => assert.equal(pow(2, 3), 8);
    it("5^0 = 1", () => assert.equal(pow(5, 0), 1);
    it("3^-2 ≈ 0.111", () => assert.closeTo(pow(3, -2), 0.111, 0.001);
  });

  describe("sumTo()", function() {
    it("sumTo(100) = 5050", () => assert.equal(sumTo(100), 5050);
    it("sumTo(1) = 1", () => assert.equal(sumTo(1), 1);
  });

  describe("isLeapYear()", function() {
    it("2020 - високосный", () => assert.isTrue(isLeapYear(2020)));
    it("1900 - не високосный", () => assert.isFalse(isLeapYear(1900)));
  });

  describe("factorial()", function() {
    it("5! = 120", () => assert.equal(factorial(5), 120n));
    it("0! = 1", () => assert.equal(factorial(0), 1n));
  });

  describe("fib()", function() {
    it("fib(7) = 13", () => assert.equal(fib(7), 13n));
    it("fib(0) = 0", () => assert.equal(fib(0), 0n));
  });

  describe("compare()", function() {
    const cmp5 = compare(5);
    it("compare(5)(10) = true", () => assert.isTrue(cmp5(10)));
    it("compare(5)(3) = false", () => assert.isFalse(cmp5(3)));
  });

  describe("sum()", function() {
    it("sum(1,2,3) = 6", () => assert.equal(sum(1, 2, 3), 6));
    it("sum() = 0", () => assert.equal(sum(), 0));
  });

  describe("addBlackSpot()", function() {
    it("добавляет скрытое свойство", () => {
      const obj = {};
      addBlackSpot(obj);
      assert.isTrue(obj[Symbol.for("blackSpot")]);
    });
  });
});

// Запускаем тесты после загрузки
window.addEventListener('load', () => {
  mocha.run();
});