const { somar, subtrair, multiplicar, dividir } = require("../src/operacoes");

test("soma dois números", () => {
  expect(somar(2, 3)).toBe(5);
});

test("subtrai dois números", () => {
  expect(subtrair(10, 4)).toBe(6);
});

test("multiplica dois números", () => {
  expect(multiplicar(3, 3)).toBe(9);
});

test("divide dois números", () => {
  expect(dividir(8, 2)).toBe(4);
});

test("não divide por zero", () => {
  expect(() => dividir(5, 0)).toThrow("Divisão por zero não permitida");
});