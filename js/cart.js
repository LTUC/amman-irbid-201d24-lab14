/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tBody = document.getElementsByTagName('tbody')[0];
  tBody.textContent = ``;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tBody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let trEl = document.createElement('tr');
  tBody.appendChild(trEl);
  let tdEl = document.createElement('td');


  for (let index = 0; index < cart.items.length; index++) {

    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.setAttribute('id', `x${index}`);
    trEl.appendChild(tdEl);
    tdEl.textContent = `x`;
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = cart.items[index].product;
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = cart.items[index].quantity;
    tBody.appendChild(trEl);

  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let iteamLs = JSON.parse(localStorage.getItem('cart'));
  localStorage.removeItem(cart.items[0]);

  let myid = event.target.id;
  let row = document.getElementById(myid).parentElement.rowIndex;
  console.log(cart.items);
  // cart.iteams.splice(row,1);
  // console.log(cart.items);
  console.log(row);



}

// This will initialize the page and draw the cart on screen
renderCart();
