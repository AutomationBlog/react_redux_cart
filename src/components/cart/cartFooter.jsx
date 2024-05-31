import { cartContext } from "../../App.jsx";
import { useContext } from "react";

export default function CartFooter() {
  const { cardQuantity, cardAmount } = useContext(cartContext);
  return (
    <>
      <div className="container">
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">TOTAL QTY: {cardQuantity}</div>
          <div className="col">TOTAL Price : {cardAmount.toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to pay</button>
          </div>
        </div>
      </div>
    </>
  );
}
