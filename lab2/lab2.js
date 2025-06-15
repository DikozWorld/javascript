    function pow(x, n) {
      return x ** n;
    }

    const sumTo = new Function('n', `
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    `);

    function isLeapYear(year) {
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    function factorial(n) {
      if (n === 0) return 1n;
      return BigInt(n) * factorial(n - 1);
    }

    function fib(n) {
      if (n === 0) return 0n;
      if (n === 1) return 1n;
      let a = 0n, b = 1n;
      for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
      }
      return b;
    }

    function compare(x) {
      return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
      };
    }

    function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    }

    function addBlackSpot(obj) {
      obj[Symbol.for("blackSpot")] = true;
      return obj;
    }