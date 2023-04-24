
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import News_layout from "../Layout/News_layout/News_layout";
import Catagory from "../Pages/Home/Catagory/Catagory";
import News from "../Pages/Home/News/News";
import About from "../Pages/Home/About/About";
import Resister_login from "../Layout/Resister_login/Resister_login";
import Resister from "../Resister/Resister";
import Login from "../Login/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Catagory></Catagory>,
        loader:()=>fetch('http://localhost:3000/news'),
       
      },{
        path:"/Catagory/:id",
        element:<Catagory></Catagory>,
        loader:({params})=>fetch(`http://localhost:3000/catagory/${params.id}`)
      },{
        path:"/About",
      element:<About></About>,
      }
    ],
  },
  {
    path:"/",
    element:<News_layout></News_layout>,
    children:[
      {
        path:"/New_layout/:id",
        element:<News></News>,
        loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
      }
    ],
  },{
    path:"/",
    element:<Resister_login></Resister_login>,
    children:[
      {
        path:"/Resister",
        element:<Resister></Resister>,
      },{
        path:"/Login",
        element:<Login></Login>,
      }
    ],
  }
]);
export default router;