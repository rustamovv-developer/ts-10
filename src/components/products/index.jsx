import React, { memo, useState } from "react";
import { useGetProductQuery } from "../../context/productApi";
import { Link } from "react-router-dom";
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../../sass/products.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";

const index = () => {
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  const [limit, setLimit] = useState(12);

  const { data, isLoading, error } = useGetProductQuery({ limit });

  let products = data?.products?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__box">
        <img className="products__img" src={el.images[0]} alt={el.title} />
        <div className="products__icons">
          <Link
            onClick={() => dispatch(toggleToWishes(el))}
            className="products__icon"
          >
            {wishes.some((w) => w.id === el.id) ? (
              <FaHeart style={{ color: "#33A0FF", fontSize: "20px" }} />
            ) : (
              <FaRegHeart style={{ color: "#33A0FF", fontSize: "20px" }} />
            )}
          </Link>
          <Link
            onClick={() => dispatch(addToCart(el))}
            className="products__icon"
          >
            <MdOutlineShoppingCart
              style={{ color: "#33A0FF", fontSize: "20px" }}
            />
          </Link>
          <Link to={`/products/${el.id}`} className="products__icon">
            <FaRegEye style={{ color: "#33A0FF", fontSize: "20px" }} />
          </Link>
        </div>
      </div>
      <Link to={`/products/${el.id}`} className="products__exam">
        <h2 className="products__title">{el.title}</h2>
        <div className="products__new">
          <h3 className="products__h3">${el.price}</h3>
          <p className="products__text">${el.oldPrice}</p>
          <strong className="products__strong">24% Off</strong>
        </div>
      </Link>
    </div>
  ));
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products">{products}</div>
        <button
          onClick={() => setLimit((p) => p + 6)}
          className="products__btn"
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
};

export default memo(index);
