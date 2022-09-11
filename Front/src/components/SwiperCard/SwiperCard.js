import React, { useEffect, useState } from "react";
import { cards } from "../../helpers/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperCard = () => {
  const [windownWidth, setWindownWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindownWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  const space = windownWidth <= 480 ? 60 : 5;

  return (
    <div className="swiperCard">
      <div className="swiperCard_stories">
        <Swiper
          modules={[Navigation]}
          spaceBetween={space}
          slidesPerView={6}
          navigation={true}
          thumbs={false}
        >
          {cards.map(
            (e, index) =>
              e.name !== undefined && (
                <SwiperSlide key={index}>
                  <div key={index} className="swiperCard_stories_profile">
                    <img src={e.image} />
                    <span>{e.name}</span>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
