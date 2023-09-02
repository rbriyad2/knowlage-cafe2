import React from 'react';
import './Header.css';
import image from '../../images/user.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Knowledge Cafe</h2>
                <img src={image} alt="" />
            </div>
            <hr></hr>
        </div>
    );
};

export default Header;