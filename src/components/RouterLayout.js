import { Outlet, Link } from 'react-router-dom';
import React from 'react';

import Search from './Search.js';
import Profile from './Profile.js';
import Burger from './Burger.js';

import iconHeart from './png/iconHeart.png';
import iconBasket from './png/iconBasket.png';

class RouterLayout extends React.Component {
    render() {
        return (
            <div>
                <div className='navigation'>
                    <Burger />
                    <nav className='navigation-panel'>
                        <Search />
                        <ul className='navigation-ul'>
                            <li>
                                <Profile />
                            </li>
                            <li>
                                <Link to='/favorites'>
                                    <img className='heart' src={iconHeart} />
                                </Link>
                            </li>
                            <li>
                                <Link to='/basket'>
                                    <img className='basket' src={iconBasket} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </div>
        )
    }
}

export default RouterLayout