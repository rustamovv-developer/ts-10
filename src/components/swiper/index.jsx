import React from "react";
import { memo } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../assets/images/scr-1.png";
import img2 from "../../assets/images/scr-2.png";
import img3 from "../../assets/images/scr-3.png";
import img4 from "../../assets/images/scr-4.png";
import "../../sass/home.scss";

const SwiperWrapper = () => {
  return (
    <section className="swiper">
      <div className="container">
        <Swiper
          spaceBetween={500}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img className="swiper__img" src={img1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={img2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={img3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={img4} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default memo(SwiperWrapper);
