/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tablebEL=document.getElementById('table1')[0];
  while(tableBEL.firstElementChild)
  {tablebEL.removeChild(tablebEL.firstElementChild);}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablebEL=document.getElementById('table1')[0];
  
  // TODO: Iterate over the items in the cart
  for (let i=0;i<cart.items.length;i++)
  // TODO: Create a TR
  let trELement =document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdEL=document.createElement('td');
  tdEL.setAttribute('id',cart.items[i].product);
  let deletedButton=document.createElement('p');
  tdEL.appendChild(deletedButton);
  deletedButton.setAttribute('id',cart.items[i].product);
  deletedButton.addEventListener('click',removeItemFromCart)
  let tdItem=document.createElement('td');
  tdItem.textContent=cart.items[i].product;
  let tdQuantity=document.createElement('td');
  tdQuantity.textContent=cart.items[i].quantity;
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tablebEL.appendChild(trELement);
  trELement.appendChild(tdEL);
  trELement.appendChild(tdItem);
  trELement.appendChild( tdQuantity);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let deleteItem=event.target.id;
  for(let i=0;i<cart.items.length;i++)
  {
    if(cart.items[i]===deleteItem)
    {cart.deleteItem(cart.items[i]);}
  }
  // TODO: Save the cart back to local storagec
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
