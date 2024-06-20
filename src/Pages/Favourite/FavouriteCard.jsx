import React from 'react'

const FavouriteCard = ({phone}) => {
  return (

    <div className=" border border-[#192e52] flex shadow-md w-[500px]">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 ">
        <img
          src={phone.image}
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className=" flex flex-col  justify-center">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          {phone.brand_name}
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {phone.phone_name}
        </h4>
      </div>

    </div>
  )
}

export default FavouriteCard