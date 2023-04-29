
import {
  Navigate,
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import News_layout from "../Layout/News_layout/News_layout";
import Catagory from "../Pages/Home/Catagory/Catagory";
import News from "../Pages/Home/News/News";
import About from "../Pages/Home/About/About";
import Resister_login from "../Layout/Resister_login/Resister_login";
import Resister from "../Resister/Resister";
import Login from "../Login/Login";
import Terms from "../Terms/Terms";
import Private_route from "../Private_route/Private_route";



const router = createBrowserRouter([
  {
    path: "catagory",
    element:<Main></Main>,
    children:[
      // {
      //   path:"/",
      //   element:<Catagory></Catagory>,
      //   loader:()=>fetch('http://localhost:3000/news'),
       
      // },
      {
        path:":id",
        element:<Catagory></Catagory>,
        loader:({params})=>fetch(`https://myapp-tasniasamia.vercel.app/catagory/${params.id}`)
      }
    ],
  },
  {
    path:"New_layout",
    element:<Private_route><News_layout></News_layout></Private_route>,
    children:[
      {
        path:":id",
        element:<News></News>,
        loader:({params})=>fetch(`https://myapp-tasniasamia.vercel.app/news/${params.id}`)
      }
    ],
  },{
    path:"/",
    element:<Resister_login></Resister_login>,
    children:[
      {
path:"/",
element:<Navigate to="/catagory/0"></Navigate>
      },
      {
        path:"/Resister",
        element:<Resister></Resister>,
        loader:({params})=>{
          console.log(params);
          return params}
      },{
        path:"/Login",
        element:<Login></Login>,
      },{
        path:"/about",
        element:<About></About>
      },{
        path:"/Terms",
        element:<Terms></Terms>,
      }
    ],
  }
]);
export default router;