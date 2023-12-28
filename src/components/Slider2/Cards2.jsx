import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles/styles.css";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Card2 from "./Card2";

export default function Cards2() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSlideData(data));
  }, []);

  const groupedData = [];

  for (let index = 0; index < Math.ceil(slideData.length / 4); index++) {
    const start = index * 4;
    const end = start + 4;
    groupedData.push(slideData.slice(start, end));
  }

  const pagination = {
    clickable: true,
  };

  return (
    <div >
     <div className=" ">
        <h1 className=" font-semibold text-3xl  mb-3 ">Best Seller</h1>
        <div className="seller-line">

        </div>
        {/* <hr className=" bg-orange-400" /> */}
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {groupedData.map((group, index) => (
          <SwiperSlide key={index}>
            <div className=" mt-8">
              {group.map((cardData) => (
                <Card2 key={cardData.id} slideData={cardData} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
