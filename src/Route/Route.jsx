
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import News_layout from "../Layout/News_layout/News_layout";
import Catagory from "../Pages/Home/Catagory/Catagory";
import News from "../Pages/Home/News/News";
import About from "../Pages/Home/About/About";

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
        element:<Catagory></Catagory>,
        loader:({params})=>fetch(`http://localhost:3000/catagory/${params.id}`)
      },{
        path:"/About",
      element:<About></About>,
      }
    ]
  },
  {
    path:"/New_layout",
    element:<News_layout></News_layout>,
    children:[
      {
        path:"/New_layout/:id",
        element:<News></News>,
        loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
      }
    ]
  }
]);
export default router;