import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Header/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav />

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
