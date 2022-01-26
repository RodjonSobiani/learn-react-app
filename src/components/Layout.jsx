import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";

const Layout = () => {
    return (
        <>
            {/*<Navbar/>*/}

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">2022</footer>
        </>
    )
};

export {Layout};
