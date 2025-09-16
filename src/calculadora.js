const { somar, subtrair, multiplicar, dividir } = require("./operacoes");

function calcularSomar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = somar(n1, n2);
  document.getElementById("resultado").innerText = "Resultado: " + res;
}

function calcularSubtrair() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = subtrair(n1, n2);
  document.getElementById("resultado").innerText = "Resultado: " + res;
}

function calcularMultiplicar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = multiplicar(n1, n2);
  document.getElementById("resultado").innerText = "Resultado: " + res;
}

function calcularDividir() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  try {
    const res = dividir(n1, n2);
    document.getElementById("resultado").innerText = "Resultado: " + res;
  } catch (e) {
    document.getElementById("resultado").innerText = "Erro: divisão p/ zero!";
  }
}
