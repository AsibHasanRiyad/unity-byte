/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
const Card2 = ({slideData}) => {
  return (
    <div className=" flex items-center gap-5">
      <div className=" w-32">
        <img
          src={slideData?.image}
          alt=""
        />
      </div>
      <div className=" text-start space-y-2">
        <ReactStars count={5} size={16} activeColor="#ffd700" />
        <h1>{slideData?.productName}</h1>
        <h1 className=" text-xl font-semibold text-orange-400">$ {slideData?.price}</h1>
      </div>
    </div>
  );
};

export default Card2;
