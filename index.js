var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({"itemName":item, "itemPrice":price});
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  for (let i=0; i < cart.length; i++){
    if (i===1) {
      console.log(`In your cart, you have ${item} at ${price}.`);
    } else if (i===2) {
      console.log(`In your cart, you have ${item} at ${price}, ${item} at ${price}.`);
    } else if (i>=3){
      console.log(`In your cart, you have ${item} at ${price}, ${item} at ${price}, 
        and ${item} at ${price}`);
    } else{
      console.log("Your shopping cart is empty.");
    }
  } return card;// write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
