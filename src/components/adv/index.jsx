import React, { useEffect, useState } from "react";
import "../../sass/adv.scss";
import { useTranslation } from "react-i18next";

const Adv = () => {
  let { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "uz");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="adv" id="adv">
      <div className="container">
        <div className="adv__wrapper">
          <div className="adv__left">
            <h3 className="adv__h3">{t("adv-collection.1")}</h3>
            <h4 className="adv__h4">{t("adv-collection.1")}</h4>
          </div>
          <div className="adv__right">
            <p className="adv__text">Chilonzor tumani</p>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="adv__text"
              name=""
              id=""
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
            <p className="adv__text">UZS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adv;
