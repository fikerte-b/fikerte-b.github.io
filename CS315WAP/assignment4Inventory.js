window.onload = myInventoryFn;
function myInventoryFn(){
    let table = document.getElementById("tableId");
    let itemName = document.getElementById("name");
    let itemCategory = document.getElementById("category");
    let itemQuantity = document.getElementById("qty");
    let itemPrice = document.getElementById("price");
    let itemRating = document.getElementById("rate"); 
    
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    tr.append(td1);
    td1.innerHTML = itemName.value;
    let td2 = document.createElement("td");
    tr.append(td2);
    td2.innerHTML = itemCategory.value;
    let td3 = document.createElement("td");
    tr.append(td3);
    td3.innerHTML = itemQuantity.value;
    let parseResult = Number(itemPrice.value);
    if(isNaN(parseResult)){
        itemPrice.style.backgroundColor = "red";
        td1.innerHTML = "";
        td2.innerHTML ="";
        td3.innerHTML ="";
        alert("Inter a valid number");
        return;
    }
    else{
        
        let td4 = document.createElement("td");
        tr.append(td4);
        td4.innerHTML = itemPrice.value;
    }
    let td5 = document.createElement("td");
    tr.append(td5);
    td5.innerHTML = itemRating.value;
    
    
}   