describe("pow", function() {
  it("2^2 = 4", function() {
    assert.equal(pow(2, 2), 4);
  });

  it("2^0 = 1", function() {
    assert.equal(pow(2, 0), 1);
  });

  it("2^-2 = 0.25", function() {
    assert.closeTo(pow(2, -2), 0.25, 1e-10);
  });
});

describe("sumTo", function() {
  it("sumTo(100) = 5050", function() {
    assert.equal(sumTo(100), 5050);
  });
});

describe("isLeapYear", function() {
  it("2024 is leap", function() {
    assert.isTrue(isLeapYear(2024));
  });
  it("2025 is not leap", function() {
    assert.isFalse(isLeapYear(2025));
  });
  it("2000 is leap", function() {
    assert.isTrue(isLeapYear(2000));
  });
  it("1900 is not leap", function() {
    assert.isFalse(isLeapYear(1900));
  });
});

describe("factorial", function() {
  it("factorial(0) = 1n", function() {
    assert.equal(factorial(0), 1n);
  });
  it("factorial(5) = 120n", function() {
    assert.equal(factorial(5), 120n);
  });
});

describe("fib", function() {
  it("fib(0) = 0n", function() {
    assert.equal(fib(0), 0n);
  });
  it("fib(1) = 1n", function() {
    assert.equal(fib(1), 1n);
  });
  it("fib(100) = 354224848179261915075n", function() {
    assert.equal(fib(100), 354224848179261915075n);
  });
});

describe("compare", function() {
  const cmp = compare(5);
  it("compare(5)(4) => false", function() {
    assert.isFalse(cmp(4));
  });
  it("compare(5)(5) => null", function() {
    assert.isNull(cmp(5));
  });
  it("compare(5)(6) => true", function() {
    assert.isTrue(cmp(6));
  });
});

describe("sum(...args)", function() {
  it("sum() = 0", function() {
    assert.equal(sum(), 0);
  });
  it("sum(1) = 1", function() {
    assert.equal(sum(1), 1);
  });
  it("sum(1,2) = 3", function() {
    assert.equal(sum(1, 2), 3);
  });
  it("sum(1,2,3,4) = 10", function() {
    assert.equal(sum(1, 2, 3, 4), 10);
  });
});

describe("addBlackSpot", function() {
  it("добавляет Symbol.for('blackSpot')", function() {
    const obj = {};
    addBlackSpot(obj);
    assert.strictEqual(obj[Symbol.for("blackSpot")], true);
  });
});
