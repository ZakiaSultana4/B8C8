import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { deleteFavourites, getFavourites } from "../../a";
import FavouriteCard from "./FavouriteCard";

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const savedP = getFavourites();
    if (favourites) {
      setFavourites(savedP);
    } else {
      setNoFound("no data");
    }
  }, []);
  const handleDelete = (id) => {
    deleteFavourites(id);
    //
    const savedP = getFavourites();
    setFavourites(savedP);
  };
  return (
    <div className="  my-6 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
      <div className="grid md:grid-cols-2 gap-7 grid-cols-1">
        {isShow
          ? favourites.map((phone) => (
              <>
                <div className="flex relative">
                  <FavouriteCard phone={phone} />
                  <div
                    onClick={() => handleDelete(phone.id)}
                    className="bg-[#2b4371] p-3 ml-5 rounded-full  group  cursor-pointer hover:scale-105 absolute -top-5 -right-0"
                  >
                    <MdDeleteForever
                      size={20}
                      className="text-red-600 group-hover:text-primary"
                    />
                  </div>
                </div>
              </>
            ))
          : favourites.slice(0, 4).map((phone) => (
              <>
                <div className="flex relative">
                  <FavouriteCard phone={phone} />
                  <div
                    onClick={() => handleDelete(phone.id)}
                    className="bg-[#2b4371] p-3 ml-5 rounded-full  group  cursor-pointer hover:scale-105 absolute -top-5 -right-0"
                  >
                    <MdDeleteForever
                      size={20}
                      className="text-red-600 group-hover:text-primary"
                    />
                  </div>
                </div>
              </>
            ))}
      </div>

      <div className=" mt-7">
        {favourites.length > 4 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 bg-[#192e52]  block mx-auto text-white py-2 rounded-md"
          >
            {isShow ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Favourite;
