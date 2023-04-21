import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import Newsdata from '../Newdata/Newsdata';
const Catagory = () => {
    const{id}=useParams();
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
            {
                loaddata.map(index=><Newsdata key={index._id} data={index}></Newsdata>)
            }
            {/* This is catagory{loaddata.length} */}
          
        </div>
    );
};

export default Catagory;