import React, {useState} from 'react';
import './styles/App.css';
// import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>

        <Navbar/>
        <AppRouter/>


            {/*TODO Бесконечная лента и т.д. */}
            {/*https://www.youtube.com/watch?v=GNrdg3PzpJQ&list=PL6DxKON1uLOHya4bDIynPTCwZHrezUlFs*/}
            {/*02:47:10*/}
        </AuthContext.Provider>
    )
}

export default App;
