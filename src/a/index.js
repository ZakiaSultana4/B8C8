import toast from "react-hot-toast"
export const getFavourites = () => {
  let favourites = []
  const storedfavourites = localStorage.getItem('favourites')
  if (storedfavourites) {
    favourites = JSON.parse(storedfavourites)
  }
  return favourites
}
export const saveFavourites = phone => {
  let blogs = getFavourites()
  const isExist = favouriteItems.find((phone) => phone.id === id);
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  blogs.push(phone)
  localStorage.setItem('blogs', JSON.stringify(blogs))
  toast.success('Blog Bookmarked Successfully!')
}
export const handleAddToFavourites = () => {
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
export const deleteFavourites = id => {
  let favourites = getFavourites()
  const remaining = favourites.filter(b => b.id !== id)
  localStorage.setItem('favourites', JSON.stringify(remaining))
  toast.success('Phone Removed !')
}