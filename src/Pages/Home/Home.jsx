import { useLoaderData } from "react-router-dom"
import B from "../../Components/Banner/B"
import Phones from "../PhoneCategory/Phones"
// import Slider from "../../Components/Banner/Slider"


const Home = () => {
  const phones = useLoaderData()
  return (
    <div>
    <B/>
      <Phones phones={phones}></Phones>
    </div>
  )
}

export default Home