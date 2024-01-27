import { useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponcode, setCouponcode] = useState<string>("");
  const [isValidCouponcode, setIsValidCouponcode] = useState<boolean>(false);

  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em> -₹{discount}</em>
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

        {couponcode &&(
           isValidCouponcode ?
          (<span className="green">
            ₹{discount} off using the
            <code>{couponcode}</code>
          </span>): (
          <span className="red">
            Invalid Coupon <VscError />
          </span>
        )
        ) }
      </aside>
    </div>
  );
};

export default Cart;
