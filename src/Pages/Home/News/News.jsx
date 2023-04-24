import { useLoaderData } from "react-router-dom";
import pik1 from '../../../assets/1.png';
import pik2 from '../../../assets/2.png'

import pik3 from '../../../assets/3.png'

const News = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
        <div>
            <img src={loaddata.image_url} className="img-fluid"style={{width:"100%"}} alt="newpik" />
            <h4>{loaddata.title}</h4>
            <p>{loaddata.details}</p>
        </div>         <hr />
        <div>
   
        <div className="row row-cols-1 row-cols-md-3 g-4">
  
  <div className="col">
    <div className="card h-100">
      <img src={pik1}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={pik2}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={pik3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default News;