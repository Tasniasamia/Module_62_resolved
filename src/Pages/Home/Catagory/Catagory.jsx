import { useLoaderData, useParams} from 'react-router-dom';

import Newsdata from '../Newdata/Newsdata';
const Catagory = () => {
    const{id}=useParams();
    console.log(id);
   
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
             {id && <h1>The Catagory Length is  {loaddata.length}</h1>     }
            {
                loaddata.map(index=><Newsdata key={index._id} data={index}></Newsdata>)
            }
            This is catagory{loaddata.length}
          
        </div>
    );
};

export default Catagory;