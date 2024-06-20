import React from "react";
import toast from "react-hot-toast";

const PhoneCard = ({ phone }) => {
  const { id, phone_name, image, brand_name, d } = phone || {};

  const handleAddToFavourites = () => {
    const addToFavourites = [];
    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
    if (!favouriteItems) {
      addToFavourites.push(phone);
      localStorage.setItem("favourites", JSON.stringify(addToFavourites));
    } else {
      const isExist = favouriteItems.find((phone) => phone.id === id);
      if (!isExist) {
        addToFavourites.push(...favouriteItems, phone);
        localStorage.setItem("favourites", JSON.stringify(addToFavourites));
        toast.success('This Phone is Successfully Added !')
      } else {
        toast.error('This Phone is alrady added!')
      }
    }
  };
  return (
    <div classNameName=" ">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <h4 className="mb-2 block font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {d}
          </h4>

          <button
            onClick={handleAddToFavourites}
            className="bg-[#143063] w-80  text-center text-white px-4 py-2 rounded-md mt-28"
          >
            Add to favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
