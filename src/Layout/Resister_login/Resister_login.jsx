import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar2 from '../../Pages/Shared/Navbar/Navbar';

const Resister_login = () => {
    return (
        <div>
         <Navbar2></Navbar2>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Resister_login;