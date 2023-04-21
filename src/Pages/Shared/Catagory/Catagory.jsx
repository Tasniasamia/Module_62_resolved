import React from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const{id}=useParams();
    
    return (
        <div>
            This is catagory{id}
        </div>
    );
};

export default Catagory;