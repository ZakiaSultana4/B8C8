import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import i1 from "../../assets/images-1.avif";
import i2 from "../../assets/images-2.avif";
import i3 from "../../assets/images-3.avif";

const Slider = () => {
  return (
    <div className={` h-[620px] bg-slate-300 `}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={` mySwiper swiper-wrapper `}
      >
        <SwiperSlide>
          <img src={i3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
