import Cookies from "js-cookie";

export default class Cart{
    static init = () => {
        Cookies.set("cart", JSON.stringify([]));
    }
    static get = ():Map<number, number> => {
        let cart = Cookies.get("cart");
        if (!cart){ Cart.init() }
        return new Map(JSON.parse(Cookies.get("cart")));
    }
    static set = (cart:Map<number, number>) => {
        Cookies.set("cart", JSON.stringify(Array.from(cart)));
    }
    static addItem = (id:number, quantity:number) => {
        let cart = Cart.get();
        cart.set(id, quantity);
        Cart.set(cart);
    }
    static removeItem = (id:number) => {
        let cart = Cart.get();
        cart.delete(id);
        Cart.set(cart);
    }
    static setQuantity = (id:number, quantity:number) => {
        let cart = Cart.get();
        cart.set(id, quantity);
        Cart.set(cart);
    }
}