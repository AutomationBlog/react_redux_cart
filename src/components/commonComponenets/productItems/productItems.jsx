import { useContext } from "react";
import PropTypes from "prop-types";
import { cartContext } from "../../../App";

export default function ProductItems({ items }) {
  const { cart, setCart } = useContext(cartContext);
  const addToCart = (items) => {
    setCart([...cart, items]);
  };

  const removeFromCart = (items) => {
    setCart(cart.filter((c) => c.id !== items.id));
  };

  return (
    <>
      {items.map((items) => (
        <div key={items.id}>
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              {items.sales ? (
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
              ) : (
                <></>
              )}
              {/*<!-- Product image-->*/}
              <img className="card-img-top" src={items.thumbnail} alt="..." />
              {/*<!-- Product details-->*/}

              <div className="card-body p-4">
                <div className="text-center">
                  {/*<!-- Product name-->*/}
                  <h5 className="fw-bolder">{items.title}</h5>
                  {/*<!-- Product decsription-->*/}
                  <p className="fw-bolder">{items.description}</p>
                  {/*<!-- Product reviews-->*/}
                  {items.review ? (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {/*<!-- Product price-->*/}
                  {items.isOffer ? (
                    <div>
                      <span className="text-muted text-decoration-line-through m-2">
                        ${items.price}
                      </span>
                      $
                      {(
                        items.price -
                        (items.price * items.discountPercentage) / 100
                      ).toFixed(2)}
                    </div>
                  ) : (
                    <div className="fw-bolder">{items.price}</div>
                  )}
                </div>
              </div>
              {/*<!-- Product actions-->*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center ">
                  {items.sales ? (
                    <div>
                      {cart.includes(items) ? (
                        <a
                          className="btn btn-outline-dark mt-auto text-danger"
                          href="#"
                          onClick={() => removeFromCart(items)}
                        >
                          <strong>Remove from Cart</strong>
                        </a>
                      ) : (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                          onClick={() => addToCart(items)}
                        >
                          <strong>Add to Cart</strong>
                        </a>
                      )}
                    </div>
                  ) : (
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

ProductItems.propTypes = {
  items: PropTypes.array.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  sales: PropTypes.func,
  isOffer: PropTypes.func,
};
