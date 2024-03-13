import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/sidebar';
import Trend from '../pages/Trend';

function Layout({children}) {
    return (
        <>
            <Sidebar/>
            <Outlet/>
            <Trend/> 
        </>
    );
}

export default Layout;