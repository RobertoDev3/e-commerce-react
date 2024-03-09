import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-items">
      <table>
        <thead>
          <tr>
            <th className="th-product">Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_product.map((e, key) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr key={key}>
                  <td className="td-img-porduct">
                    <img
                      className="cart-icon-product-icon"
                      src={e.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <p>{e.name}</p>
                  </td>
                  <td>
                    <p>${e.new_price}</p>
                  </td>
                  <td>
                    <button className="cart-items-quantity">
                      {cartItems[e.id]}
                    </button>
                  </td>
                  <td>
                    <p>${e.new_price * cartItems[e.id]}</p>
                  </td>
                  <td>
                    <img
                      className="cart-icon-remove-icon"
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      alt=""
                    />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-pormobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
