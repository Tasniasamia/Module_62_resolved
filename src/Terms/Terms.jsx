import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Terms = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>
                Accepts all Terms and Condition
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi totam accusamus natus! Dolores, alias. Temporibus facilis recusandae cumque, eveniet aut, totam, provident impedit quam id eaque culpa accusantium sequi!</p>
            <h6><Link to="/Resister">Go to Resister </Link></h6>
        </div>
    );
};

export default Terms;