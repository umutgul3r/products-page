import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddBasket } from "../redux/ProductSlice";
import "./Products.scss";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);

  const handleClick = (item) => {
    dispatch(AddBasket(item));
  };

  return (
    <div className="products">
      <div className="products-wrapper">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="product-item-details">
              <div className="item-img">
                <img src={item.image} alt="" />
              </div>
              <div className="item-title">{item.title}</div>
              <hr />
              <div className="item-price">
                {item.price}
                <span> &#36;</span>
              </div>
            </div>

            <button className="cart-btn" onClick={() => handleClick(item)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
