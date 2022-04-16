window.onload = myfn;

function myfn() {
  const arrayy = [];
  let filArr = [];
  const table = document.getElementById("myTable");
  const addbtn = document.getElementById("addbtn");
  const sorter = document.getElementById("sorter");
  const filterer = document.getElementById("filterer");
  const myforms = document.forms.myform;
  const name = myforms.itemField;
  const category = myforms.categoryField;
  const quantity = myforms.quantityField;
  const ratings = myforms.ratingsField;
  const price = myforms.priceField;
  addbtn.addEventListener("click", addProduct);
  sorter.addEventListener("click", sortFn);
  filterer.addEventListener("click", filterFn);
  function filterFn() {
    const selec = selectionFind("#seleFilter");
    console.log("line20", selec);

    tableDeleter();
    let newArr = [];
    if (selec === "none") {
      filArr = arrayy;
      tableMakerr(arrayy);
      return;
    }
    if (selec === "Quantity100") {
      for (let i = 0; i < arrayy.length; i++) {
        console.log("30", arrayy[i].quan);
        if (arrayy[i].quan > 100) {
          newArr.push(arrayy[i]);
        }
      }
    } else if (selec === "Rating &gt;4") {
      for (let i = 0; i < arrayy.length; i++) {
        if (arrayy[i].rat > 4) {
          newArr.push(arrayy[i]);
        }
      }
    }
    console.log(newArr);
    filArr = newArr;
    tableMakerr(newArr);
  }
  function selectionFind(tagNa) {
    const opt = document.querySelector(tagNa);
    let selec = "";
    for (let i = 0; i < opt.children.length; i++) {
      if (opt.children[i].selected) {
        selec = opt.children[i].innerHTML;
      }
    }
    return selec;
  }
  function sortFn() {
    const selec = selectionFind("#sele");
    if (selec !== "default") {
      console.log(selec, "sortFn");
      sortFn2(selec);
    }
  }
  function tableDeleter() {
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    // for (let i = arrayy.length; i > 0; i--) {
    //   table.deleteRow(i);
    // }
  }
  function sortFn2(selec) {
    tableDeleter();
    if (selec === "Name") {
      arrayy.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (selec === "Price") {
      arrayy.sort((a, b) => a.price - b.price);
    }
    tableMakerr(arrayy);
  }
  function tableMakerr(arrayy) {
    console.log("77", arrayy);
    for (let i = 0; i < arrayy.length; i++) {
      let tr = document.createElement("tr");
      table.append(tr);

      let nameTd = document.createElement("td");
      nameTd.innerHTML = arrayy[i].name;
      tr.append(nameTd);

      let categoryTd = document.createElement("td");
      categoryTd.innerHTML = arrayy[i].cat;
      tr.append(categoryTd);

      let quantityTd = document.createElement("td");
      quantityTd.innerHTML = arrayy[i].quan;
      tr.append(quantityTd);

      let ratingsTd = document.createElement("td");
      ratingsTd.innerHTML = arrayy[i].rat;
      tr.append(ratingsTd);

      let priceTd = document.createElement("td");
      priceTd.innerHTML = arrayy[i].price;
      tr.append(priceTd);

      let remTd = document.createElement("td");
      const btn = document.createElement("button");
      btn.innerHTML = "Remove";
      btn.addEventListener("click", () => remover(tr, arrayy[i]));
      remTd.appendChild(btn);
      tr.append(remTd);
    }
  }

  function addProduct() {
    let x = table.rows;
    let y = x.length;
    console.log(table.rows[arrayy.length]);
    console.log(y);
    if (isNaN(quantity.value)) {
      quantity.style.backgroundColor = "red";
      alert("quantity should be a number");
      return;
    }
    const row = table.insertRow(1);
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "lightblue";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor = "white";
    });
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);
    const cell5 = row.insertCell(5);
    cell0.innerHTML = name.value;
    cell1.innerHTML = category.value;
    cell2.innerHTML = quantity.value;
    cell3.innerHTML = ratings.value;
    cell4.innerHTML = price.value;
    const obj = {
      name: name.value,
      cat: category.value,
      quan: quantity.value,
      rat: ratings.value,
      price: price.value,
    };
    arrayy.push(obj);
    const btn = document.createElement("button");
    const rem = document.createTextNode("Remove");
    btn.appendChild(rem);
    cell5.appendChild(btn);
    btn.addEventListener("click", () => remover(row, obj));
    myforms.reset();
    quantity.style.backgroundColor = "white";
  }

  function remover(rowDel, obj) {
    table.deleteRow(rowDel.rowIndex);

    for (let i = 0; i < arrayy.length; i++) {
      if (arrayy[i] === obj) {
        arrayy.splice(i, 1);
      }
    }
  }
}
