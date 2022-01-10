import Cart from "./Cart";

Cart.init();
console.log(Cart.get())
Cart.addItem(1, 2);
console.log(Cart.get())
Cart.addItem(3, 6);
console.log(Cart.get())
Cart.addItem(7, 1);
console.log(Cart.get())
Cart.removeItem(3);
console.log(Cart.get())
Cart.setQuantity(7, 12);
console.log(Cart.get())