import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [

  {
    productID:"ABCD",
    photo:"https://m.media-amazon.com/images/I/71jG+e7roXL._SX569_.jpg",
    name:"Macbook",
    price:159999,
    quantity:4,
    stock:10,

  }

];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponcode, setCouponcode] = useState<string>("");
  const [isValidCouponcode, setIsValidCouponcode] = useState<boolean>(false);

  useEffect(()=>{
    const timeOutID = setTimeout(()=>{
      if(Math.random() > 0.5) setIsValidCouponcode(true);
      else setIsValidCouponcode(false);
    },1000)

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponcode(false);
    }
  },[couponcode])

  return (
    <div className="cart">
      <main>

      {
        cartItems.length > 0 ? (cartItems.map((i,idx)=> (
          <CartItem key={idx} cartItem={i}/>
          ))):(<h1>No Items Added</h1>)
      }


      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> -₹{discount}</em>
        </p>
        <p>
          Total: <b>₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponcode}
          onChange={(e) => setCouponcode(e.target.value)}
        />

        {couponcode &&
          (isValidCouponcode ? (
            <span className="green">
              ₹{discount} off using the
              <code>{couponcode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
};

export default Cart;
