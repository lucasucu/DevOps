function somar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = n1 + n2;
  document.getElementById("resultado").innerText = "Resultado: " + res;
}
