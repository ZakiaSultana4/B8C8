import React from "react";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { id, phone_name, price, rating, image, brand_name } = phone || {};
  return (

      <div className=" container relative  rounded-xl bg-white border text-gray-700 shadow-md h-[580px]">
        <div className="relative mx-4  overflow-hidden rounded-xl bg-white  border-[#143063] text-gray-700">
          <img src={image} className="h-[370px] w-full object-cover py-8" />
        </div>
        <div className=" ">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-2xl font-medium leading-relaxed text-blue-gray-900 antialiased px-5">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased px-5">
              $ {price}
            </p>
          </div>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased px-5">
            Brand: {brand_name}
          </p>
          <p className=" ml-5 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {rating}
          </p>
        </div>
        <div className=" py-5  flex items-center justify-center ">
          <Link to={`/phone/${id}`}>
            <button className=" font-medium w-80  bg-[#143063] text-center text-white px-4 py-2 rounded-md">
              See Details
            </button>
          </Link>
        </div>
      </div>

  );
};

export default PhonesCard;
