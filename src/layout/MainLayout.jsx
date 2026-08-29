import React from 'react';
import NavBar from '../components/shared/navBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;