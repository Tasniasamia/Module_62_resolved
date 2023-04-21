import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
    const[catagory,setCatagory]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/catagory')
        .then(res=>res.json())
        .then(data=>setCatagory(data));
    },[])
    return (
        <div>
            <div>
                <h4>All Catagory</h4>
            {
                catagory.map(index=><p key={index.id}><Link to={`/catagory/${index.id}`}  className='text-decoration-none'>{index.name}</Link></p>)
            }</div>
        </div>
    );
};

export default Left;