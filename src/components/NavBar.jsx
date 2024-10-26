import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="bg-cyan-500 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-2xl">E-commerce store</h1>
               
                <Link to='/cart'> <button
                    onClick={onCartClick}
                    className="text-white bg-green-500 p-2 rounded-lg"
                >
                    Cart ({cartCount})
                </button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
