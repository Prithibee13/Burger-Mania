import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">HOME</Link>
                <Link to="/review">Review</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </nav>
            
        </div>
    );
};

export default Header;