import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Layout;
