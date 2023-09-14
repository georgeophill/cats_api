import React from 'react';
import {BiSolidCat} from 'react-icons/bi';
import {MdFavorite} from 'react-icons/md';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return <nav>
        <div className='navbar-container'>
            <Link className='navbar-link' to={'/'}>
            <h3 className='navbar-title'>
                <span className='material-symbols-outlined navbar-icons'><BiSolidCat>Pets</BiSolidCat></span>
                <div className='navbar-title-text'>Cats</div>
            </h3>
            </Link>

            <div className='navbar-right-part'>
            <div className='navbar-links'>

            <Link className='navbar-link' to={'/favourites'}>
                    <span className='material-symbols-outlined navbar-icons'><MdFavorite>Favouties</MdFavorite></span>
                    <div className='nav-option'>Favourites</div>
            </Link>
                </div>
            </div> 
        </div>
    </nav> 
}