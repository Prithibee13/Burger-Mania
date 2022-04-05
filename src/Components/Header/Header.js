import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='p-10 shadow-lg nav'>
            <nav className='text-right'>
                <Link to="/home" className='mr-4'>HOME</Link>
                <Link to="/review" className='mr-4'>Review</Link>
                <Link to="/dashboard" className='mr-4'>Dashboard</Link>
                <Link to="/blog" className='mr-4'>Blog</Link>
                <Link to="/about" className='mr-4'>About</Link>
            </nav>
            
        </div>
    );
};

export default Header;