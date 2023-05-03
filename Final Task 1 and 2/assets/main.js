function add() {
  let num1 = parseInt(document.getElementById("firstnum").value);
  let num2 = parseInt(document.getElementById("secondnum").value);
  calculate = num1 + num2;
  document.getElementById("res").value = calculate;
}

function sub() {
  let num1 = parseInt(document.getElementById("firstnum").value);
  let num2 = parseInt(document.getElementById("secondnum").value);
  calculate = num1 - num2;
  document.getElementById("res").value = calculate;
}

function mul() {
  let num1 = parseInt(document.getElementById("firstnum").value);
  let num2 = parseInt(document.getElementById("secondnum").value);
  calculate = num1 * num2;
  document.getElementById("res").value = calculate;
}

function div() {
  let num1 = parseInt(document.getElementById("firstnum").value);
  let num2 = parseInt(document.getElementById("secondnum").value);
  calculate = num1 / num2;
  document.getElementById("res").value = calculate;
}

function cleared() {
  document.getElementById("firstnum").value = "";
  document.getElementById("secondnum").value = "";
  document.getElementById("res").value = "";
}

function about() {
  alert("Work of TsedKenu Ruth Guilas & Argie Cunanan");
}
