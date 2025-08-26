function somar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = n1 + n2;
  document.getElementById("resultado").innerText = "Resultado: " + res;
}
function subtrair() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = n1 - n2;
  document.getElementById("resultado").innerText = "Resultado: " + res;
}
function multiplicar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = n1 * n2;
  document.getElementById("resultado").innerText = "Resultado: " + res;
}
function dividir() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  if (n2 === 0) {
    document.getElementById("resultado").innerText = "Erro: divisão por zero!";
  } else {
    const res = n1 / n2;
    document.getElementById("resultado").innerText = "Resultado: " + res;
  }
}
