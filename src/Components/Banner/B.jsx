import { MdOutlineArrowForwardIos } from "react-icons/md";
import i2 from "../../assets/t.avif";
const B = () => {
  return (
    <div className=" flex flex-col md:flex-row  items-center justify-between min-h-[70vh] bg-[#eff8ff]">
    <div className="xl:w-11/12 py-6 mt-5  md:w-[60vw] w-[90vw]  max-w-7xl mx-auto lg:p-0 md:px-5  md:ml-20 ">
      <h2 className="xl:text-7xl lg:text-5xl md:text-3xl text-4xl md:font-normal font-bold">
      Find Your Favorite Phone...
      </h2>
      <p className=" uppercase md:text-5xl pt-10 text-xl">Timeplaces that make a statement up to 40%</p>
      <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text-base text-sm">

      </p>
      <div className="flex pt-6">
        <button className="capitalize border-2 border-[#143063]  text-white rounded-none py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm bg-[#143063]">
          Get Start <MdOutlineArrowForwardIos />
        </button>
        <button className="capitalize border-2 border-[#143063]  font-semibold rounded-none py-3 md:px-8 px-4 flex items-center gap-5 md:text-base text-sm text-[#143063]">
          Contact
        </button>
      </div>
    </div>
    <div className=" md:h-[100vh] md:w-[60vw] w-[90vw] flex justify-center items-center">
      <img src={i2} alt="" className=" " />
    </div>
  </div>
  )
}

export default B