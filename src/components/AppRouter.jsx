import React, {useContext} from 'react';
import {Navigate, Redirect, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    console.log("Login = " + isAuth);

    // return (
    //     isAuth
    //         ?
    //         <Routes>
    //             <Route path="/">
    //                 {privateRoutes.map(route =>
    //                     <Route
    //                         element={route.element}
    //                         path={route.path}
    //                         key={route.path}
    //                     />)}
    //             </Route>
    //             <Route path="*" element={<Navigate to="/login"/>}/>
    //         </Routes>
    //         :
    //         <Routes>
    //             <Route path="/">
    //                 {publicRoutes.map(route =>
    //                     <Route
    //                         element={route.element}
    //                         path={route.path}
    //                         key={route.path}
    //                     />)}
    //             </Route>
    //             <Route path="*" element={<Navigate to="/posts"/>}/>
    //         </Routes>
    // );

    return (
        <Routes>
            <Route path="/">
            {privateRoutes.map(route =>
                 <Route
                     element={route.element}
                     path={route.path}
                     key={route.path}
                 />)}
            </Route>
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    );
};

export default AppRouter;
