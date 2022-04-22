
window.onload = addProduct;
var array = [
  {
    name: "Coffee Arabica",
    category: "Food and Drinks",
    quantity: 100,
    price: 10,
    brand: "Kalides",
    id: "FD",
    ratings: 5,
    description:'kalides Coffee Coffee & Chicory Blend 64 Ounces, Medium Dark Roast Ground Coffee, 32 Ounce Bag (Pack of 2)',
    imageName:"projectImages/coffeePack1.jpg",
    itemLink:"coffee.html"
  },
  {
    name: "Winter Sweater",
    category: "Clothes",
    quantity: 850,
    price: 50,
    brand: "DKNY",
    id: "WS",
    ratings: 3,
    description:'DKNY winter Quarter Zip Fleece Sherpa Pullover Sweater Long Sleeve Sweatshirt with Pockets',
    imageName:"projectImages/sweater2.jpg",
    itemLink:"sweater.html"
  },
  {
    name: "Teddy Bear",
    category: "Toys and Games",
    quantity: 10,
    price: 20,
    brand: "Melisa Dong",
    id: "TG",
    ratings: 4,
    description:'My Little Bear - 6 Inch Plush Super Cute and Cuddly Mini Teddy Bear from Hug-a-BooBoo',
    imageName:"projectImages/toys3.jpg",
    itemLink:"toys.html"
  },
  {
    name: "Laptop",
    category: "Electronics",
    quantity: 20,
    price: 1500,
    brand: "Samsung",
    id: "IT",
    ratings: 2,
    description:"SAMSUNG 15.6” Galaxy Laptop Computer, i7 / 16GB / 512GB, 12th Gen Intel Core Processor, Lightweight, 2022 Model",
    imageName:"projectImages/laptop4.jpg",
    itemLink:"laptop.html"
  },
  {
    name: "Shoes",
    category: "Shoes",
    quantity: 300,
    price: 129,
    brand: "Nike",
    id: "shoes",
    ratings: 2,
    description:"Nike Air Max 270 Mens Running Trainers Dc1938 Sneakers Shoes",
    imageName:"projectImages/shoe5.jpg",
    itemLink:"shoes.html"
  },
  {
    name: "iphone",
    category: "Electronics",
    quantity: 150,
    price: 850,
    brand: "Apple",
    id: "IT",
    ratings: 3,
    description:'Apple iPhone 13 Mini (256GB, Pink) [Locked] + Carrier Subscription',
    imageName:"projectImages/phone6.jpg",
    itemLink:"iphone.html"
  },
  {
    name: "Chair",
    category: "House hold",
    quantity: 50,
    price: 500,
    brand: "Ikea",
    id: "HG",
    ratings: 1,
    description:'Accent Chair with Arms Mid Century Modern Decorative Side Chair Upholstered Reading Chair with Wood Legs',
    imageName:"projectImages/chair7.jpg",
    itemLink:"chair.html"
  },
  {
    name: "Book",
    category: "Books and Magazines",
    quantity: 150,
    price: 50,
    brand: "unknown",
    id: "BM",
    ratings: 5,
    description:'JavaScript from Beginner to Professional: Learn JavaScript quickly',
    imageName:"projectImages/book8.jpg",
    itemLink:"books.html"
  },
  
];

function addProduct() {
  createCards(array)
}
function createCards(arr) {

  let cards = document.getElementById("cards");

  let html = "";

  
  arr.forEach(function (item) {
    html +=
      '<div class="card"style="width:18rem;">' +
      '<a href="' +
      item.itemLink +
      '" style="text-decoration:none;color:black" class="card-link">' +
      '<img src="' +
      item.imageName +
      '" class="card-img-top" alt="...">' +
      '<div class="card-body" style="text-align: center;">' +
      item.name +
      '<p class="card-text">' +
      item.description +
      "</p>"+
      '<label>$</label><b>'+

      item.price +

      "</p></b>"+

      '<label>Rate:</label>&nbsp'+
      item.ratings +
      "</div> </div>";
  });

  cards.innerHTML = html;
}
let newArray = [...array];
var modal = document.getElementById("iddd");

var modal2 = document.getElementById("finish");
function handleAddressClick() {
  modal.style.display = "block";
}
function handleDone() {
  modal.style.display = "none";
}

function sortLowHigh() {
   let lowHigh= array.sort((item1, item2) => Number(item1.price) - Number(item2.price));
  JSON.stringify(lowHigh);
  createCards(lowHigh);
}

function sortHighLow() {
  
   let highLow = array.sort((item1, item2) => Number(item2.price) - Number(item1.price));
  JSON.stringify(highLow);
  createCards(highLow);
}

function filterInRange1() {
let filteredArray = array.filter((item) => Number(item.ratings) >=1);
JSON.stringify(filteredArray);
createCards(filteredArray);
}

function filterInRange2() {
let filteredArray = array.filter((item) => Number(item.ratings) >=2);
JSON.stringify(filteredArray);
createCards(filteredArray);
}

function filterInRange3() {
 let filteredArray = array.filter((item) => Number(item.ratings) >=3);
JSON.stringify(filteredArray);
createCards(filteredArray);
}

function filterInRange4() {
let filteredArray = array.filter((item) => Number(item.ratings) >=4);
JSON.stringify(filteredArray);
createCards(filteredArray);
}

