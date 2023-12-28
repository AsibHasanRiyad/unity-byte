import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Styles/style.css";
import Card from "./Card";

export default function Cards() {
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

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {groupedData.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {group.map((cardData) => (
                <Card key={cardData.id} slideData={cardData} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
