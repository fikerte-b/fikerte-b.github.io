function add(){
    let textInput = document.getElementById("IdInput");
    let textOutput = document.getElementById("IdOutput");
    textOutput.value = textInput.value;
    textInput.value = "";
}
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2")
    let data1 = Number(value1.value);
    let data2 = Number(value2.value)
function addition(){
    let result = data1 + data2;
    //let result = Number(value1.value) + Number(value2.value);
    // let p = document.createElement("p");
    // p.append(result);
    document.getElementById("resultId").innerHTML = result;
}
function subtraction(){
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2")
    let result = Number(value1.value) - Number(value2.value);
    document.getElementById("resultId").innerHTML = result;
}
function multiplication(){
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2")
    let result = Number(value1.value) * Number(value2.value);
    document.getElementById("resultId").innerHTML = result;
}
function addInventory(){
    let table = document.getElementById("tableId");
    let itemName = document.getElementById("name");
    let itemCategory = document.getElementById("category");
    let itemQuantity = document.getElementById("qty");
    let tr = document.createElement("tr");
    table.append(tr);
    let td = document.createElement("td");
    tr.append(td);
    td.innerHTML = itemName.value;
    let td2 = document.createElement("td");
    tr.append(td2);
    td2.innerHTML = itemCategory.value;
    let td3 = document.createElement("td");
    tr.append(td3);
    td3.innerHTML = itemQuantity.value;
                
}

// function add2(){
//     textArea.append(input.value +"\n");
//     input.value="";
// }