import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className="navbar">
            <MyButton onClick={() => setIsAuth(false)}>
                Выйти
            </MyButton>
            <MyButton><Link to="/login">Войти</Link></MyButton>
            <div className="navbar__links">
                <MyButton><Link to="/about">О сайте</Link></MyButton>
                <MyButton><Link to="/posts">Посты</Link></MyButton>
            </div>
        </div>
    );
};

export default Navbar;
