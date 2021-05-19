"use strict";

// Cart constructor.
const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  this.saveToLocalStorage();
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  for (let i = 0; i < this.items.length; i++) {
    new CartItem(this.items[i]);
  }
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  let stringfied = JSON.stringify(this.items);
  localStorage.setItem("cart", stringfied);
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
  CartItem.items.push(this);
};

CartItem.items = [];
// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  this.addToSelect();
  Product.allProducts.push(this);
};
Product.allProducts = [];

Product.prototype.addToSelect = function () {
  let selectEl = document.getElementById("items");
  selectEl.setAttribute("name", "selected");
  let quantityEl = document.getElementById("quantity");
  quantityEl.setAttribute("name", "quantity");

  let optionEl = document.createElement("option");
  optionEl.textContent = this.name;
  optionEl.setAttribute("value", this.name);
  selectEl.appendChild(optionEl);
};

function generateCatalog() {
  new Product("assets/bag.jpg", "Bag");
  new Product("assets/banana.jpg", "Banana");
  new Product("assets/bathroom.jpg", "Bathroom");
  new Product("assets/boots.jpg", "Boots");
  new Product("assets/breakfast.jpg", "Breakfast");
  new Product("assets/bubblegum.jpg", "Bubblegum");
  new Product("assets/chair.jpg", "Chair");
  new Product("assets/cthulhu.jpg", "Cthulhu");
  new Product("assets/dog-duck.jpg", "Dog-Duck");
  new Product("assets/dragon.jpg", "Dragon");
  new Product("assets/pen.jpg", "Pen");
  new Product("assets/pet-sweep.jpg", "Pet Sweep");
  new Product("assets/scissors.jpg", "Scissors");
  new Product("assets/shark.jpg", "Shark");
  new Product("assets/sweep.png", "Sweep");
  new Product("assets/tauntaun.jpg", "Taun-Taun");
  new Product("assets/unicorn.jpg", "Unicorn");
  new Product("assets/usb.gif", "USB");
  new Product("assets/water-can.jpg", "Water Can");
  new Product("assets/wine-glass.jpg", "Wine Glass");
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

let formEl = document.getElementById("catalog");
formEl.addEventListener("submit", addProduct);

function addProduct(event) {
  event.preventDefault();
  let itemName = event.target.selected.value;
  let quantity = event.target.quantity.value;
  new CartItem(itemName, quantity);

  let contantDiv = document.getElementById("cartContents");
  let h1 = document.createElement("h1");
  h1.textContent = `${itemName} : ${quantity}`;
  contantDiv.appendChild(h1);

  new Cart(CartItem.items);
}
