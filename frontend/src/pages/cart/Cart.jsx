import React, { useContext } from "react";
import { ShopContext } from "../../context/ShoppyContext";
import { PRODUCTS } from "../../ProductData";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> Subtotal: ${totalAmount} </p>
                    <button onClick={() => navigate("/")}> Continue Shopping </button>
                    <button
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
        </div>
    )
}

export default Cart