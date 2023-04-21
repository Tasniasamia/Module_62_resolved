
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Shared/Catagory/Catagory";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
       
      },{
        path:"/Catagory/:id",
        element:<Catagory></Catagory>
      }
    ]
  },
]);
export default router;