/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { FaHeart, FaSearch } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

const Card = ({ slideData }) => {
  return (
    <div className=" grid grid-cols-5 items-center gap-5 justify-start group group-hover:opacity-100 p-8">
      <div className=" col-span-2 relative ">
        <img className=" w-full px-5 py-5" src={slideData?.image} alt="" />

        <div className=" absolute w-full h-full bg-gray-300/20 flex items-center justify-center gap-3 top-0 opacity-0 group-hover:opacity-100 ">
          <button className="bg-white rounded-full p-2">
            <FaHeart className=" hover:text-orange-400 text-gray-600" />
          </button>
          <button className="bg-white rounded-full p-2">
            <FaSearch className="hover:text-orange-400 text-gray-600" />
          </button>
          <button className=" bg-white rounded-full p-2">
            <GrPowerCycle className="hover:text-orange-400 text-gray-600" />
          </button>
        </div>
        {/* offer */}
        {slideData?.offer && (
          <div className=" absolute top-4 left-4">
            <button className=" bg-orange-400 text-white p-5 w-6 h-6 text-xs flex justify-center items-center rounded-full">
              -{slideData?.offer}%
            </button>
          </div>
        )}
      </div>
      <div className=" text-start col-span-3 text-black space-y-1">
        <ReactStars
          count={5}
          size={16}
          activeColor="#ffd700"
        />
        <h1 className=" font-semibold"> {slideData?.productName} </h1>
        <h1 className=" text-orange-600 font-semibold">$ {slideData?.price}</h1>
        <p className=" text-gray-600 text-justify">{slideData?.description}</p>
        <button className=" px-4 py-2 text-sm mt-2 rounded-full bg-gray-500 text-white opacity-0 group-hover:opacity-100 ">
          {" "}
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
