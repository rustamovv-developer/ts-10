import React, { memo, useEffect } from "react";
import { toggleToWishes } from "../../context/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  let likedProducts = wishes?.map((el) => (
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
    <main className="wishlist" id="wishlist">
      <div className="container">
        <div className="products">{likedProducts}</div>
      </div>
    </main>
  );
};

export default memo(Wishlist);
