function incre() {
  let Pnum = parseInt(document.getElementById("num").value);
  let total = Pnum + 1;
  document.getElementById("num").value = total;
  document.getElementById("items").innerHTML = total;

  let resItemsPrice = Math.round(total * 15.97 * 100) / 100;
  document.getElementById("itemsPrice").innerHTML = "$" + resItemsPrice;

  let resTBT = Math.round((resItemsPrice + 4.99) * 100) / 100;
  document.getElementById("total-before-tax").innerHTML = "$" + resTBT;

  let resET = Math.round(resTBT * 0.1 * 100) / 100;
  document.getElementById("estimated-tax").innerHTML = "$" + resET;

  let resOT = Math.round((resTBT + resET) * 100) / 100;
  document.getElementById("order-total").innerHTML = "$" + resOT;
}

function decre() {
  let Pnum = parseInt(document.getElementById("num").value);

  if (Pnum >= 1) {
    let total = Pnum - 1;
    document.getElementById("num").value = total;
    document.getElementById("items").innerHTML = total;

    let resItemsPrice = Math.round(total * 15.97 * 100) / 100;
    document.getElementById("itemsPrice").innerHTML = "$" + resItemsPrice;

    let resTBT = Math.round((resItemsPrice + 4.99) * 100) / 100;
    document.getElementById("total-before-tax").innerHTML = "$" + resTBT;

    let resET = Math.round(resTBT * 0.1 * 100) / 100;
    document.getElementById("estimated-tax").innerHTML = "$" + resET;

    let resOT = Math.round((resTBT + resET) * 100) / 100;
    document.getElementById("order-total").innerHTML = "$" + resOT;
  } else {
    alert("exceeded parameters.");
  }
}
