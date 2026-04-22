class Calculator {
  static _r(n) { return parseFloat(n.toPrecision(12)); }

  add(a, b)      { return Calculator._r(a + b); }
  subtract(a, b) { return Calculator._r(a - b); }
  multiply(a, b) { return Calculator._r(a * b); }
  divide(a, b) {
    if (b === 0) throw new Error('ゼロ除算');
    return Calculator._r(a / b);
  }
  compute(op, a, b) {
    const fn = { '+': () => this.add(a, b), '-': () => this.subtract(a, b),
                 '*': () => this.multiply(a, b), '/': () => this.divide(a, b) }[op];
    return fn();
  }
}

if (typeof module !== 'undefined') module.exports = { Calculator };
