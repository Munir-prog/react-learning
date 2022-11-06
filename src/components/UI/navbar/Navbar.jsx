import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {
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
        </div>
    );
};

export default Navbar;