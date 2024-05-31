import { useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { cartContext } from "../../App.jsx";
import "./cart.css";

export default function Cart() {
  const { cart, cardAmount, setCardAmount, cardQuantity, setCardQuantity } =
    useContext(cartContext);
  // const [cardAmount, setCardAmount] = useState(0);
  // const [cardQuantity, setCardQuantity] = useState(cart.length);

  let a = 0;

  return (
    <>
      <div className="container text-center">
        <h1>Your Cart Items</h1>
      </div>
      {cart.map((item, i) => {
        const priceAfterDiscount = (
          item.price -
          item.price * (item.discountPercentage / 100)
        ).toFixed(2);

        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubTotal] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubTotal((priceAfterDiscount * quantity).toFixed(2));
        }, [quantity]);

        useEffect(() => {
          a = a + +subTotal;
          setCardAmount(a);
        }, []);

        const handleQuantitySub = (priceAfterDiscount, quantity) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setCardQuantity(cardQuantity - 1);
            a = cardAmount - +priceAfterDiscount;
            setCardAmount(a);
          }
        };

        const handleQuantityAdd = (i, priceAfterDiscount, quantity) => {
          if (cart[i].stock > quantity) {
            setQuantity(quantity + 1);
            setCardQuantity(cardQuantity + 1);
            setCardAmount(cardAmount + +subTotal);
            console.log(a);
            a = cardAmount + +priceAfterDiscount;
            console.log(a);
            setCardAmount(a);
          }
        };

        return (
          <div key={item.id}>
            <div className="cart container">
              <div className="cartItems">
                <table className="table-responsive">
                  <thead>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {/* <span>Product: </span> */}
                        {item.title}
                      </td>
                      <td>
                        {/* <span>Price: </span> */}
                        {priceAfterDiscount}
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleQuantitySub(priceAfterDiscount, quantity)
                          }
                        >
                          -
                        </button>
                        <span>
                          {/* <span>Product: </span> */}
                          {quantity}
                        </span>
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleQuantityAdd(i, priceAfterDiscount, quantity)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {/* <span>SubTotal: </span> */}${subTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
