import React, { memo, useState } from "react";
import { FaBookOpen, FaCartShopping, FaHeart } from "react-icons/fa6";
import img from "../../assets/images/nav.svg";
import { Link } from "react-router-dom";
import "../../sass/nav.scss";
import { useGetProductQuery } from "../../context/productApi";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [searchValue, setSearchValue] = useState("");
  const wishes = useSelector((state) => state.wishlist.value);

  let { t, i18n } = useTranslation();

  const { data } = useGetProductQuery();

  let handleSearch = (data) => {
    return data?.filter((user) =>
      user.title.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"}>
            <h2 className="nav__title">{t("title")}</h2>
          </Link>
          <div className="nav__context">
            <Link to="/" className="nav__card">
              <FaBookOpen style={{ color: "#fff", fontSize: "20px" }} />
              <p className="nav__text">{t("navbar-collection.catolog")}</p>
            </Link>
            <div className="nav__search">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search"
                className="nav__input"
              />
              <ul className="nav__result">
                {searchValue.trim() ? (
                  handleSearch(data?.products)?.map((el) => (
                    <li key={el.id}>{el.title}</li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
              <button className="nav__btn">
                {t("navbar-collection.search-btn")}
              </button>
            </div>
            <Link to="/wishlist" className="nav__card">
              <FaHeart style={{ color: "#fff", fontSize: "20px" }} />
              <sup className="nav__sup">{wishes.length}</sup>
              <p className="nav__text">{t("navbar-collection.order")}</p>
            </Link>
            <Link to="/" className="nav__card">
              <FaCartShopping style={{ color: "#fff", fontSize: "20px" }} />
              <p className="nav__text">{t("navbar-collection.cart")}</p>
            </Link>
            <Link to="/" className="nav__card">
              <img src={img} alt="img" className="nav__img" />
              <p className="nav__text">{t("navbar-collection.login")}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
