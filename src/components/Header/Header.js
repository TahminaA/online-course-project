import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="text-center header">
            <nav>
                <a href="/home">Home</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;