const { Calculator } = require('./calculator');

describe('Calculator', () => {
  let calc;
  beforeEach(() => { calc = new Calculator(); });

  // --- add ---
  describe('add', () => {
    test('整数の加算', () => expect(calc.add(2, 3)).toBe(5));
    test('負の数を含む加算', () => expect(calc.add(-4, 1)).toBe(-3));
    test('小数の加算', () => expect(calc.add(0.1, 0.2)).toBe(0.3));
    test('0.1 + 0.2 の浮動小数点誤差が出ない', () => expect(calc.add(0.1, 0.2)).not.toBe(0.1 + 0.2));
    test('ゼロとの加算', () => expect(calc.add(7, 0)).toBe(7));
  });

  // --- subtract ---
  describe('subtract', () => {
    test('整数の減算', () => expect(calc.subtract(10, 3)).toBe(7));
    test('結果が負になる減算', () => expect(calc.subtract(3, 10)).toBe(-7));
    test('小数の減算', () => expect(calc.subtract(1.5, 0.5)).toBe(1));
    test('ゼロとの減算', () => expect(calc.subtract(5, 0)).toBe(5));
  });

  // --- multiply ---
  describe('multiply', () => {
    test('整数の乗算', () => expect(calc.multiply(4, 5)).toBe(20));
    test('負の数との乗算', () => expect(calc.multiply(-3, 4)).toBe(-12));
    test('負同士の乗算', () => expect(calc.multiply(-3, -4)).toBe(12));
    test('ゼロとの乗算', () => expect(calc.multiply(99, 0)).toBe(0));
    test('小数の乗算', () => expect(calc.multiply(0.5, 4)).toBe(2));
  });

  // --- divide ---
  describe('divide', () => {
    test('整数の除算', () => expect(calc.divide(10, 2)).toBe(5));
    test('割り切れない除算', () => expect(calc.divide(1, 3)).toBe(parseFloat((1 / 3).toPrecision(12))));
    test('負の数との除算', () => expect(calc.divide(-9, 3)).toBe(-3));
    test('小数による除算', () => expect(calc.divide(1, 0.5)).toBe(2));
    test('ゼロ除算は例外を投げる', () => {
      expect(() => calc.divide(5, 0)).toThrow('ゼロ除算');
    });
    test('ゼロをゼロで割っても例外を投げる', () => {
      expect(() => calc.divide(0, 0)).toThrow('ゼロ除算');
    });
  });

  // --- compute ---
  describe('compute', () => {
    test('+ で加算', () => expect(calc.compute('+', 1, 2)).toBe(3));
    test('- で減算', () => expect(calc.compute('-', 5, 3)).toBe(2));
    test('* で乗算', () => expect(calc.compute('*', 3, 4)).toBe(12));
    test('/ で除算', () => expect(calc.compute('/', 9, 3)).toBe(3));
    test('/ でゼロ除算は例外を投げる', () => {
      expect(() => calc.compute('/', 1, 0)).toThrow('ゼロ除算');
    });
    test('結果は12桁有効数字で丸められる', () => {
      const result = calc.compute('/', 1, 6);
      // toPrecision(12) の基準値と一致することを確認
      expect(result).toBe(parseFloat((1 / 6).toPrecision(12)));
    });
  });
});
test('intentional failure', () => expect(1).toBe(2));
