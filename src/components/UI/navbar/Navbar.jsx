import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <div className="navbar__links">
                <MyButton>
                    <Link to="/about">About</Link>
                </MyButton>
                <MyButton>
                    <Link to="/posts">Posts</Link>
                </MyButton>
            </div>

            <MyButton onClick={logout}>
                Logout
            </MyButton>
        </div>
    );
};

export default Navbar;