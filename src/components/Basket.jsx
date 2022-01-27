import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Basket.scss";
import basketImg from "../assets/shopping-cart.png";
import { RemoveBasketItem } from "../redux/ProductSlice";

export default function Basket() {
  const basket = useSelector((state) => state.product.basket);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const showBasket = () => {
    setShow(!show);
  };

  const RemoveBasket = (id) => {
    dispatch(RemoveBasketItem(id));
  };

  return (
    <div className="basket">
      <span onClick={showBasket}>
        <img className="basket-img" src={basketImg} alt="" />
      </span>
      <div className="basket-wrapper">
        <span className="basket-number">{basket.length}</span>
      </div>
      <div className={show ? "basket-show" : "basket-hidden"}>
        {basket.length !== 0 ? (
          <div className="">
            {basket.map((item) => (
              <div key={item.id} className="basket-in">
                <div className="">
                  <img src={item.image} alt="" />
                </div>

                <div className="">
                  <div>{item.title}</div>
                  <button onClick={() => RemoveBasket(item.id)}>
                    Delete From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Your basket is empty"
        )}
      </div>
    </div>
  );
}
