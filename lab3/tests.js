describe("Тесты для lab3.js", function() {
  // 1. getDecimal
  describe("getDecimal", function() {
    it("должна возвращать дробную часть положительного числа", function() {
      assert.equal(lab3.getDecimal(1.23), 0.23);
    });
    it("должна возвращать дробную часть отрицательного числа", function() {
      assert.equal(lab3.getDecimal(-1.23), 0.77);
    });
    it("должна возвращать 0 для целого числа", function() {
      assert.equal(lab3.getDecimal(5), 0);
    });
  });

  // 2. normalizeUrl
  describe("normalizeUrl", function() {
    it("должна добавлять https:// к простому URL", function() {
      assert.equal(lab3.normalizeUrl('yandex.ru'), 'https://yandex.ru');
    });
    it("должна заменять http:// на https://", function() {
      assert.equal(lab3.normalizeUrl('http://yandex.ru'), 'https://yandex.ru');
    });
    it("должна оставлять https:// без изменений", function() {
      assert.equal(lab3.normalizeUrl('https://yandex.ru'), 'https://yandex.ru');
    });
  });

  // 3. checkSpam
  describe("checkSpam", function() {
    it("должна находить 'viagra' (без учёта регистра)", function() {
      assert.isTrue(lab3.checkSpam('buy ViAgRa now'));
    });
    it("должна находить 'XXX' (без учёта регистра)", function() {
      assert.isTrue(lab3.checkSpam('free xXx'));
    });
    it("должна возвращать false для строк без спама", function() {
      assert.isFalse(lab3.checkSpam('innocent string'));
    });
  });

  // 4. truncate
  describe("truncate", function() {
    it("должна усекать длинную строку", function() {
      assert.equal(lab3.truncate('Вот, что мне хотелось бы сказать:', 10), 'Вот, что…');
    });
    it("не должна изменять короткую строку", function() {
      assert.equal(lab3.truncate('Привет!', 20), 'Привет!');
    });
  });

  // 5. camelize
  describe("camelize", function() {
    it("должна преобразовывать 'background-color' в 'backgroundColor'", function() {
      assert.equal(lab3.camelize('background-color'), 'backgroundColor');
    });
    it("должна преобразовывать 'list-style-image' в 'listStyleImage'", function() {
      assert.equal(lab3.camelize('list-style-image'), 'listStyleImage');
    });
    it("должна работать со строкой без дефисов", function() {
      assert.equal(lab3.camelize('hello'), 'hello');
    });
  });

  // 6. fibs
  describe("fibs", function() {
    it("должна возвращать первые 5 чисел Фибоначчи", function() {
      assert.deepEqual(lab3.fibs(5), [0n, 1n, 1n, 2n, 3n]);
    });
    it("должна возвращать пустой массив для n = 0", function() {
      assert.deepEqual(lab3.fibs(0), []);
    });
  });

  // 7. arrReverseSorted
  describe("arrReverseSorted", function() {
    it("должна сортировать массив по убыванию", function() {
      assert.deepEqual(lab3.arrReverseSorted([1, 3, 22]), [22, 3, 1]);
    });
    it("не должна изменять исходный массив", function() {
      const arr = [1, 2, 3];
      lab3.arrReverseSorted(arr);
      assert.deepEqual(arr, [1, 2, 3]);
    });
  });

  // 8. unique
  describe("unique", function() {
    it("должна удалять дубликаты чисел", function() {
      assert.deepEqual(lab3.unique([0, 1, 1, 2]), [0, 1, 2]);
    });
    it("должна удалять дубликаты строк", function() {
      assert.deepEqual(lab3.unique(['a', 'b', 'c', 'c']), ['a', 'b', 'c']);
    });
  });
});