import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";
import Error from "../Pages/ErrorPage/Error";
import Phone from "../Pages/PhoneDetails/Phone";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
    ],
  },
]);
export default myCreateRouter;
